import React from 'react'
import {BsThreeDots,BsFillShareFill} from 'react-icons/bs'
import {BiBriefcaseAlt2,BiMap} from 'react-icons/bi'
import {AiOutlineEye} from 'react-icons/ai'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
const Card4 = () => {
  return (
    <Card className='cards w-[35rem] relative top-11 left-[6rem] '>
        <Card.Body>
            <Card.Title>
            💼️ Job
            </Card.Title>
            <Card.Header className='font-bold text-[2rem]'>
            Software Developer
            </Card.Header>
            <Card.Text className='relative left-3'>
           <BiBriefcaseAlt2 className='relative top-5 right-5 '/> Innovaccer Analytics Private Ltd.
            </Card.Text>
            <Card.Text  className='relative left-96 bottom-14'>
           <BiMap className='relative top-5 right-5 '/> Noida, India
            </Card.Text>
            <Card.Text className='absolute left-[32rem] bottom-48'>
                <BsThreeDots className='text-[1.8rem]'/>
            </Card.Text>
            <Button style={{ backgroundColor: '#fff',color:'black',textAlign:'center',fontWeight:'bold',height:'2rem',width:'30rem',position:'relative',bottom:'20px',border:'2px solid blue' }}>
            Apply on Timesjobs
            </Button>
        </Card.Body>
        <Image src='https://cdn.pixabay.com/photo/2016/11/29/02/28/woman-1866858__340.jpg'
        className=' h-[50px] w-[50px] absolute left-7 bottom-2' style={{borderRadius:'50px'}} />
        <Card.Text className='font-bold relative left-28 bottom-2'>
        Sushma
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

export default Card4