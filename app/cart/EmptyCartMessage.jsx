import Link from "next/link";

function EmptyCartMessage() {
    return (
        <div className="text-center max-w-2xl mx-auto my-32 col-span-4">
            <h1 className="text-white text-4xl mb-3">Your cart is empty.</h1>
            <Link href={"/"} className="underline text-neutral-400 text-2xl">
                Shop for Games & Apps
            </Link>
        </div>
    );
}

export default EmptyCartMessage;
