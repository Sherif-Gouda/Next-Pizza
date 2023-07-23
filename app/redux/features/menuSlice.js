
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    items: [],
    loading: false,
    error: null
}

export const getMenuItems = createAsyncThunk('menu/getMenuItems', async()=>{
   const {data} = await axios.get('../api/menuItems')
   return data;
})
const menuSlice = createSlice({
    name: "menuSlice",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(getMenuItems.fulfilled, (state, action)=>{
            state.loading = false
            state.items = action.payload
        })
        .addCase(getMenuItems.pending, (state)=>{
            state.loading = true
        })
        .addCase(getMenuItems.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})
export default menuSlice.reducer