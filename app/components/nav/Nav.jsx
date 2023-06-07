import Link from "next/link";
import UserAvatar from "./UserAvatar";

function Nav() {
    return (
        <nav className="py-10 justify-between items-center flex">
            <div className="flex items-center gap-10">
                <input className="rounded-full pl-5 py-2 text-sm bg-[#202020] text-white" placeholder="Search store" />

                <ul className="flex text-neutral-400 gap-5">
                    <Link className="text-white" href={"/"}>
                        Discover
                    </Link>

                    <li>Browse</li>
                    <li>News</li>
                </ul>
            </div>

            <div className="flex items-center gap-3 text-neutral-400">
                <Link href={"/wishlist"}>Wishlist</Link>
                <Link href={"/cart"}>Cart</Link>
                <hr className="w-8 rotate-90" />
                <UserAvatar />
            </div>
        </nav>
    );
}

export default Nav;
