"use client"
import CartItem from '@/components/CartItem'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart } from '../redux/features/cartSlice'
import axios from 'axios'
import Swal from 'sweetalert2'


const Cart = () => {
 const [loginMessage, setLoginMessage] = useState(false)
 const {items, total} = useSelector(state=>state.cart)
 const {data: session} = useSession()
 const dispatch = useDispatch()
 const handlePlaceOrder = async ()=>{
  if(session && session.user){
  try {
    const order = {user: session.user.id, items: (items.map(item=>{return{item: item.itemId, quantity: item.quantity}})), total, date: new Date()}
    await axios.post('../api/orders', order)
    Swal.fire({
      icon: 'success',
      title: 'Order has been placed'
    }).then((result)=>{
      if(result.isConfirmed)
      dispatch(emptyCart())
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Failed to place order'
    })
  }
  }
  else
  setLoginMessage(true)
 }
  return (
    !items.length ? <p className='w-100 h-100 text-center mt-[40vh] text-black font-semibold text-4xl'>Your cart is empty!</p>
    :
    <div className = 'flex flex-col items-center'>
      <div className='flex flex-col items-baseline'>
        {
          items.map(item=>{
            return(
                <CartItem item={item} key={item.itemId}/>
            )
            
          })
        }
        <p className='text-black text-2xl font-semibold'>TOTAL: ${total.toFixed(2)}</p>
      </div>
      <button onClick={handlePlaceOrder} className='w-2/4 bg-[#13ced3] border-[#13ced3] border-[1px] p-3
       hover:bg-white hover:text-[#13ced3] uppercase tracking-widest rounded-2xl
        text-white font-semibold my-3'>
        Place Order
        </button>
        {loginMessage && <p className={`text-sm text-black`}>Please sign in to continue</p>}
    </div>
    
  )
}

export default Cart