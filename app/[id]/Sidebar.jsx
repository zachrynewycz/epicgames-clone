import Image from "next/image";
import Prices from "./Prices";

function Sidebar({ data }) {
    console.log(data);

    return (
        <div className="mt-20">
            <Image className="px-5" src={data.pages[0].data.hero.logoImage.src} width={270} height={0} alt="" />
            <h4 className=" bg-neutral-800 text-white text-xs py-2 rounded-sm w-24 text-center mt-8 mb-3">BASE GAME</h4>

            <Prices data={data} />

            <button
                style={{ backgroundColor: data.pageTheme.dark.accent }}
                className="text-white w-full py-3 mt-3 rounded-sm text-sm bg-neutral-800"
            >
                BUY NOW
            </button>
            <button className="w-full border-white border-[1px] rounded-sm text-white text-xs py-3 mt-4">
                ADD TO CART
            </button>
            <button className="w-full  border-white border-[1px]  rounded-sm text-white text-[10px] py-2 mt-4">
                ADD TO WISHLIST
            </button>
        </div>
    );
}

export default Sidebar;
