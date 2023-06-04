import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    items: [],
    subtotal: 0,
    discount: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
            state.subtotal += Number(action.payload.price);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.name !== action.payload.name);
            state.subtotal += Number(action.payload.price);
        },
        addDiscount: (state, action) => {
            state.subtotal -= state.subtotal * (action.payload / 100);
        },
        removeDiscount: (state, action) => {
            state.subtotal += state.subtotal * (action.payload / 100);
        },
    },
});

export const { addToCart, removeFromCart, addDiscount, removeDiscount } = cartSlice.actions;
