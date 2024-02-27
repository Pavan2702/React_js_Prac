import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FatchUserData = createAsyncThunk( "FetchAllUser" , () => {
    return axios({
        method: get,
        url: "https://fakestoreapi.com/users",
    }).then((res) => {
        console.log(res)
        // return res.data
    }).catch((err) => {
        console.log(err)
    })
})


const APISlice = createSlice({
    name: 'userData',
    initialState: { userData: [] },
    reducers:{},
    // extraReducers:(builder)=>{
    //     builder
    //     .addCase(FatchUserData.fulfilled,(state,action)=>{
    //         state.userData = action.payload;
    //     })
    // }
})

export default APISlice.reducer;