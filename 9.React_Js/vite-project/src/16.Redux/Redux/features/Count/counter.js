import { createSlice } from "@reduxjs/toolkit"

const counter = createSlice({
    name: "count",
    initialState: { count: 5 },
    reducers: {
        AddOne: (state, action) => {
            state.count++

        }
    }, extraReducers: (builder) => {
        builder.addCase("amount/addbyTen", (state, action) => {
            let reduxStore = action.payload.amount
            console.log("🚀 ~ builder.addCase ~ reduxStore:", reduxStore)

            if ((reduxStore + 1) % 5 === 0) {
                // } else {
                state.count++;
            }
        })
    }
})

export default counter.reducer;
export const { AddOne } = counter.actions
