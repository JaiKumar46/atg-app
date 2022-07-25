import React from 'react'
import {BiMap} from 'react-icons/bi'
import {HiPencil,HiOutlineExclamationCircle} from 'react-icons/hi'
const Fourth = () => {
  return (
    <div className='absolute left-[58rem] top-[40rem]'>
            <div className='border-b-[1px] border-solid border-b-gray-300 w-[15rem] flex'>
                <p><BiMap/></p>
            <p>Noida, India</p>
            <p className='relative left-28 text-[20px]'><HiPencil/> </p>
            </div>
            <div className='flex w-[20rem] relative top-2'>
                <p > <HiOutlineExclamationCircle className='text-[20px]' /> </p>
                <p className='relative left-4'>Your location will help us serve better and extend a personalised experience.</p>
            </div>
    </div>
  )
}

export default Fourth