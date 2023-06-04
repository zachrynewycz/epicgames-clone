import { Inter } from "next/font/google";
import EmptyListMessage from "./EmptyListMessage";

const inter = Inter({ weight: "400", preload: false });

function WishlistPage() {
    return (
        <div style={inter.style}>
            <h1 className="text-5xl text-white mb-5">Wishlist</h1>
            <>
                <h3 className="inline text-neutral-400">Sort by:</h3>
                <select className="bg-transparent pl-5 text-white w-28">
                    <option>On Sale</option>
                    <option>Recently Added</option>
                </select>
            </>

            <EmptyListMessage />
        </div>
    );
}

export default WishlistPage;
