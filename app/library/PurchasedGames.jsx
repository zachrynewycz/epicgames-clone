import Image from "next/image";
import supabase from "../api/supabase";
import { useSession } from "next-auth/react";
import fetchGameData from "../api/fetchGameData";

async function getGames(email) {
    const { data } = await supabase.from("users").select("library").eq("email", email);
    return data[0].library.map((id) => fetchGameData(id));
}

async function PurchasedGames() {
    const { data, status } = useSession();
    const games = await getGames(data.user.email);

    if (status === "loading") return <h1>Loading...</h1>;

    return (
        <div className="flex flex-wrap gap-10">
            {games.map((game, idx) => (
                <div key={idx}>
                    <Image
                        className="rounded-md"
                        src={game.pages[0].data["hero"].portraitBackgroundImageUrl}
                        width={200}
                        height={0}
                        alt=""
                    />

                    <div className="flex items-center justify-between mt-2">
                        <h3 className="text-white max-w-[10rem]">{game.productName}</h3>
                        <div className="text-white text-xs">•••</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PurchasedGames;
