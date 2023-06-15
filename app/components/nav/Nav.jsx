import Link from "next/link";
import UserAvatar from "./UserAvatar";
import { useSelector } from "react-redux";

function Nav() {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <nav className="py-10 justify-between items-center flex">
            <div className="flex items-center gap-10">
                <input className="rounded-full pl-5 py-2 text-sm bg-[#202020] text-white" placeholder="Search store" />

                <ul className="flex text-neutral-400 gap-5">
                    <Link className="text-white" href="/">
                        Discover
                    </Link>
                    <Link href="/">Browse</Link>
                    <Link href="/">News</Link>
                </ul>
            </div>

            <div className="flex items-center gap-4 text-neutral-400">
                <Link href={"/wishlist"}>Wishlist</Link>
                <Link href={"/cart"}>Cart</Link>

                {cartItems?.length > 0 && (
                    <span className="bg-white text-black rounded-full px-3 font-bold text-sm -ml-2">
                        {cartItems.length}
                    </span>
                )}

                <hr className="w-8 rotate-90" />
                <UserAvatar />
            </div>
        </nav>
    );
}

export default Nav;
