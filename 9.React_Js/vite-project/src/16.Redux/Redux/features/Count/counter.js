import { createSlice } from "@reduxjs/toolkit"

const counter = createSlice({
    name: "count",
    initialState: { count: 10 },
    reducers: {
        AddOne: (state, action) => {
            state.count++,
        }
    }
})

export default counter.reducer;
export const { AddOne };