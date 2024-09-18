import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FatchUserData = createAsyncThunk("FetchAllUser", () => {
    return axios({
        method: "get",
        url: `https://fakestoreapi.com/users`,
    }).then((res) => {
        return res.data
    }).catch((err) => {
        console.log(err)
    })
})

export const FatchSingleUserData = createAsyncThunk("FetchAll1User", (id) => {
    console.log("🚀 ~ FatchSingleUserData ~ id:", id)
    return axios({
        method: "get",
        url: `https://fakestoreapi.com/users/${id}`,
    }).then((res) => {
        // console.log("first")
        console.log("-----------------",res.data)
        return res.data
    }).catch((err) => {
        console.log(err)
    })
})

const APISlice = createSlice({
    name: 'userData',
    name: 'single',
    initialState: { userData: [],single:[], pending: false, errorMsg: '' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FatchUserData.fulfilled, (state, action) => {
                state.userData = action.payload;
                state.pending = false;
            }).addCase(FatchUserData.pending, (state, action) => {
                state.pending = true;
            }).addCase(FatchUserData.rejected, (state, action) => {
                state.errorMsg = action.error.message;
                state.pending = false;
            }).addCase(FatchSingleUserData.fulfilled, (state, action) => {
                state.single = action.payload;
                state.pending = false;
            }).addCase(FatchSingleUserData.pending, (state, action) => {
                state.pending = true;
            }).addCase(FatchSingleUserData.rejected, (state, action) => {
                state.errorMsg = action.error.message;
                state.pending = false;
            })
    }
})

export default APISlice.reducer;