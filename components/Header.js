import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <nav> 
        <div className="flex justify-between w-full px-4 pt-5 mb-16">
            <Link href="/" className='text-xl tracking-widest font-semibold uppercase color'>Next Pizza</Link>
            <div className='flex justify-between w-2/5 md:w-2/12 items-center'>
                <Link href="/menu">Menu</Link>
                <Link href="/cart">Cart</Link>
                <p>7erio</p>
            </div>
        </div>
    </nav>
  )
}

export default Header