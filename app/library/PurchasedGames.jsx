import { useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../../firebase";
import Image from "next/image";

function PurchasedGames() {
    const { data } = useSession();
    const [games, setGames] = useState([]);

    const userDocRef = doc(db, "library", data.user.email);
    const gamesCollectionRef = collection(userDocRef, "games");

    useEffect(() => {
        const unsubscribe = onSnapshot(gamesCollectionRef, (snapshot) => {
            snapshot.forEach((doc) => setGames((prev) => [...prev, { id: doc.id, ...doc.data() }]));
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className="flex flex-wrap gap-10">
            {games?.map((game) => (
                <div key={game.id}>
                    <Image className="rounded-md" src={game.portraitBackgroundImageUrl} width={200} height={0} alt="" />

                    <div className="flex items-center justify-between">
                        <h3 className="text-white mt-1 max-w-[10rem]">{game.title}</h3>
                        <div className="text-white text-xs">•••</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PurchasedGames;
