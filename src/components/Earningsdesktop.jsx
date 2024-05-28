import React from 'react'

function Earningsdesktop() {
  return (
    <>
    <div className='flex justify-center mt-4 '>
                    
                   
    <div className='rounded-xl w-[650px] border-[1px] border-[rgb(143,143,143)] px-4'>
                        <div className='flex justify-between px-2 py-1 items-center'>
                            <div className='flex flex-col gap-12 '>
                                <div className='flex gap-1 items-center '>
                                <h2 className='font-bold text-[18px]'>Order ID:</h2>
                                <h2 className='font-semibold opacity-70 text-[16px]'>9099878</h2>
                                </div>
                                <div className='flex gap-1 items-center '>
                                <h2 className='font-bold text-[18px]'>Payment Mode:</h2>
                                <h2 className='font-semibold text-[16px] text-[#094446]'>UPI</h2>
                                </div>
                            </div>
                            <div className='flex flex-col gap-12 '>
                                
                                <h2 className='font-bold opacity-50 text-[15px] ml-5 mt-2'>(July 7, 2023, 13:43 pm)</h2>
                                
                                
                                <div className='flex gap-2 items-center'>
                                <h2 className='font-bold opacity-50 text-[18px] ml-8'>Earning:</h2>
                                <h2 className='font-bold text-[25px] text-[#094446]'>₹ 2500</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
    </>
  )
}

export default Earningsdesktop
