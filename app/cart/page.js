"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/features/cartSlice'


const Cart = () => {
  const dispatch = useDispatch()
  const num = useSelector(state=>state.cart.total)
  console.log(useSelector(state=>state.cart))
  console.log(num)
  return (
    <button>{num}</button>
  )
}

export default Cart