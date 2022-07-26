import React from 'react'
import "./secondpage.css"
import {AiFillCaretDown} from "react-icons/ai"
import Button1 from '../Button1/Button1'

const Secondpages = () => {
  
  return (
    <div className='w-screen h-[3rem] secondpage '>
    <div className='flex secondpage-container justify-around relative top-10 w-[70rem]  left-[7rem] border-b-[1px] border-b-slate-300' >
        <div className='flex cont '>
          <ul className='flex '>
            <li className='active  ' >All post(32)</li>
            <li className='relative left-4'>Articles</li>
            <li className='relative left-8'>Event</li>
            <li className='relative left-12'>Education</li>
            <li className='relative left-16'>Job</li>
            <li>
              
            </li>
          </ul>
        </div>
        <div className='flex relative left-20'>
          <button className='h-[2.5rem] w-[10rem] bg-[#EDEEF0] shadow-md 
          relative bottom-3 rounded-md font-bold' >
            <span className='relative right-4 top-2'> Write a Post</span>
          <AiFillCaretDown className='relative left-32 bottom-2'/>
          </button>
          <div>
            <Button1/>
          </div>
        </div>

    </div></div>
  )
}

export default Secondpages