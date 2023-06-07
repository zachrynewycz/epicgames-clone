import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    items: [],
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: INITIAL_STATE,
    reducers: {
        addToWishlist: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter((item) => item.productName !== action.payload);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
