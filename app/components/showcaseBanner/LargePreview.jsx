import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { addToWishlist } from "../../store/slices/wishlistSlice";

function LargePreview({ game }) {
    const { status } = useSession();
    const router = useRouter();
    const dispatch = useDispatch();

    const checkIfAuthorizedAndDispatch = (action) => {
        if (status === "unauthenticated") {
            router.push("/signin");
            return;
        }
        dispatch(action);
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

                <button
                    onClick={() => checkIfAuthorizedAndDispatch(addToCart(game))}
                    className="bg-white px-10 py-4 text-sm font-bold rounded-md"
                >
                    BUY NOW
                </button>

                <button
                    onClick={() => checkIfAuthorizedAndDispatch(addToWishlist(game))}
                    className="text-xs text-white px-10 py-4 rounded-md hover:bg-neutral-400 hover:opacity-70"
                >
                    <span className="w-5 h-5 rounded-full border-2 inline-block text-center mr-2">+</span>
                    ADD TO WISHLIST
                </button>
            </div>
        </div>
    );
}

export default LargePreview;
