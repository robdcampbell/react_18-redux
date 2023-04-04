import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import authReducer from "./features/auth/authTest";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // auth: authReducer,
  },
});
