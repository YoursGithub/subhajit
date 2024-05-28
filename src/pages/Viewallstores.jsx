import React from 'react'
import './style.css'
import Storecard from '@/components/Storecard.jsx'

function Viewallstores() {
  return (
   <>
   <div className='forscroll'>
    <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-6">

            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">STORES</h2>
                <div className="rounded-full bg-red-500 w-[1vh] h-[1vh]  mt-1"></div>
            </div>

        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                </div>
               <div className='flex flex-wrap gap-[5px] mt-[27%] px-4'>
                <Storecard/>
                <Storecard/>
                <Storecard/>
                <Storecard/>
                <Storecard/>
                <Storecard/>
               </div>
                </div>
   </>
  )
}

export default Viewallstores
