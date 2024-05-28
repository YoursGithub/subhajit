import React from 'react'

function Earnings() {
  return (
    <>
    <div className='flex justify-center mt-4'>
                    
                   
    <div className='rounded-xl w-[93vw] border-[1px] border-[#8F8F8F]'>
                        <div className='flex justify-between px-2 py-1 items-center'>
                            <div className='flex flex-col gap-12 '>
                                <div className='flex gap-1 items-center mt-[-5%]'>
                                <h2 className='font-bold text-[3.4vw]'>Order ID:</h2>
                                <h2 className='font-semibold opacity-70 text-[3.2vw]'>9099878</h2>
                                </div>
                                <div className='flex gap-1 items-center '>
                                <h2 className='font-bold text-[3.4vw]'>Payment Mode:</h2>
                                <h2 className='font-semibold text-[3.2vw] text-[#094446]'>UPI</h2>
                                </div>
                            </div>
                            <div className='flex flex-col gap-12 '>
                                
                                <h2 className='font-bold opacity-50 text-[2.4vw] ml-5 mt-2'>(July 7, 2023, 13:43 pm)</h2>
                                
                                
                                <div className='flex gap-1 items-center mt-[-5%]'>
                                <h2 className='font-bold opacity-50 text-[3.4vw]'>Earning:</h2>
                                <h2 className='font-bold text-[6.2vw] text-[#094446]'>₹ 2500</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
    </>
  )
}

export default Earnings
