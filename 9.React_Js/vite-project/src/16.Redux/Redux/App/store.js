import { configureStore } from "@reduxjs/toolkit";
import countAdd from "../features/Count/counter"
import amount from "../features/Amount/Amount"
import point from "../features/Point/point"
import InputData from "../features/Input/inputValue"

export const store = configureStore({
    reducer: {
        userReducer: countAdd,
        userReducer1: amount,
        userReducer2: point,
        userReducer3: InputData,
    }
})