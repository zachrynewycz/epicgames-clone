import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

function PurchaseActionButtons({ game, accentColor }) {
    const { status } = useSession();
    const router = useRouter();
    const dispatch = useDispatch();

    const checkIfAuthorized = () => {
        if (status === "unauthenticated") router.push("/signin");
    };

    const handleBuyNow = () => {
        checkIfAuthorized();
        dispatch(addToCart(game));
        router.push("/cart");
    };

    const handleAddToCart = () => {
        checkIfAuthorized();
        dispatch(addToCart(game));
    };

    const handleAddToWishlist = () => {
        checkIfAuthorized();
        dispatch(addToWishlist(game));
    };

    return (
        <>
            <button
                onClick={handleBuyNow}
                style={{ backgroundColor: accentColor }}
                className="text-white w-full py-3 mt-3 rounded-sm bg-neutral-800 hover:opacity-90"
            >
                BUY NOW
            </button>

            <button
                onClick={handleAddToCart}
                className="w-full border-white border-[1px] rounded-sm text-white text-sm py-3 mt-3 hover:bg-neutral-700"
            >
                ADD TO CART
            </button>

            <button
                onClick={handleAddToWishlist}
                className="w-full border-white border-[1px] rounded-sm text-white text-[10px] py-2 mt-3 hover:bg-neutral-700 mb-5"
            >
                ADD TO WISHLIST
            </button>
        </>
    );
}

export default PurchaseActionButtons;
