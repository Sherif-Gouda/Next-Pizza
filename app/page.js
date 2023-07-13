import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex justify-between w-full px-52 items-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-6xl font-bold uppercase tracking-wide text-blue-500'>The best Pizza</h1>
        <p className='font-semibold tracking-wide text-2xl mt-2'>Fresh from the oven, straight to your door!</p>
        <Link href="/menu" className='bg-gray-900 rounded-lg text-white w-32 h-8 mt-6 text-center p-1 uppercase text-semibold'>Order now</Link>
      </div>
      <div className='shrink-0'>
        <Image src={"https://pngimg.com/uploads/pizza/pizza_PNG44095.png"}
       className="drop-shadow-lg"
       width={500}
       height={500}/>
      </div>
    </div>
  )
}

export default Home