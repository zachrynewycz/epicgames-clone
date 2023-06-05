"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
    const { data } = useSession();

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

                {/* divider */}
                <div className="w-0.5 bg-neutral-700" />

                <div className="flex gap-2 text-white cursor-pointer">
                    {/* check if a user has signed in */}
                    {!data?.user ? (
                        <>
                            <Image src="user.svg" alt="" width={20} height={25} />
                            <Link href={"/signin"}>Sign in</Link>
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Image className="rounded-full" src={data.user.image} alt="" width={30} height={25} />
                            <h1>{data.user.name}</h1>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
