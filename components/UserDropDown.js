import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

const UserDropDown = ({setToggleDropDown}) => {
  const {data: session} = useSession()
  const id = session.user.id
  return (
    <div className="flex-col bg-white absolute right-[25px] top-[60px] p-2 rounded-lg shadow-md border-t-black border-t-[1px]">
        <Link href={`/user/${id}/orders`} onClick={()=>setToggleDropDown(false)}>
            <p className="text-sm text-black hover:text-gray-500 tracking-wider">Orders</p>
        </Link>
        <hr className="mt-2"/>
        <button onClick={signOut} className='w-[100px] bg-red-600 border-red-600 border-[1px] p-1
       hover:bg-white hover:text-red-600 uppercase tracking-wide rounded-2xl
        text-white font-semibold mt-3 mb-1 text-xs'>
        sign out
        </button>
    </div>
  )
}

export default UserDropDown