import React from 'react'
import frame413 from '../images/images3/Frame 413.png'

function Refundeddesktop() {
  return (
    <>
    <div className="flex my-5 p-4 items-center border border-[#8F8F8F] rounded-[14px] gap-[20px]">               
            <div className="flex justify-between items-center w-[100%]">
                <div className="flex flex-col justify-between h-[100px]">
                    <div className="flex flex-col">
                        <p className="text-red-500 text-[18px] font-extrabold">Refunded<span className="text-[15px] text-[#848484] font-normal mx-2">(July 7, 2023, 13:43 pm)</span></p>
                        <p className="text-[16px] font-extrabold">Order ID: <span className="font-normal">9099878</span></p>
                    </div>
                    <p className="text-[17px]">Provided Middleman Rejected the item</p>
                </div>
                <img className="w-[30px]" src={frame413} alt="" />
            </div>               
        </div>
    </>
  )
}

export default Refundeddesktop
