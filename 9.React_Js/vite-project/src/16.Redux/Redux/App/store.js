import { configureStore } from "@reduxjs/toolkit";
import countAdd from "../features/Count/counter"

export const store = configureStore({
    reducer: {
        userReducer: countAdd
    }
})