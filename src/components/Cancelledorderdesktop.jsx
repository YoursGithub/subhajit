

import React from 'react'
import phone from '../images/Vector (13).svg';

function Cancelledorderdesktop() {
  return (
    <>
    <div className='mt-4 flex justify-center'>
                  <div className='rounded-xl w-[600px]  border-[1px] border-[#8F8F8F]'>
                    <div className='flex justify-between items-center px-2 py-2 '>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[140px] h-[140px] bg-orange-300 rounded-md'></div>
                            <div className='flex flex-col gap-3 '>
                                <h2 className='font-bold text-[18px]'>Nikon Camera</h2>
                                <div className='flex gap-1 items-center mt-[-6%]'>
                                    <h2 className='font-bold text-[16px] opacity-80'>Order ID:</h2>
                                    <h2 className='font-bold text-[15px] opacity-80'>9099878</h2>
                                </div>
                                <h2 className='mt-12 font-bold text-[18px] text-[#094446]'>₹ 999</h2>
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <h2 className='font-bold text-[15px] mt-[-42%]'>Provided Middlemen:</h2>
                            <h2 className='text-[13px] font-bold opacity-70 mt-2'>MR. Subhajit Bhattacharjee </h2>
                            <div className='ml-4 flex gap-2 items-center'>
                                <img className='w-[13px]' src={phone} alt="" />
                                <h2 className='text-[13px] font-bold opacity-60'>91+ 9395593877</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between px-2 mt-2 mb-3'>
                        <div className='flex gap-2 items-center'>
                            <h2 className='font-bold text-[15px] text-red-500'>Cancellation Reason:</h2>
                            <p className='text-[13px] font-bold opacity-60'>Customer not available</p>
                        </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Cancelledorderdesktop
