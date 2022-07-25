import React from 'react'
import {BsThreeDots,BsFillShareFill} from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
const Card2 = () => {
  return (
    
    <Card border='none' className='cards w-[35rem] relative left-[6rem]  top-5' >
        <Card.Img  variant='medium' src="https://cdn.pixabay.com/photo/2016/09/06/13/37/maserati-gran-turismo-1649119__340.jpg"/>
        <Card.Body>
            <Card.Title className='text-center'>2-Exterior and interior looks</Card.Title>
            <Card.Text className="font-bold ">
            🔬️ Education <br/> 
            <div className="text-[1.7rem]">Dhanteras 2021: Buying a car?</div>
            </Card.Text>
            <Card.Text>
           Lorem ipsum dolor sit amet  laudantium aliquid.
            </Card.Text>
            <Card.Text className='absolute left-[32rem] bottom-28'>
                <BsThreeDots className='text-[1.8rem]'/>
            </Card.Text>
        </Card.Body>
       
        <Image src='https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg'
        className=' h-[50px] w-[50px] absolute left-7 bottom-2' style={{borderRadius:'50px'}} />
        <Card.Text className='font-bold relative left-28 bottom-2'>
        Ravi Kumar
        </Card.Text>
        <Card.Text className='absolute left-[21rem] bottom-2 flex'>
        <AiOutlineEye className='font-bold' />1.4k views
        </Card.Text>
        <button  className='h-[2rem] rounded-md text-center shadow-md w-[50px] absolute left-[28rem]
        bottom-6 bg-gray-400'>
            <BsFillShareFill className='relative left-4'/>
        </button>

  </Card>

  )
}

export default Card2