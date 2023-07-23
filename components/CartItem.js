import Image from 'next/image'
import React from 'react'

const CartItem = ({item}) => {
  const {image, name, price, quantity} = item
  return (
    <div className='flex flex-row w-[80vw] mx-[10vw] md:w-[60vw] md:mx-[20vw] shadow-lg items-center bg-white border-black p-2 mt-1 justify-between'>
        <div className='flex flex-row items-center'>
        <Image src={image} width={70} height={70} />
        <div className='flex-col ml-5'>
            <p className='text-black font-semibold tracking-wider'>{name}</p>
            <div className='text-black flex flex-row items-center'>${price}<p className='text-xs text-gray-600 mt-1 ml-1'>x{quantity}</p></div>
        </div>
        </div>
        <div className='font-semibold text-black mr-4 text-2xl'>${price * quantity}</div>
    </div>
  )
}

export default CartItem