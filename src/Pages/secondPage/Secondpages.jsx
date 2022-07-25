import React,{useState} from 'react'
import "./secondpage.css"
import {AiFillCaretDown} from "react-icons/ai"
import Login from "../../components/verticallogin/Login"
const Secondpages = () => {
  const [modalShow, setModalShow] = useState(false);
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
          <button onClick={() => setModalShow(true)} id="join" className='relative left-6 h-[2.5rem] w-[10rem]  rounded-md font-bold 
          bg-[#2F6CE5] shadow-md text-white bottom-3' >
            <svg width="22"
            className='relative top-3 left-3' 
             height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z" fill="white"/>
</svg>
    <span className='font-bold relative bottom-3 left-3'> Join Group</span>

           </button>
           <Login  show={modalShow}
        onHide={() => setModalShow(false)}   />
        </div>

    </div></div>
  )
}

export default Secondpages