import Image from "next/image";
import fetchGameData from "../api/fetchGameData";

function GameCard({ showFullImage = false, game }) {
    const data = fetchGameData(game);

    return (
        <div>
            <div className="relative cursor-pointer">
                <Image
                    className="rounded-md"
                    src={
                        showFullImage
                            ? data.pages[0].data["hero"].backgroundImageUrl
                            : data.pages[0].data["hero"].portraitBackgroundImageUrl
                    }
                    height={0}
                    width={500}
                    alt=""
                />
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-md" />
            </div>

            <>
                <p className="text-neutral-400 text-xs mt-4 mb-1 font-bold">BASE GAME</p>
                <h1 className="text-lg text-white mb-2">{data.productName}</h1>

                {data.price.sale ? (
                    <div className="flex gap-3 text-sm text-white items-center">
                        <h1 className="bg-blue-600 px-3 py-1 rounded-md text-xs">-{data.price.salePercent}%</h1>
                        <s className="text-neutral-400">${data.price.current}</s>
                        <h1>${data.price.salePrice}</h1>
                    </div>
                ) : (
                    <h1 className="text-white">{data.price.current === "0" ? "Free" : `$${data.price.current}`}</h1>
                )}
            </>
        </div>
    );
}

export default GameCard;
