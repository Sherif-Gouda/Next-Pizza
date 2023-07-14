"use client"

import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
const Header = () => {
  const [providers, setProviders] = useState(null)
  const {data: session} = useSession()
  useEffect(()=>{
    const addProviders = async ()=>{
      const response = await getProviders()
      setProviders(response)
      console.log(session)
    }
    addProviders()
  }, [])

  return (
    <nav> 
        <div className="flex justify-between w-full px-4 pt-5 mb-16">
            <Link href="/" className='text-xl tracking-widest font-semibold uppercase color'>Next Pizza</Link>
            <div className='flex justify-between w-3/6 md:w-2/12 items-center'>
                <Link href="/menu">Menu</Link>
                <Link href="/cart">Cart</Link>
                
                {providers && 
                  session?.user? 
                  <Image src = {session.user.image} width={32} height={32} onClick={signOut} className="rounded-full" />
                  :
                  providers && Object.values(providers).map((provider)=><button onClick={()=>signIn(provider.id)} className='rounded-md text-white font-semibold px-5 py-1 bg-black text-center'>Login</button>)
                }
            </div>
        </div>
    </nav>
  )
}

export default Header