import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../api/supabase";

const INITIAL_STATE = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.name !== action.payload.name);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
