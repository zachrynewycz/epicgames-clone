"use client";
import { useSession } from "next-auth/react";
import Nav from "../components/nav/Nav";
import FilterOptions from "./FilterOptions";
import PurchasedGames from "./PurchasedGames";
import { useRouter } from "next/navigation";

function LibraryPage() {
    const { status } = useSession();
    const router = useRouter();

    if (status === "unauthenticated") return router.push("/signin");

    return (
        <>
            {status === "authenticated" && (
                <>
                    <Nav />
                    <h1 className="text-5xl text-white mb-5">Library</h1>
                    <FilterOptions />
                    <PurchasedGames />
                </>
            )}
        </>
    );
}

export default LibraryPage;
