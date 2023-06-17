"use client";
import Nav from "../components/nav/Nav";
import PurchasedGames from "./PurchasedGames";

function LibraryPage() {
    return (
        <>
            <Nav />
            <h1 className="text-5xl text-white mb-5">Library</h1>

            <h3 className="inline text-neutral-400">Sort by:</h3>
            <select className="bg-transparent pl-4 text-white mb-10">
                <option>Alphabetical A-Z</option>
                <option>Recently Added</option>
            </select>

            <PurchasedGames />
        </>
    );
}

export default LibraryPage;
