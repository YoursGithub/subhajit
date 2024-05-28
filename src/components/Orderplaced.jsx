import React from 'react'

function Orderplaced() {
  return (
    <>
    <div className="flex my-5 p-3 items-center border border-[#8F8F8F] rounded-[14px] gap-[2vw]">
            {/* <img className="h-[22vw]" src="/images/Rectangle 2272.png" alt=""> */}
            <div className="h-[22vw] w-[25vw] bg-red-200"></div>
            <div className="flex justify-between items-center w-[100%]">
                <div className="flex flex-col justify-between h-[23vw]">
                    <div className="flex flex-col">
                        <p className="text-[#094446] text-[4vw] font-extrabold">Order Placed</p>
                        <p className="text-[3vw] font-extrabold">Order ID: <span className="font-normal">9099878</span></p>
                    </div>
                    <p className="font-extrabold text-[3.5vw]">Nikon Camera</p>
                </div>
                <div className="flex flex-col justify-between h-[23vw]">
                    <p className="text-[2.5vw] font-bold text-[#848484]">(July 7,2023,13:43 pm)</p>
                    <div className="flex justify-end">
                        <p className="text-[3vw] flex text-[#848484] font-extrabold border border-[#848484] px-[2vw] py-[1.5vw] rounded-lg">₹2997</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Orderplaced
