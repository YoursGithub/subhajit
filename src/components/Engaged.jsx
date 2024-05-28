import React from 'react'
import frame407 from '../images/images3/Frame 407.png'

function Engaged() {
  return (
   <>
   <div className="flex justify-between my-4 items-center">
            <div className="flex">
                <div className="w-[12vw] h-[12vw] rounded-full bg-red-500"></div>
                <div className="flex flex-col mx-[2vw] justify-center">
                    <p className="text-[#848484] text-[3vw]">July 7, 2023</p>
                    <p className="font-bold text-[3.5vw]">kunal_deb <span className="font-normal mx-2 text-[3.5vw]">engaged to your store</span></p>
                </div>
            </div>
            <img className="w-[6vw] h-[6vw]" src={frame407} alt="" />
        </div>
   </>
  )
}

export default Engaged
