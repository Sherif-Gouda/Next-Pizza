"use client"
import { getUserOrders } from '@/app/redux/features/userOrdersSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserOrder from '@/components/UserOrder'

const page = ({params}) => {
  const { orders, loading, error} = useSelector(state=>state.userOrders)
  const dispatch = useDispatch()
  const orderList = ()=>{
    return(
        orders.map(order=>{
            return(
                <UserOrder order = {order} />
            )
        })
    )
  }
  useEffect(()=>{
    dispatch(getUserOrders(params.id))
  }, [])
  return (
    loading ? <p className='text-black text-center'>loading...</p> : error ? <p>Failed to get orders</p> 
    :
    
    <div className='flex flex-wrap'>{orderList()}</div>
    
    
  )
}

export default page