"use client"

import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
import UserDropDown from './UserDropDown'
import CartIcon from './CartIcon'
const Header = () => {
  const [providers, setProviders] = useState(null)
  const [toggleDropDown, setToggleDropDown] = useState(false)
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
        <div className="flex justify-between w-full px-4 pt-5 mb-16 items-center">
            <Link href="/" className='text-xl tracking-widest font-semibold uppercase text-[#13ced3]'>Next Pizza</Link>
            <div className='flex justify-between w-3/6 md:w-2/12 items-center'>
                <Link href="/menu" className='hover:text-[#13ced3] text-black'>Menu</Link>
                <Link href="/cart" className='hover:text-[#13ced3] text-black'><CartIcon/></Link>
                
                {providers && 
                  session?.user? 
                  <div className='flex flex-col items-end'>
                    <Image src = {session.user.image} width={32} height={32} onClick={()=>setToggleDropDown((dropDown)=>!dropDown)} className="rounded-full hover:cursor-pointer hover:opacity-70" />
                    {toggleDropDown && <UserDropDown setToggleDropDown = {setToggleDropDown} onClick={()=>setToggleDropDown(dropDown=>!dropDown)}/>}
                  </div>
                  :
                  providers && Object.values(providers).map((provider)=><button onClick={()=>signIn(provider.id)} className='rounded-full hover:bg-[#13ced3] uppercase text-white font-semibold px-5 py-1 bg-black text-center'>Sign in</button>)
                }
            </div>
        </div>
    </nav>
  )
}

export default Header