import { useState, useEffect, useRef } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function UserAvatar() {
    const { data, status } = useSession();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (status === "unauthenticated") {
        return (
            <div className="flex gap-2 text-white cursor-pointer">
                <Image src="user.svg" alt="" width={20} height={25} />
                <Link href={"/signin"}>Sign in</Link>
            </div>
        );
    }

    return (
        <div
            onClick={() => setShowDropdown(!showDropdown)}
            ref={dropdownRef}
            className="relative text-white cursor-pointer"
        >
            <Image className="rounded-full" src={data?.user?.image} alt="" width={40} height={0} />

            {showDropdown && (
                <div className="absolute right-0 top-12 min-w-[15rem] bg-neutral-800 rounded-sm p-3 px-5">
                    <h1>{data.user.name}</h1>
                    <hr className="border-neutral-700 my-2" />

                    <Link className="text-neutral-400 hover:text-inherit block mb-2" href={"/library"}>
                        My library
                    </Link>

                    <button className="text-neutral-400 hover:text-inherit" onClick={() => signOut()}>
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserAvatar;
