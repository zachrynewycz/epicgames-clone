import Image from "next/image";
import { useRouter } from "next/navigation";

function SmallPreview({ setSelectedGame, gameData }) {
    const router = useRouter();

    return (
        <div
            className=" hover:bg-neutral-800 cursor-pointer pl-3 rounded-xl py-3"
            key={gameData._id}
            onClick={() => setSelectedGame(gameData)}
            onDoubleClick={() => router.push(`/${gameData._title}`)}
        >
            <Image
                className="rounded-md inline mr-5"
                src={gameData.pages[0].data["hero"].portraitBackgroundImageUrl}
                alt=""
                width={65}
                height={0}
            />

            <h1 className="inline text-white">{gameData.productName}</h1>
        </div>
    );
}

export default SmallPreview;
