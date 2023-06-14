import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../store/slices/wishlistSlice";
import { removeFromCart } from "../store/slices/cartSlice";
import Image from "next/image";
import EmptyCartMessage from "./EmptyCartMessage";

function CartItems() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    if (items.length === 0) return <EmptyCartMessage />;

    return (
        <>
            {items.map((game) => (
                <div
                    key={game._id}
                    className="px-5 py-5 bg-neutral-800 rounded-md mb-5 text-white max-w-4xl relative col-span-3"
                >
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
                            onClick={() => {
                                dispatch(addToWishlist(game));
                                dispatch(removeFromCart(game.productName));
                            }}
                            className="underline text-neutral-400 mr-7 hover:text-white"
                        >
                            Move to wishlist
                        </button>

                        <button
                            onClick={() => dispatch(removeFromCart(game.productName))}
                            className="underline text-neutral-400 mr-7 hover:text-white"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CartItems;
