import Image from "next/image";
import Prices from "./Prices";
import AttributesTable from "./AttributesTable";
import PurchaseActionButtons from "./PurchaseActionButtons";
import fetchGameData from "../../api/fetchGameData";
import { useParams } from "next/navigation";

function Sidebar() {
    const { id } = useParams();
    const game = fetchGameData(id);

    return (
        <div className="mt-32 col-span-2">
            <Image className="px-5" src={game.pages[0].data.hero.logoImage.src} width={270} height={0} alt="" />
            <h4 className=" bg-neutral-800 text-white text-xs py-2 rounded-sm w-24 text-center mt-8 mb-3">BASE GAME</h4>

            <Prices price={game.price} accentColor={game.pageTheme.dark.accent} />
            <PurchaseActionButtons game={game} accentColor={game.pageTheme.dark.accent} />
            <AttributesTable attributions={game.pages[0].data.about} />
        </div>
    );
}

export default Sidebar;
