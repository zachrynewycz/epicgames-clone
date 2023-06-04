import Image from "next/image";

function SmallPreview({ setSelectedGame, gameData }) {
    return (
        <div className="col-span-1">
            {gameData.map((game) => (
                <div
                    className=" hover:bg-neutral-800 cursor-pointer pl-3 rounded-xl py-3"
                    key={game._id}
                    onClick={() => setSelectedGame(game)}
                >
                    <Image
                        className="rounded-md inline mr-5"
                        src={game.pages[0].data["hero"].portraitBackgroundImageUrl}
                        alt=""
                        width={65}
                        height={0}
                    />
                    <h1 className="inline text-white">{game.productName}</h1>
                </div>
            ))}
        </div>
    );
}

export default SmallPreview;
