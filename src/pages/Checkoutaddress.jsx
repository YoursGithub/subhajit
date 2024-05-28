import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Checkoutcards from '../components/Checkoutcards.jsx';
import menudesktop from '../images/menu icon.png'
import backdesktop from '../images/back desktop.png'
import logo from '../images/Frame 397.png'
import Checkoutcardsdesktop from '@/components/Checkoutcardsdesktop.jsx';

function Checkoutaddress() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

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
                </div>
    <div className='flex justify-center mt-[20%]'>
      <div className='bg-[#FFFFFF] w-[93vw] mt-6 rounded-3xl shadow-xl '>
        <div className='flex justify-between items-center mt-5'>
            <h2 className='font-bold ml-5  text-[5.8vw] mt-1'>Kunal Deb</h2>
            <button className='bg-transparent border-2 border-[#094446] px-5 py-1 mt-1 rounded-full text-[#094446] text-[3.5vw] font-bold mr-5'>Home</button>
        </div>
        <div className='flex flex-col ml-5 mt-4'>
            <h2 className='text-[3.6vw] text-[#727272]'>Shyamaprasad Road House No. 3</h2>
            <h2 className='text-[3.6vw] text-[#727272]'>Karimganj Shyamaprasad Road</h2>
            <h2 className='text-[3.6vw] text-[#727272]'>Karimganj, Assam 788710</h2>
            <div className='flex gap-2 mt-4'>
            <h2 className='text-[3.6vw] text-[#727272]'>Mobile:</h2>
            <h2 className='text-[3.6vw] font-bold'>9395593877</h2>
            </div>
        </div>
        <div className='flex justify-center'>
          <Link to="/checkoutinfo">
        <button className='mt-9 mb-4 px-[23vw] py-3 text-[3.6vw] font-bold border-2 border-[#E3E3E3] rounded-3xl'>Change Your Address</button>
        </Link>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
       <Checkoutcards/>
    </div>
    <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
                                <Link to="/checkoutmain1" className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                                Continue
                                </Link>
                            </div>
  </section>
  <section className='hidden lg:block'>
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
<div className='flex items-center mt-[8vw] ml-6 gap-2 fixed'>
  <h2 className='font-bold text-[40px]'>Checkout</h2>
  <div className='w-[10px] h-[10px] rounded-full bg-red-500 mt-2'></div>
</div>
<div className='flex gap-[10%] '>
  <div className='fixed'>
<div className='bg-[#FFFFFF] w-[33vw] mt-[44%] rounded-3xl shadow-xl ml-10'>
        <div className='flex justify-between items-center mt-5'>
            <h2 className='font-bold ml-5  text-[25px] mt-1'>Kunal Deb</h2>
            <button className='bg-transparent border-2 border-[#094446] px-5 py-1 mt-1 rounded-full text-[#094446] text-[16px] font-bold mr-5'>Home</button>
        </div>
        <div className='flex flex-col ml-5 mt-4'>
            <h2 className='text-[18pxvw] text-[#727272]'>Shyamaprasad Road House No. 3</h2>
            <h2 className='text-[18px] text-[#727272]'>Karimganj Shyamaprasad Road</h2>
            <h2 className='text-[18px] text-[#727272]'>Karimganj, Assam 788710</h2>
            <div className='flex gap-2 mt-4'>
            <h2 className='text-[18px] text-[#727272]'>Mobile:</h2>
            <h2 className='text-[18px] font-bold'>9395593877</h2>
            </div>
        </div>
        <div className='flex justify-center'>
          <Link to='/checkoutinfo'>
        <button className='mt-9 mb-4 px-[10vw] py-4 text-[17px] font-bold border-2 border-[#E3E3E3] rounded-full'>Change Your Address</button>
        </Link>
        </div>
      </div>
      </div>
      <div className='ml-auto mr-[11%] mt-[10%] h-[28vw] border-[1px] shadow-md rounded-3xl w-[40vw] py-4 flex flex-col items-center overflow-y-scroll'>
      <Checkoutcardsdesktop/>
      <Checkoutcardsdesktop/>
      <Checkoutcardsdesktop/>
      <Checkoutcardsdesktop/>

      <Checkoutcardsdesktop/>
      <Checkoutcardsdesktop/>

      </div>
      <button className="text-[#ffffff] z-[999] text-[18px] py-3 px-20 bg-[#000000] border rounded-full font-bold fixed bottom-[10%] left-[63%]">
      Continue
    </button>
      </div>
      <div className="absolute bottom-[10px] flex justify-center items-center">
    <p className="mx-5 text-[12px]">©2024 Tnennt All rights reserved.</p>
    <img width="30px" className="absolute left-[49vw]" src={logo} alt="" />
</div>
  </section>
  </div>
  </> 
  )
}

export default Checkoutaddress
