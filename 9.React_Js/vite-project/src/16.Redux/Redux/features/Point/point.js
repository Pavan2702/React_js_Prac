import { createSlice } from "@reduxjs/toolkit";

const point = createSlice({
    name: 'point',
    initialState: { point: 10 },
    reducers: {
        addOne: (state, action) => {
            state.point--;
        }
    }
})

export default point.reducer;
export const { addOne } = point.actions