"use client";
import Nav from "../components/nav/Nav";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

function CartPage() {
    return (
        <>
            <Nav />
            <h1 className="text-5xl text-white mb-5">My Cart</h1>

            <div className="grid grid-cols-4">
                <CartItems />
                <CartSummary />
            </div>
        </>
    );
}

export default CartPage;
