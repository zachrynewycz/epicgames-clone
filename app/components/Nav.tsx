import Image from "next/image";
import Link from "next/link";

function Nav() {
    return (
        <nav className="py-10 justify-between items-center flex">
            <div className="flex items-center gap-10">
                <input className="rounded-full pl-5 py-2 text-sm bg-[#202020] text-white" placeholder="Search store" />

                <ul className="flex text-neutral-400 gap-5">
                    <li className="text-white">Discover</li>
                    <li>Browse</li>
                    <li>News</li>
                </ul>
            </div>

            <div className="flex gap-5 text-neutral-400">
                <Link href={"/wishlist"}>Wishlist</Link>
                <Link href={"/cart"}>Cart</Link>

                <div className="w-0.5 bg-neutral-700" />

                <div className="flex gap-2 text-white">
                    <Image src="user.svg" alt="" width={20} height={25} />
                    <Link href={"/login"}>Sign in</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
