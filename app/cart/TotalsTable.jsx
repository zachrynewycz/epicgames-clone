import { useSelector } from "react-redux";

function TotalsTable() {
    const cartItems = useSelector((state) => state.cart.items);
    const currentPrices = cartItems?.reduce((total, item) => total + Number(item.price.current), 0);
    const salePrices = cartItems?.reduce((total, item) => total + Number(item.price.salePrice), 0);

    return (
        <table className="text-white table-spacing">
            <tbody>
                <tr>
                    <td>Price</td>
                    <td>${currentPrices}</td>
                </tr>
                <tr>
                    <td>Coupon Discount</td>
                    <td>-${salePrices}</td>
                </tr>
                <tr>
                    <td>Taxes</td>
                    <td className="text-neutral-400">Calculated at Checkout</td>
                </tr>
                <tr className="border-t border-neutral-400 font-bold">
                    <td>Subtotal</td>
                    <td>${(currentPrices - salePrices).toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default TotalsTable;
