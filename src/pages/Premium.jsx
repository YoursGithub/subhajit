import React from 'react'
import back from '../images/images3/back.png'
import manworking from '../images/download (7) 1.svg'

function Premium() {
  return (
    <>
    <section className='lg:hidden'>
      <div className='flex justify-end mt-4 mr-3'>
        <img  className="w-[12vw]" src={back} alt="" />          
    </div>
    <div className='flex w-full mt-32 justify-center items-center'>
        <img className='w-[100vw]' src={manworking} alt="" />
    </div> 
    </section>
    </> 
  )
}

export default Premium
