import { createSlice } from "@reduxjs/toolkit";

const InputData = createSlice({
    name: 'inputValue',
    initialState: { inputValue: [] },
    reducers: {
        addValue: (state, action) => {
            // state.inputValue += action.payload
            state.inputValue.push(action.payload)
        },
        deleteVal: (state, action) => {
            state.inputValue.pop(action.payload)
        },
        updateValue: (state, action) => {
            state.inputValue.push(action.payload)

        }
    }
})

export default InputData.reducer
export const { addValue, deleteVal, updateValue } = InputData.actions