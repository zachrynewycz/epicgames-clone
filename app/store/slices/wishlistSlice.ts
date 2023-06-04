import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
    name: string;
    price: string;
    portraitBackgroundImageUrl: string;
    ratingImageUrl: string;
}

interface WishlistState {
    items: WishlistItem[];
}

const INITIAL_STATE: WishlistState = {
    items: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: INITIAL_STATE,
    reducers: {
        addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
            state.items = [...state.items, action.payload];
        },
        removeFromWishlist: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.name !== action.payload);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
