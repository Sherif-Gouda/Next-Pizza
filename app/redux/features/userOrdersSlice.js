import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    orders: [],
    loading: false,
    error: null
}
export const getUserOrders = createAsyncThunk('user/getUserOrders', async(id)=>{
    const {data} = await axios.get(`/api/user/${id}/orders`)
    console.log("userOrderSlice: ", data)
    return data
})
const userOrderSlice = createSlice({
    name: "userOrders",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(getUserOrders.fulfilled, (state, action)=>{
            console.log("payload", action.payload)
            state.orders = action.payload
            state.loading = false
        })
        .addCase(getUserOrders.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getUserOrders.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default userOrderSlice.reducer