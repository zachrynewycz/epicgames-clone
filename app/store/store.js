import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { wishlistSlice } from "./slices/wishlistSlice";
import { cartSlice } from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        wishlist: wishlistSlice.reducer,
        cart: cartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
