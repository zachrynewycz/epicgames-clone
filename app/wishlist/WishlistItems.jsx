import { useDispatch, useSelector } from "react-redux";
import EmptyListMessage from "./EmptyListMessage";
import Image from "next/image";
import { removeFromWishlist } from "../store/slices/wishlistSlice";
import { addToCart } from "../store/slices/cartSlice";
import { useRouter } from "next/navigation";

function WishlistItems() {
    const router = useRouter();
    const dispatch = useDispatch();
    const itemsInWishlist = useSelector((state) => state.wishlist.items);

    if (itemsInWishlist.length === 0) return <EmptyListMessage />;

    return (
        <>
            {itemsInWishlist.map((game) => (
                <div key={game._id} className="px-5 py-5 bg-neutral-800 rounded-md mt-5 text-white max-w-4xl relative">
                    <div className="flex gap-5">
                        <Image
                            src={game.pages[0].data["hero"].portraitBackgroundImageUrl}
                            width={125}
                            height={0}
                            alt=""
                        />

                        <div className="w-full">
                            <div className="flex justify-between items-center mb-3">
                                <div className=" bg-neutral-700 text-white text-xs py-2 rounded-sm w-24 text-center">
                                    BASE GAME
                                </div>
                                <span>${game.price.current}</span>
                            </div>

                            <span className="text-xl">{game.productName}</span>
                        </div>
                    </div>

                    <div className="absolute right-5 bottom-5">
                        <button
                            onClick={() => dispatch(removeFromWishlist(game.productName))}
                            className="underline text-neutral-400 mr-7 hover:text-white"
                        >
                            Remove
                        </button>

                        <button
                            onClick={() => {
                                dispatch(addToCart(game));
                                router.push("/cart");
                            }}
                            className="px-10 py-3 text-sm rounded-md border-[1px]"
                        >
                            VIEW IN CART
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default WishlistItems;
