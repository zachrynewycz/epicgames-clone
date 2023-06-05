import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function UserAvatar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const { data } = useSession();

    return (
        <div className="flex gap-2 text-white cursor-pointer">
            {data?.user ? (
                <div onClick={() => setShowDropdown(!showDropdown)} className="relative">
                    <Image className="rounded-full" src={data.user.image} alt="" width={35} height={25} />

                    {showDropdown && (
                        <div className="absolute right-0 top-10 min-w-[15rem] bg-neutral-800 rounded-sm p-3 px-5">
                            <h1>{data.user.name}</h1>

                            <hr className="border-neutral-700 my-2" />

                            <button className="text-neutral-400 hover:text-inherit text-sm" onClick={() => signOut()}>
                                Sign out
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <Image src="user.svg" alt="" width={20} height={25} />
                    <Link href={"/signin"}>Sign in</Link>
                </>
            )}
        </div>
    );
}

export default UserAvatar;
