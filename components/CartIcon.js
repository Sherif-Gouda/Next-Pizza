import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const {cartSize} = useSelector(state=>state.cart)
  return (
    <div className='relative'>
        <FontAwesomeIcon icon={faShoppingCart} size='lg'/>
        {cartSize > 0 && 
        <div className='absolute bottom-5 left-4 rounded-full bg-red-600 w-[16px] h-[16px] flex items-center justify-center text-white'>
            {cartSize}
        </div>
        } 
    </div>
  )
}

export default CartIcon