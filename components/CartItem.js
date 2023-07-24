import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '@/app/redux/features/cartSlice'

const CartItem = ({item}) => {
  console.log("broskie: ", item)
  const {image, name, price, quantity, itemId} = item
  const dispatch = useDispatch()
  const handleIncrement = ({itemId, price, image, name})=>{
    dispatch(addItem({itemId: itemId, price, image, name}))
  }

  const handleDecrement=(itemId, price)=>{
    dispatch(removeItem({itemId: itemId, price}))
  }

  return (
    <div className='flex flex-row w-[80vw] mx-[10vw] md:w-[60vw] md:mx-[20vw] shadow-lg items-center bg-white border-[#969696] border-[1px] border-opacity-30 p-2 mt-1 justify-between'>
        <div className='flex flex-row items-center'>
        <Image src={image} width={70} height={70} />
        <div className='flex-col ml-5'>
            <p className='text-black font-semibold tracking-wider'>{name}</p>
            <div className='text-black flex flex-row items-center w-full'>
              ${price}
              <p className='text-xs text-gray-600 mt-1 ml-1'>x{quantity}</p>
              <div className='flex justify-between w-[50px] ml-12'>
                  <label className='font-bold hover: cursor-pointer text-black' onClick={()=>handleDecrement(itemId, price)}>-</label>
                  <label>{quantity}</label>
                  <label onClick={()=>handleIncrement({itemId, price, image, name})} className='font-bold hover: cursor-pointer text-black'>+</label>
              </div>
              </div>
        </div>
        </div>
        <div className='font-semibold text-black mr-4 text-2xl'>${(price * quantity).toFixed(2)}</div>
    </div>
  )
}

export default CartItem