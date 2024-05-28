import React from 'react'
import phone from '../images/Vector (13).svg';

function Ongoing() {
  return (
    <>
    <div className='mt-4 flex justify-center'>
                  <div className='rounded-xl w-[93vw]  border-[1px] border-[#8F8F8F]'>
                    <div className='flex justify-between items-center px-2 py-2 '>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[22vw] h-[25vw] bg-orange-300 rounded-md'></div>
                            <div className='flex flex-col gap-3 '>
                                <h2 className='font-bold text-[3vw]'>Nikon Camera</h2>
                                <div className='flex gap-1 items-center mt-[-6%]'>
                                    <h2 className='font-bold text-[2.5vw] opacity-80'>Order ID:</h2>
                                    <h2 className='font-bold text-[3vw] opacity-80'>9099878</h2>
                                </div>
                                <h2 className='mt-4 font-bold text-[3.7vw] text-[#094446]'>₹ 999</h2>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-bold text-[3vw]     mt-[-29%]'>Provided Middlemen:</h2>
                            <h2 className='text-[2.4vw] font-bold opacity-70 mt-2'>MR. Subhajit Bhattacharjee </h2>
                            <div className='ml-4 flex gap-2 items-center'>
                                <img className='w-[2.5vw]' src={phone} alt="" />
                                <h2 className='text-[2.8vw] font-bold opacity-60'>91+ 9395593877</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between px-2 mt-2 mb-3'>
                        <div className='flex gap-2 items-center'>
                            <h2 className='font-bold text-[3vw] mt-[-1%]'>Delivery Address:</h2>
                            <p className='text-[2.3vw] font-bold opacity-60'>shyamaprasad road house number 5</p>
                        </div>
                        <h2 className='text-[#094446] font-bold text-[5vw] mt-[-2%]'>AS89K</h2>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Ongoing
