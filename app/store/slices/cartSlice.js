import { createSlice } from "@reduxjs/toolkit";
import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../../firebase";

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
        addToLibrary: async (state, action) => {
            try {
                const email = action.payload;
                const userDocRef = doc(db, "library", email);

                await setDoc(userDocRef, { games: [] });

                for (const item of state.items) {
                    await updateDoc(userDocRef, {
                        games: arrayUnion({
                            portraitBackgroundImageUrl: item.pages[0].data["hero"].portraitBackgroundImageUrl,
                            title: item.productName,
                        }),
                    });
                }
            } catch (error) {
                console.error("Error adding to library:", error);
            }
        },
    },
});

export const { addToCart, removeFromCart, addToLibrary } = cartSlice.actions;
