"use client"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cartReducer from '@/app/redux/features/cartSlice'
import menuReducer from '@/app/redux/features/menuSlice'

const rootReducer = combineReducers({
    cart: cartReducer,
    menu: menuReducer
})

const store = configureStore({
    reducer: rootReducer
})
export default store