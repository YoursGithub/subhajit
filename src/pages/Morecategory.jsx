import ThingCards from '@/components/ThingCards.jsx'
import React from 'react'

function Morecategory() {
  return (
    <>
    <div className='forscroll'>
    <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-6">

            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">MORE</h2>
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
                <div className='flex w-[100vw] gap-12 flex-wrap mt-[27%] ml-4'>
                <ThingCards marginTop="6" width="40vw" height="52vw" />
                <ThingCards marginTop="6" width="40vw" height="52vw" />
                <ThingCards marginTop="6" width="40vw" height="52vw" />
                <ThingCards marginTop="6" width="40vw" height="52vw" />
    </div>
    </div>
    
    </>
  )
}

export default Morecategory
