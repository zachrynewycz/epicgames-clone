import EmptyListMessage from "./EmptyListMessage";

function WishlistPage() {
    return (
        <div>
            <h1 className="text-5xl text-white mb-5">Wishlist</h1>

            <h3 className="inline text-neutral-400">Sort by:</h3>
            <select className="bg-transparent pl-5 text-white w-28">
                <option>On Sale</option>
                <option>Recently Added</option>
            </select>

            <EmptyListMessage />
        </div>
    );
}

export default WishlistPage;
