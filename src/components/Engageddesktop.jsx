import React from 'react'
import frame407 from '../images/images3/Frame 407.png'

function Engageddesktop() {
  return (
   <>
   <div className="flex justify-between my-4 items-center mb-8">
            <div className="flex">
                <div className="w-[60px] h-[60px] rounded-full bg-red-500"></div>
                <div className="flex flex-col mx-3 justify-center">
                    <p className="text-[#848484] text-[16px]">July 7, 2023</p>
                    <p className="font-bold text-[17px]">kunal_deb <span className="font-normal mx-2 text-[17px]">engaged to your store</span></p>
                </div>
            </div>
            <img className="w-[30px] h-[30px]" src={frame407} alt="" />
        </div>
   </>
  )
}

export default Engageddesktop
