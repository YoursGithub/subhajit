import React from 'react'
import car from '../images/Vector (16).svg';
import globe from '../images/Vector (15).svg';
import coupon from '../images/Vector (11).svg';
import { Link } from 'react-router-dom';
import menudesktop from '../images/menu icon.png'
import backdesktop from '../images/back desktop.png'
import logo from '../images/Frame 397.png'
import Checkoutcardsdelete from '@/components/Checkoutcardswithdelete.jsx';
import Checkoutstorecards from '@/components/Checkoutstorecards.jsx';
import Checkoutstorecardsdesktop from '@/components/Checkoutstorecardsdesktop';
import Checkoutcardsdesktop from '@/components/Checkoutcardsdesktop';
import Checkoutcardsdesktopdelete from '@/components/Checkoutcardsdesktopdelete';

function Checkoutmain2() {
   
  return (
    <>
    <div className='forscroll'>
        <section className='lg:hidden'>
        <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-6">
                <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">CHECKOUT</h2>
                <div className="rounded-full bg-red-500 w-[1vh] h-[1vh] "></div>
            </div>
            
        </div>
        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                <div className='flex gap-1 items-center mt-12 ml-[68%]'>
                    <h2 className='font-bold text-[3.3vw]'>Order ID:</h2>
                    <p className='text-[3vw] font-bold opacity-50'>9099878</p>
                </div>
                </div>
                <div className='mt-[35%]'>
                <Checkoutcardsdelete/>
                <Checkoutcardsdelete/>
                </div>
                <div className='flex justify-center'>
                <div className='mt-6 rounded-3xl shadow-md w-[93vw]  bg-[#ffffff] px-5 py-3'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='font-bold text-[4vw]'>Provided Middlemen:</h2>
                            <h2 className='text-[3.8vw] opacity-70'>MR. Subhajit Bhattacharjee</h2>
                        </div>
                        <div className='rounded-full w-[10.5vw] h-[10.5vw] bg-green-200'></div>
                    </div>
                    <Checkoutstorecards/>
                    <Checkoutstorecards/>
                    <div className='flex gap-2 mt-6 items-center'>
                        <img className='w-[6vw]' src={car} alt="" />
                        <h2 className='text-[3.8vw] opacity-70'>Delivery in 45 Minutes</h2>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-6 px-3'>
            <div className='w-[45vw] h-[17vw] border-2 border-[#E3E3E3] rounded-[40vw] flex justify-between items-center'>
                    <div className='w-[14vw] h-[14vw] rounded-full bg-[#F3F3F3] ml-1 flex justify-center items-center'>
                        <img className='w-[4vw]' src={coupon} alt="" />
                      </div>
                      <div className='flex flex-col mr-5 gap-1'>
                        <h2 className='text-[3.2vw] font-bold '>Coupons</h2>
                        <p className='text-[2.3vw] text-[#838383] '>Orders, payments &<br/>cupons</p>
                      </div>
                    </div>
                    <div className='w-[45vw] h-[17vw] border-2 border-[#E3E3E3] rounded-[40vw] flex justify-between items-center'>
                        <h2 className='ml-3 text-[3.2vw] font-bold'>Enter Code:</h2>
                        <input className='focus:outline-none text-[3vw] mr-2 w-[20vw]' type="text" />
                    </div>
                    </div>
                    <h2 className='ml-5 mt-4 font-bold text-[4.2vw]'>Summary</h2>
                    <div className='items-center mt-5 px-5 flex justify-between'>
                      <h2 className='font-bold text-[3.5vw] opacity-55'>Subtotal</h2>
                      <h2 className='font-bold text-[3.5vw] opacity-75'>₹200</h2>
                    </div>
                    <div className='items-center mt-3 px-5 flex justify-between'>
                      <h2 className='font-bold text-[3.5vw] opacity-55'>Tax</h2>
                      <h2 className='font-bold text-[3.5vw] opacity-75'>₹90</h2>
                    </div>
                    <div className='items-center mt-3 px-5 flex justify-between'>
                      <h2 className='font-bold text-[3.5vw] opacity-55'>Delivery Charge</h2>
                      <h2 className='font-bold text-[3.5vw] opacity-75'>₹90</h2>
                    </div>
                    <div className='items-center mt-3 px-5 flex justify-between'>
                      <h2 className='font-bold text-[3.5vw] opacity-55'>Discount</h2>
                      <h2 className='font-bold text-[3.5vw]  text-red-500'>₹80</h2>
                    </div>
                    <div className='justify-center flex'>
                    <hr className='mt-2 w-[90vw]'/>

                    </div>
                    <div className='flex justify-between px-5 mt-2 mb-24'>
                        <h2 className='font-bold text-[5.4vw]'>Total</h2>
                        <h2 className='font-bold text-[5.4vw]'>₹ 210</h2>
                    </div>
                    <div className="fixed bottom-2 left-0 right-0 flex justify-center items-center">
                                <Link to="" className="flex bg-[#094446] rounded-xl text-xl p-4 w-[93vw] md:hidden text-white justify-center font-bold items-center">
                                Pay ₹210
                                </Link>
                            </div>
        </section>
        <section className='hidden lg:block overflow-x-hidden'>
  <div className="w-full flex justify-between px-5 py-5 absolute top-0">
    <div className="flex items-center justify-center relative">
        <img className="w-[10vw]" src={menudesktop} alt="" />
        <p className="absolute text-[#ffffff] font-bold mr-[50px]">Menu</p>
    </div>
    <div className="flex items-center justify-center relative">
        <img className="w-[7vw]" src={backdesktop} alt="" />
        <p className="absolute text-[#000] font-bold">Back</p>
    </div>
</div>
<div className='flex '>
<div>
<div className='flex items-center mt-[8vw] ml-6 gap-2 '>
  <h2 className='font-bold text-[30px]'>CHECKOUT</h2>
  <div className='w-[10px] h-[10px] rounded-full bg-red-500 mt-2'></div>
</div>
<div className='flex gap-5 mt-[50px] ml-[122px]'>
 <div className='border-[1px] border-[#E3E3E3] w-[160px] h-[60px] rounded-full flex justify-between items-center px-1'>

    <div className='w-[50px] h-[50px] flex justify-center items-center bg-[#F3F3F3] rounded-full'>
      <img className='w-[13px]' src={coupon} alt="" />
    </div>
    <div className='flex flex-col mr-4'>
      <h2 className='text-[12px] font-bold'>Coupons</h2>
      <p className='text-[9px] font-bold opacity-50'>View all coupons</p>
    </div>
 
 </div>
 <div className='border-[1px] border-[#E3E3E3] w-[170px] h-[60px] rounded-full flex justify-between items-center px-1'>
   <h2 className='ml-1 text-[12px] font-bold '>Enter code:</h2>
   <input type="text" className='w-[90px] text-[11px] focus:outline-none'/>
 </div>
</div>
<h2 className='font-bold text-[19px] ml-[127px] mt-10'>Summary</h2>
<div className='flex gap-[50%] ml-[127px]  mt-7'>
  <div className='flex flex-col gap-5'>
    <h2 className='font-bold opacity-65 text-[16px]'>Subtotal</h2>
    <h2 className='font-bold opacity-65 text-[16px]'>Tax</h2>
    <h2 className='font-bold opacity-65 text-[16px]'>Delivery Charge</h2>
    <h2 className='font-bold opacity-65 text-[16px]'>Discount</h2>
  </div>
  <div className='flex flex-col gap-5'>
    <h2 className='font-bold  text-[16px]'>₹200</h2>
    <h2 className='font-bold  text-[16px]'>₹200</h2>
    <h2 className='font-bold  text-[16px]'>₹200</h2>
    <h2 className='font-bold  text-[16px] text-red-500'>₹20</h2>
  </div>
</div>
<hr className='ml-[127px] mt-4 w-[324px]'/>
<div className='flex gap-[70%] ml-[127px] mt-3'>
  <h2 className='font-bold text-[18px]'>Total</h2>
  <h2 className='font-bold text-[18px]'>₹200</h2>
</div>
<button className='text-white font-bold bg-[#094446] px-[90px] py-[10px] mt-7 ml-[167px] rounded-xl'>Pay ₹200</button>
</div>
<div className='flex flex-col ml-[27%] mt-[8%]'>
<div className=' rounded-3xl shadow-md w-[540px] h-[330px] bg-[#ffffff] px-5 py-3'>
  <div className='flex justify-between'>
    <div className='flex flex-col'>
      <h2 className='font-bold text-[18px]'>Provided Middlemen:</h2>
      <h2 className='text-[16px] opacity-70'>MR. Subhajit Bhattacharjee</h2>
    </div>
    <div className='rounded-full w-[45px] h-[45px] bg-green-200'></div>
  </div>
  <div className=' w-[500px] h-[190px] mt-5 flex flex-col border-1px shadow-sm overflow-y-scroll rounded-xl px-4 py-2'>
  <Checkoutstorecardsdesktop/>
  <Checkoutstorecardsdesktop/>
  <Checkoutstorecardsdesktop/>
  <Checkoutstorecardsdesktop/>
  <Checkoutstorecardsdesktop/>
</div>
<div className='flex gap-3 items-center mt-5'>
  <img className='w-[20px]' src={car} alt="" />
  <h2 className='text-[15px]'>Delivery in 20 Minutes</h2>
</div>
</div>
<div className='mt-3 gap-3 py-2 h-[204px] rounded-3xl flex flex-col items-center overflow-y-scroll'>
      <Checkoutcardsdesktopdelete/>
      <Checkoutcardsdesktopdelete/>
      <Checkoutcardsdesktopdelete/>
      <Checkoutcardsdesktopdelete/>
      </div>
</div>

</div>

</section>
    </div>
    </>
  )
}

export default Checkoutmain2
