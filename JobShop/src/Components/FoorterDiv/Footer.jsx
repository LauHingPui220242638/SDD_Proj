import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai' 
import {BsFacebook} from 'react-icons/bs' 
const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center'>
      <div>
        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
            <strong>Job</strong>Shop
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          We always make our seekers and companies find the best jobs and employers find the best candidates.
        </p>
      </div>
      
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div className='grid gap-3'>

          <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>

        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Information
        </span>
        <div className='grid gap-3'>

          <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Support</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feadback</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact</li>

        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Support
        </span>
        <div className='grid gap-3'>

          <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Promotion</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Demonstration</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>

        </div>

        
      </div>

      <div className='grid'>
          <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
            Contant Us
          </span>
          <div className='grid gap-3'>
            <small className='text-[14px] text-white'>
              JobShop@vtc.edu.hk
            </small>
            <div className='icons flex gap-4 py-[1rem]'>
              <AiFillInstagram  className='bg-white p-[10px] w-[50px] h-[50px] rounded-full icon text-blueColor'/>
              <AiOutlineTwitter  className='bg-white p-[10px] w-[50px] h-[50px] rounded-full icon text-blueColor'/>
              <BsFacebook  className='bg-white p-[10px] w-[50px] h-[50px] rounded-full icon text-blueColor'/>
            </div>
            </div>
          </div>

    </div>
  )
}

export default Footer