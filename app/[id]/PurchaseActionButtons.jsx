import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../store/slices/wishlistSlice";
import { addToCart } from "../store/slices/cartSlice";

function PurchaseActionButtons({ data }) {
    const router = useRouter();
    const { status } = useSession();
    const dispatch = useDispatch();

    const handleClick = (callback) => {
        if (status === "unauthenticated") {
            router.push("/signin");
            return;
        }
        callback();
    };

    return (
        <>
            <button
                onClick={() =>
                    handleClick(() => {
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
                onClick={() => handleClick(() => dispatch(addToCart(data)))}
                className="w-full border-white border-[1px] rounded-sm text-white text-sm py-3 mt-3 hover:bg-neutral-700"
            >
                ADD TO CART
            </button>

            <button
                onClick={() => handleClick(() => dispatch(addToWishlist(data)))}
                className="w-full border-white border-[1px] rounded-sm text-white text-[10px] py-2 mt-3 hover:bg-neutral-700 mb-5"
            >
                ADD TO WISHLIST
            </button>
        </>
    );
}

export default PurchaseActionButtons;
