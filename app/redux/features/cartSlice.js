"use client"
import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    items: [],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem: (state, action)=>{
            const {itemId, price} = action.payload
            console.log("wehee: ",action.payload)
            const itemIdx = state.items.findIndex(item=>item.itemId === itemId)
           if(itemIdx !== -1){
            state.items[itemIdx].quantity++
           }
           else{
            state.items.push({...action.payload, quantity:1})
           }
           state.total += price
        },

        removeItem: (state, action)=>{
            const {itemId, price} = action.payload
            const itemIdx = state.items.findIndex(item=>item.itemId === itemId) 
            if(state.items[itemIdx].quantity === 1){
                state.items.splice(itemIdx, 1)
            }
            else{
                state.items[itemIdx].quantity--
            }
            state.total -= price
        },

        emptyCart: (state)=>{
          Object.assign(state, initialState)
        }
    }
    
})
export const getItemQuantity = createSelector(
    (state) => state.cart.items,
    (_, itemId) => itemId,
    (items, itemId) => {
      const itemIdx = items.findIndex((item) => item.itemId === itemId);
      if (itemIdx !== -1) {
        return items[itemIdx].quantity;
      } else {
        return 0;
      }
    }
  );
export const {addItem, removeItem, emptyCart} = cartSlice.actions
export default cartSlice.reducer