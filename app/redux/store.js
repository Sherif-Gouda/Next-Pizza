"use client"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cartReducer from '@/app/redux/features/cartSlice'
import menuReducer from '@/app/redux/features/menuSlice'
import userOrders from "./features/userOrdersSlice"
import sessionStorage from "redux-persist/es/storage/session"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"

const rootReducer = combineReducers({
    cart: cartReducer,
    menu: menuReducer,
    userOrders: userOrders
})

const persistConfig = {
    key: "root",
    storage: sessionStorage
  };
  
 const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'cart/submitOrder/fulfilled'],
      },
    }),
})
export const persistor = persistStore(store)