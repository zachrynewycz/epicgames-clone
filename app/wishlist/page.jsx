"use client";
import Nav from "../components/nav/Nav";
import WishlistItem from "./WishlistItem";

function WishlistPage() {
    return (
        <>
            <Nav />

            <h1 className="text-5xl text-white mb-5">Wishlist</h1>
            <h3 className="inline text-neutral-400">Sort by:</h3>

            <select className="bg-transparent pl-4 text-white w-24">
                <option>On Sale</option>
                <option>Recently Added</option>
            </select>

            <WishlistItem />
        </>
    );
}

export default WishlistPage;
