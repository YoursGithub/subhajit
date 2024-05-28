import React from 'react'
import globe from '../images/Vector (15).svg';

function Checkoutstorecards() {
  return (
   <>
      <div className='flex gap-3 items-center mt-4'>
                    <div className='w-[17vw] h-[17vw] bg-green-200 rounded-2xl'></div>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-[5vw]'>Jain Brothers</h2>
                        <div className='flex gap-2'>
                           <img className='w-[3.1vw]' src={globe} alt="" />
                           <h2 className='text-[2.7vw] opacity-55'>jainbrothers.tnennt.store</h2>
                        </div>
                    </div>
                    
                </div>
   </>
  )
}

export default Checkoutstorecards
