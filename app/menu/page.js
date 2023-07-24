"use client"
import MenuItemCard from '@/components/MenuItemCard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getMenuItems } from '../redux/features/menuSlice'
import { useEffect } from 'react'



const Menu = () => {
  const {items, loading, error} = useSelector(state=>state.menu)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getMenuItems())
  }, [])
  return (
    loading ? <p className='w-100 text-center'>Loading...</p> : error ? <p>{error}</p> 
    :
    <div className = "flex flex-col items-center justify-center w-[100vw] md:flex-row lg:flex-row md:justify-between lg:justify-between md:flex-wrap">
      {
        items.map(item=>{
          return(
    
              <MenuItemCard  item = {item} key={item._id} />
          )
        })
      }
    </div>
  )
}

export default Menu