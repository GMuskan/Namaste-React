import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/cartSlice";

export const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});