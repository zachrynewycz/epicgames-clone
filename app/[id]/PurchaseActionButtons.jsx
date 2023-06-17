import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../store/slices/wishlistSlice";
import { addToCart } from "../store/slices/cartSlice";

function PurchaseActionButtons({ data }) {
    const { status } = useSession();
    const router = useRouter();
    const dispatch = useDispatch();

    const handleAuthorizedAction = (callback) => {
        if (status === "unauthenticated") {
            router.push("/signin");
        } else {
            callback();
        }
    };

    return (
        <>
            <button
                onClick={() =>
                    handleAuthorizedAction(() => {
                        dispatch(addToCart(data));
                        router.push("/cart");
                    })
                }
                style={{ backgroundColor: data.pageTheme.dark.accent }}
                className="text-white w-full py-3 mt-3 rounded-sm bg-neutral-800 hover:opacity-90"
            >
                BUY NOW
            </button>

            <button
                onClick={() => handleAuthorizedAction(() => dispatch(addToCart(data)))}
                className="w-full border-white border-[1px] rounded-sm text-white text-sm py-3 mt-3 hover:bg-neutral-700"
            >
                ADD TO CART
            </button>

            <button
                onClick={() => handleAuthorizedAction(() => dispatch(addToWishlist(data)))}
                className="w-full border-white border-[1px] rounded-sm text-white text-[10px] py-2 mt-3 hover:bg-neutral-700 mb-5"
            >
                ADD TO WISHLIST
            </button>
        </>
    );
}

export default PurchaseActionButtons;
