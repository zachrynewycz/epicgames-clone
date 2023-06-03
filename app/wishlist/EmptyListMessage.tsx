import Link from "next/link";

function EmptyListMessage() {
    return (
        <div className="text-center max-w-2xl mx-auto my-32">
            <h1 className="text-white text-4xl mb-1">You haven't added anything to your wishlist yet.</h1>
            <Link href={"/"} className="underline text-neutral-400 text-2xl">
                Shop for Games & Apps
            </Link>
        </div>
    );
}

export default EmptyListMessage;
