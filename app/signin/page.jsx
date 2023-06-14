"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";

function SigninPage() {
    const { session } = useSession();

    if (session) {
        redirect("/");
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-[#202020] rounded-md text-white text-center py-12 px-10">
                <>
                    <Image className="mx-auto" src="/epic-logo.svg" width={50} height={0} alt="" />
                    <h1 className="mt-12 mb-5 text-xl">Sign In</h1>
                </>

                <div
                    className="flex items-center justify-center w-full cursor-pointer"
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                    <div className="bg-white py-4 px-7 rounded-l-md">
                        <Image className="mx-auto" src="/google.svg" width={20} height={0} alt="" />
                    </div>
                    <h1 className="bg-[#2b2b2b] pr-24 pl-3 py-4 rounded-r-md text-sm hover:bg-neutral-700 ease-in duration-100">
                        Sign in with Google
                    </h1>
                </div>

                <p className="text-neutral-300 text-sm mt-5">
                    Don't have an Epic Games account? <span className="underline text-white">Sign Up</span>
                </p>
            </div>
        </div>
    );
}

export default SigninPage;
