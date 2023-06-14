"use client";
import Nav from "../components/nav/Nav";
import CartItems from "./CartItems";
import Subtotals from "./Subtotals";

function CartPage() {
    return (
        <>
            <Nav />
            <h1 className="text-5xl text-white mb-5">My Cart</h1>

            <div className="grid grid-cols-4">
                <CartItems />
                <Subtotals />
            </div>
        </>
    );
}

export default CartPage;
