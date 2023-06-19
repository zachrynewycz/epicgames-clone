import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../store/slices/wishlistSlice";
import { addToCart } from "../store/slices/cartSlice";
import { db } from "../../firebase";

function PurchaseActionButtons({ data }) {
    const { status } = useSession();
    const router = useRouter();
    const dispatch = useDispatch();

    const hasPurchased = async () => {
        const doc = await getDoc(doc(db, "library", data.user.email));
        return doc.data().games.includes(data.productName);
    };

    const checkIfAuthorized = () => {
        if (status === "unauthenticated") router.push("/signin");
    };

    const handleBuyNow = () => {
        checkIfAuthorized();
        dispatch(addToCart(data));
        router.push("/cart");
    };

    const handleAddToCart = () => {
        checkIfAuthorized();
        dispatch(addToCart(data));
    };

    const handleAddToWishlist = () => {
        checkIfAuthorized();
        dispatch(addToWishlist(data));
    };

    return (
        <>
            {hasPurchased ? (
                <button
                    style={{ backgroundColor: data.pageTheme.dark.accent }}
                    className="text-white w-full py-3 mt-3 rounded-sm bg-neutral-800 hover:opacity-90"
                >
                    IN LIBRARY
                </button>
            ) : (
                <>
                    <button
                        onClick={handleBuyNow}
                        style={{ backgroundColor: data.pageTheme.dark.accent }}
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
            )}
        </>
    );
}

export default PurchaseActionButtons;
