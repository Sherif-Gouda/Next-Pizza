"use client"
import axios from 'axios'
import {useEffect} from 'react'


const Menu = () => {
  useEffect(()=>{
    const getMenu = async ()=>{
      const res = await axios.get('../api/menuItems')
      console.log(res)
    }
    getMenu()
  }, [])
  return (
    <div >Menu</div>
  )
}

export default Menu