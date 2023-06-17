import { createSlice } from "@reduxjs/toolkit";
import { doc, collection, addDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const INITIAL_STATE = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            const isDuplicate = state.items?.some((item) => item._title === action.payload._title);

            if (!isDuplicate) {
                state.items = [...state.items, action.payload];
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.name !== action.payload.name);
        },
        addToLibrary: async (state, action) => {
            try {
                const email = action.payload;
                await setDoc(doc(collection(db, "library"), email), {});

                const userDocRef = doc(db, "library", email);
                const gamesCollectionRef = collection(userDocRef, "games");

                for (const item of state.items) {
                    await addDoc(gamesCollectionRef, {
                        portraitBackgroundImageUrl: item.pages[0].data["hero"].portraitBackgroundImageUrl,
                        title: item.productName,
                    });
                }
                state.items = [];
            } catch (error) {
                console.error("Error adding to library:", error);
            }
        },
    },
});

export const { addToCart, removeFromCart, addToLibrary } = cartSlice.actions;
