import Image from "next/image";
import Prices from "./Prices";
import GameAttributes from "./GameAttributes";
import PurchaseActionButtons from "./PurchaseActionButtons";

function Sidebar({ data }) {
    return (
        <div className="mt-32 col-span-2">
            <Image className="px-5" src={data.pages[0].data.hero.logoImage.src} width={270} height={0} alt="" />
            <h4 className=" bg-neutral-800 text-white text-xs py-2 rounded-sm w-24 text-center mt-8 mb-3">BASE GAME</h4>
            <Prices data={data} />
            <PurchaseActionButtons data={data} />
            <GameAttributes data={data} />
        </div>
    );
}

export default Sidebar;
