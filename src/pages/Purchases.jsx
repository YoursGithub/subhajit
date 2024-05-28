import React,{ useState } from 'react'
import backIcon from '../images/images3/back.png';
import Purchasecards from '../components/Purchasecards.jsx';

function Purchases() {
   
  return (
    <>
    <div className='forscroll'>
        <section className='lg:hidden'>
          <div className="sticky top-0 z-50 bg-white pb-3">
       <div className="w-full h-[12vh] flex p-[20px] justify-between">
            <div className="flex justify-center items-center gap-2">
                <h2 className="text-2xl font-black">PURCHASE</h2>
                <div className="bg-green-400 h-[1vh] w-[1vh] rounded-full"></div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <a href="">
                    <img className="w-12" src={backIcon} alt="Back" />
                </a>
            </div>
        </div>
        <div className="w-full flex p-[20px] justify-between z-50">
            <div className="flex justify-center items-center gap-2">
                <div>
                    <p className="font-bold text-[4vw]">Total Amount</p>
                    <p className="font-bold text-[4vw]" style={{ color: 'rgb(136, 136, 136)' }}>₹ 15000</p>
                </div>
            </div>
        </div>
        </div>
        <div>
        <Purchasecards/>
        <Purchasecards/>

        <Purchasecards/>
        <Purchasecards/>
        <Purchasecards/>
        <Purchasecards/>
        </div>
        </section>
    </div>
    </>
  )
}

export default Purchases
