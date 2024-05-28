

import React from 'react'

function Orderplaceddesktop() {
  return (
    <>
    <div className="flex my-5 p-3 items-center border border-[#8F8F8F] rounded-[14px] gap-[20px]">
            {/* <img className="h-[22vw]" src="/images/Rectangle 2272.png" alt=""> */}
            <div className="h-[100px] w-[160px] bg-red-200"></div>
            <div className="flex justify-between items-center w-[100%]">
                <div className="flex flex-col justify-between h-[100px]">
                    <div className="flex flex-col">
                        <p className="text-[#094446] text-[20px] font-extrabold">Order Placed</p>
                        <p className="text-[16px] font-extrabold">Order ID: <span className="font-normal">9099878</span></p>
                    </div>
                    <p className="font-extrabold text-[17px]">Nikon Camera</p>
                </div>
                <div className="flex flex-col justify-between h-[100px]">
                    <p className="text-[15px] font-bold text-[#848484]">(July 7,2023,13:43 pm)</p>
                    <div className="flex justify-end">
                        <p className="text-[18px] flex text-[#848484] font-extrabold border border-[#848484] px-5 py-2 rounded-lg">₹2997</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Orderplaceddesktop
