import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    name: string;
    price: string;
    portraitBackgroundImageUrl: string;
    ratingImageUrl: string;
}

interface CartState {
    items: CartItem[];
    subtotal: number;
    discount: number;
}

const INITIAL_STATE: CartState = {
    items: [],
    subtotal: 0,
    discount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items = [...state.items, action.payload];
            state.subtotal += Number(action.payload.price);
        },
        removeFromCart: (state, action: PayloadAction<{ price: number; name: string }>) => {
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
export default cartSlice.reducer;
