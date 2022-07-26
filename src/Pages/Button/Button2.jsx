import React from 'react'
import {HiLogout} from 'react-icons/hi'
const Button2 = () => {
  return (
    <div>
        <button id="join" className='relative left-6 h-[2.5rem] w-[10rem]  rounded-md font-bold 
          bg-gray-400 shadow-md text-white bottom-3' >
            <HiLogout className='relative top-3 left-5'/>
    <span className='font-bold relative bottom-3 left-3'> Leave Group</span>

           </button>
    </div>
  )
}

export default Button2