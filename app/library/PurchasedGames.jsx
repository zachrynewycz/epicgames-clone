import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../../firebase";
import Image from "next/image";

function PurchasedGames() {
    const { data } = useSession();
    const [games, setGames] = useState([]);

    const userDocRef = doc(db, "library", data.user.email);

    useEffect(() => {
        getGamesFromFirebase();
    }, []);

    const getGamesFromFirebase = async () => {
        const doc = await getDoc(userDocRef);
        setGames(doc.data().games);
    };

    return (
        <div className="flex flex-wrap gap-10">
            {games?.map((game, idx) => (
                <div key={idx}>
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
