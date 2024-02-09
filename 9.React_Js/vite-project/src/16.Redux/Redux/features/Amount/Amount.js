import { createSlice } from "@reduxjs/toolkit";
// import { Store } from "@reduxjs/toolkit";
import { store } from "../../App/store";
const amount = createSlice({
    name: "amount",
    initialState: { amount: 20 },
    reducers: {
        addbyTen: (state, action) => {
            state.amount++
        },
        addByinput: (state, action) => {
            state.amount += +action.payload
        }
    }
})

export default amount.reducer
export const { addbyTen, addByinput } = amount.actions