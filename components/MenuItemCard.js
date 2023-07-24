"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { addItem, getItemQuantity, removeItem } from '@/app/redux/features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const MenuItemCard = ({item}) => {
    const {image, name, price, description, _id} = item
    const quantity = useSelector(state=>getItemQuantity(state, _id)) 
  const dispatch = useDispatch()

  const handleIncrement = ({_id, price, image, name})=>{
    dispatch(addItem({itemId: _id, price, image, name}))
  }

  const handleDecrement=(_id, price)=>{
    if(quantity > 0){
      dispatch(removeItem({itemId: _id, price}))
    }
  }
  return (
    <div className=' rounded-xl shadow-sm bg-white mb-5 mx-[4vw] w-[200px] border-[1px] border-[#969696] border-opacity-50'>
        <Image src={image} width={200} height={70} className='rounded-t-md shadow-sm'/>
        <div className='p-3'>
        <h1 className='font-semibold text-black'>{name}</h1>
        <p className='text-xs text-gray-700 my-3'>{description}</p>
        <label className='text-black font-semibold'>${price}</label>
        <div className='flex justify-between w-1/2 mx-auto'>
            <label className='font-bold hover: cursor-pointer text-black' onClick={()=>handleDecrement(_id, price)}>-</label>
            <label>{quantity}</label>
            <label onClick={()=>handleIncrement({_id, price, image, name})} className='font-bold hover: cursor-pointer text-black'>+</label>
        </div>
        </div>

    </div>
  )
}

export default MenuItemCard