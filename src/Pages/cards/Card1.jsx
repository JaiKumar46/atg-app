import React from 'react'
import {BsThreeDots,BsFillShareFill} from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
const Card1 = () => {
  return (
 
    <Card border='none' className='cards w-[35rem] relative top-2 left-[6rem] ' >
        <Card.Img  variant='medium' src="https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_960_720.jpg"/>
        <Card.Body>
            <Card.Title className='text-center'>Pragser Wildsee, Lac Prags, Lac de Braies</Card.Title>
            <Card.Text className="font-bold ">
            ✍️ Article <br/> 
            <div className="text-[1.7rem]"> What if famous brands had regular fonts?   Meet RegulaBrands!</div>
            </Card.Text>
            <Card.Text>
           Lorem ipsum dolor sit amet  laudantium aliquid.
            </Card.Text>
            <Card.Text className='absolute left-[32rem] bottom-28'>
                <BsThreeDots className='text-[1.8rem]'/>
            </Card.Text>
        </Card.Body>
       
        <Image src='https://cdn.pixabay.com/photo/2017/03/17/04/07/woman-2150881__340.jpg'
        className=' h-[50px] w-[50px] absolute left-7 bottom-2' style={{borderRadius:'50px'}} />
        <Card.Text className='font-bold relative left-28 bottom-2'>
        Shira
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

export default Card1