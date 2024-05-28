import React from 'react'
import globe from '../images/Vector (15).svg';

function Checkoutstorecardsdesktop() {
  return (
    <>
    
    <div className='flex justify-between items-center mt-3'>
        <div className='flex gap-2 items-center'>
        <div className='w-[73px] h-[73px] rounded-lg bg-green-200'> 
        </div>
        <div className='flex flex-col items-start'>
        <h2 className='text-[18px] font-bold'>Jain Brothers</h2>
        <div className='flex gap-2'>
            <img className='w-[13px]' src={globe} alt="" />
            <h2 className='text-[12px] font-medium opacity-80'>jainbrothers.tnennt.store</h2>
        </div>
        </div>
        </div>
        <div className='flex gap-1 items-center'>
            <h2 className='text-[13px] font-bold'>Order ID:</h2>
            <h2 className='text-[11px] font-bold opacity-60'>9099878</h2>
        </div>
    </div>
    
    </>
  )
}

export default Checkoutstorecardsdesktop
