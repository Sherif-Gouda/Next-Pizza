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
       height={300}
       alt='Pizza'
       />
      </div>
      <div className='flex flex-col items-center mt-10'>
        <h1 className='text-4xl md:text-6xl font-bold uppercase tracking-wide text-[#13ced3]'>The best Pizza</h1>
        <p className='font-semibold tracking-wide text-black text:lg md:text-2xl mt-2 uppercase'>Fresh from the oven, straight to your door!</p>
        <Link href="/menu" className='bg-[#13ced3] border-[#13ced3] border-[1px] p-1 rounded-2xl
       hover:bg-white hover:text-[#13ced3] text-white w-32 h-8 mt-6 text-center uppercase text-semibold'>Order now</Link>
      </div>
    </div>
  )
}

export default Home