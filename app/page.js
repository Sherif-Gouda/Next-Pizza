import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='shrink-0'>
        <Image src={"https://pngimg.com/uploads/pizza/pizza_PNG44095.png"}
       className="drop-shadow-lg"
       width={300}
       height={300}/>
      </div>
      <div className='flex flex-col items-center mt-10'>
        <h1 className='text-4xl md:text-6xl font-bold uppercase tracking-wide text-blue-500'>The best Pizza</h1>
        <p className='font-semibold tracking-wide text:lg md:text-2xl mt-2'>Fresh from the oven, straight to your door!</p>
        <Link href="/menu" className='bg-gray-900 hover:bg-gray-800 rounded-lg text-white w-32 h-8 mt-6 text-center p-1 uppercase text-semibold'>Order now</Link>
      </div>
    </div>
  )
}

export default Home