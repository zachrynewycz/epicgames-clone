import { useSelector } from "react-redux";

function Subtotals() {
    const cartItems = useSelector((state) => state.cart.items);

    const getCurrentPrices = () => {
        return cartItems?.reduce((total, item) => total + Number(item.price.current), 0);
    };

    const getSalePrices = () => {
        return cartItems?.reduce((total, item) => total + Number(item.price.salePrice), 0);
    };

    return (
        <div>
            {cartItems.length > 0 && (
                <>
                    <h1 className="text-white text-3xl max-w-xs mb-10">Game and Apps Summary</h1>

                    <table className="text-white table-spacing">
                        <tbody>
                            <tr>
                                <td>Price</td>
                                <td>${getCurrentPrices()}</td>
                            </tr>
                            <tr>
                                <td>Coupon Discount</td>
                                <td>-${getSalePrices()}</td>
                            </tr>
                            <tr>
                                <td>Taxes</td>
                                <td className="text-neutral-400">Calculated at Checkout</td>
                            </tr>
                            <tr className="border-t border-neutral-400 font-bold">
                                <td>Subtotal</td>
                                <td>${(getCurrentPrices() - getSalePrices()).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>

                    <button className="bg-blue-600 text-white text-sm w-full py-3.5 rounded-md mt-5">CHECK OUT</button>
                </>
            )}
        </div>
    );
}

export default Subtotals;
