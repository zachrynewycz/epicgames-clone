"use client";
import Nav from "../components/nav/Nav";
import FilterOptions from "./FilterOptions";
import PurchasedGames from "./PurchasedGames";

function LibraryPage() {
    return (
        <>
            <Nav />
            <h1 className="text-5xl text-white mb-5">Library</h1>
            <FilterOptions />
            <PurchasedGames />
        </>
    );
}

export default LibraryPage;
