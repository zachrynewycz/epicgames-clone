import Image from "next/image";
import Prices from "./Prices";
import GameAttributes from "./GameAttributes";

function Sidebar({ data }) {
    console.log(data);

    return (
        <div className="mt-32 col-span-2">
            <Image className="px-5" src={data.pages[0].data.hero.logoImage.src} width={270} height={0} alt="" />
            <h4 className=" bg-neutral-800 text-white text-xs py-2 rounded-sm w-24 text-center mt-8 mb-3">BASE GAME</h4>

            <Prices data={data} />

            <button
                style={{ backgroundColor: data.pageTheme.dark.accent }}
                className="text-white w-full py-3 mt-3 rounded-sm bg-neutral-800 hover:opacity-90"
            >
                BUY NOW
            </button>
            <button className="w-full border-white border-[1px] rounded-sm text-white text-sm py-3 mt-3 hover:bg-neutral-700">
                ADD TO CART
            </button>
            <button className="w-full  border-white border-[1px]  rounded-sm text-white text-[10px] py-2 mt-3 hover:bg-neutral-700 mb-5">
                ADD TO WISHLIST
            </button>

            <GameAttributes data={data} />
        </div>
    );
}

export default Sidebar;
