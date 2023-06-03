import Image from "next/image";
import getPreviewGameInfo from "../api/getPreviewGameInfo";

interface GameCardProps {
    showFullImage?: boolean;
    game: string;
}

function GameCard({ showFullImage = false, game }: GameCardProps) {
    const data: any = getPreviewGameInfo(game);

    return (
        <div>
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
        </div>
    );
}

export default GameCard;
