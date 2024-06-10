import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"
import cartReducer from "./cartSlice"
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        darkTheme: themeReducer,
        cart: cartReducer,
        user: userReducer,
    }
});