import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { addToWishlist } from "../../store/slices/wishlistSlice";

function LargePreview({ game }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const { status } = useSession();

    const checkStatus = () => {
        if (status === "unauthenticated") router.push("/signin");
    };

    const handleBuyNow = () => {
        checkStatus();
        dispatch(addToCart(game));
    };

    const handleAddToWishlist = () => {
        checkStatus();
        dispatch(addToWishlist(game));
    };

    return (
        <div
            style={{ backgroundImage: `url(${game.pages[0].data.hero.backgroundImageUrl})` }}
            className="col-span-4 relative rounded-xl px-10 bg-cover ease-in duration-200 mx-3 "
        >
            <div className="absolute bottom-10">
                <h1 className="mb-3 text-white text-2xl font-bold">
                    Starting at ${game.price.hasSale ? game.price.salePrice : game.price.current}
                </h1>

                <button onClick={handleBuyNow} className="bg-white px-10 py-4 rounded-md text-sm font-bold">
                    BUY NOW
                </button>

                <button onClick={handleAddToWishlist} className="ml-5 text-xs text-white">
                    <span className="w-5 h-5 rounded-full border-2 inline-block text-center mr-2">+</span>
                    ADD TO WISHLIST
                </button>
            </div>
        </div>
    );
}

export default LargePreview;
