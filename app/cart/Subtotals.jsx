import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { ClipLoader } from "react-spinners";
import { addToLibrary } from "../store/slices/cartSlice";
import TotalsTable from "./TotalsTable";

function Subtotals() {
    const { data } = useSession();
    const [isProcessing, setIsProcessing] = useState(false);

    const dispatch = useDispatch();
    const itemsInCart = useSelector((state) => state.cart.items);

    const handlePurchase = () => {
        setIsProcessing(true);
        //Simulated purchasing
        setTimeout(() => {
            dispatch(addToLibrary(data.user.email));
            setIsProcessing(false);
        }, 4000);
    };

    if (itemsInCart.length < 1) return;

    return (
        <div className="row-start-1 col-start-4 row-span-2">
            <h1 className="text-white text-3xl max-w-xs mb-7">Game and Apps Summary</h1>
            <TotalsTable />

            <button
                onClick={handlePurchase}
                className="bg-blue-600 text-white text-sm w-full py-3.5 rounded-md mt-5 hover:bg-blue-500 ease-in duration-150 flex items-center justify-center gap-2"
            >
                <ClipLoader loading={isProcessing} color="white" size={20} />
                CHECK OUT
            </button>
        </div>
    );
}

export default Subtotals;
