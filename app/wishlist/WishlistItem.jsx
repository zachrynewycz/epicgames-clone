import { useSelector } from "react-redux";
import EmptyListMessage from "./EmptyListMessage";

function WishlistItem() {
    const { items } = useSelector((state) => state.wishlist);

    if (items.length === 0) return <EmptyListMessage />;

    return <div></div>;
}

export default WishlistItem;
