
const UserOrder = ({order}) => {
    const {items, total, date} = order
    const dateOptions = {
        weekday: 'long',
        day: '2-digit', 
        month: 'long',   
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }
    return (
      <div className="flex justify-between bg-white shadow-lg rounded-md w-3/4 mx-[12vw] md:w-[50vw] md:mx-[25vw] p-4 items-center mb-3 border-[#969696] border-[1px] border-opacity-30">
          <div className="flex flex-col gap-2 font-semibold">
            <p className="text-sm text-gray-400">{new Date(date).toLocaleString('en-us', dateOptions)}</p>
              {items.map(item=>{
                  return(
                      <div className="flex" key={item._id}>
                          <p className="text-black">{item.item.name}</p>
                          <p className='text-xs text-gray-600 mt-1 ml-1'>x{item.quantity}</p>
                      </div>
                  )
              })}
          </div>
              <p className="font-semibold text-2xl mx-3">${total}</p>
      </div>
    )
  }
  
  export default UserOrder