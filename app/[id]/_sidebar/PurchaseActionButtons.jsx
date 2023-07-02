import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

function PurchaseActionButtons({ game, accentColor }) {
    const { status } = useSession();
    const router = useRouter();
    const dispatch = useDispatch();

    const checkIfAuthorizedAndDispatch = (action) => {
        if (status === "unauthenticated") {
            router.push("/signin");
        } else {
            dispatch(action);
        }
    };

    return (
        <>
            <button
                onClick={() => checkIfAuthorizedAndDispatch(addToCart(game))}
                style={{ backgroundColor: accentColor }}
                className="text-white w-full py-3 mt-3 rounded-sm bg-neutral-800 hover:opacity-90"
            >
                BUY NOW
            </button>

            <button
                onClick={() => checkIfAuthorizedAndDispatch(addToCart(game))}
                className="w-full border-white border-[1px] rounded-sm text-white text-sm py-3 mt-3 hover:bg-neutral-700"
            >
                ADD TO CART
            </button>

            <button
                onClick={() => checkIfAuthorizedAndDispatch(addToWishlist(game))}
                className="w-full border-white border-[1px] rounded-sm text-white text-[11px] py-2 mt-3 hover:bg-neutral-700 mb-5"
            >
                + ADD TO WISHLIST
            </button>
        </>
    );
}

export default PurchaseActionButtons;
