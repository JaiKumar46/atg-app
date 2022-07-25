import React from 'react'
import {BsThreeDots,BsFillShareFill} from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';

const Card3 = () => {
  return (
    
    <Card border='none' className='cards w-[35rem] relative top-8 left-[6rem] ' >
        <Card.Img  variant='medium' src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340__340.jpg" />
        <Card.Body>
            <Card.Title className='text-center'>Digital Marketing</Card.Title>
            <Card.Text className="font-bold ">
            🗓️ Meetup <br/> 
            <div className="text-[1.7rem]"> The Difference Between ITM and Business Analytics</div>
            </Card.Text>
            <Card.Text>
           Lorem ipsum dolor sit amet  laudantium aliquid.
            </Card.Text>
            {/* <Card.Text className='absolute left-[32rem] bottom-28'>
                <BsThreeDots className='text-[1.8rem]'/>
            </Card.Text> */}
            <Dropdown className='absolute left-[28rem] bottom-20 w-14 h-[1rem]' focusFirstItemOnShow={false} >
      <Dropdown.Toggle  id="dropdown" className='dropdown-toggle w-14 h-[1rem]'  style={{ backgroundColor: 'white' ,border:'none'}} variant="secondary">
      <BsThreeDots className='text-[1.8rem] relative bottom-3 text-black'/>
      </Dropdown.Toggle>

      <Dropdown.Menu flip >
        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            <Button style={{ backgroundColor: '#fff',color:'black',textAlign:'center',fontWeight:'bold',height:'2rem',width:'30rem',position:'relative',bottom:'20px',border:'2px solid blue' }}>
                Visit Website
            </Button>
        </Card.Body>
       
        <Image src='https://cdn.pixabay.com/photo/2016/11/29/06/46/adult-1867889__340.jpg'
        className=' h-[50px] w-[50px] absolute left-7 bottom-2' style={{borderRadius:'50px'}} />
        <Card.Text className='font-bold relative left-28 bottom-2'>
        Manara 
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

export default Card3