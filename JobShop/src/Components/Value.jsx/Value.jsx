import React from 'react'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>
        The value that holds us true and to account
      </h1>
      <div className='grid gap-[2rem] grid-cols-3 items-center'>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] flex items-center justify-center'>
              <img src='https://picsum.photos/50' alt='' className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Things beinf made beatifu simple are at the heart of evrything we do.
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] flex items-center justify-center'>
              <img src='https://picsum.photos/50' alt='' className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Things beinf made beatifu simple are at the heart of evrything we do.
          </p>
        </div>


        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] flex items-center justify-center'>
              <img src='https://picsum.photos/50' alt='' className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Things beinf made beatifu simple are at the heart of evrything we do.
          </p>
        </div>
        

        

      </div>

      <div className='card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]'>

        <div>
          <h1 className='text-blueColor text-[30px] font-bold' >Read to switch a career</h1>
          <h2 className='text-blueColor text-[25px] font-bold' >Let's get started</h2>
          

        </div>
        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
            Get Started
          </button>
      </div>
    </div>
  )
}

export default Value