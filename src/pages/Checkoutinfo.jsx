import React, { useState } from 'react';
import person from '../images/person (1).svg';
import phone from '../images/Vector (14).svg';
import globe from '../images/Vector (15).svg';
import location from '../images/Group 5.svg';
import menudesktop from '../images/menu icon.png'
import backdesktop from '../images/back desktop.png'
import logo from '../images/Frame 397.png'
import { Link } from 'react-router-dom';

function Checkoutinfo() {
    const [addressType, setAddressType] = useState('home');

    const handleHomeClick = () => {
      setAddressType('home');
    };
  
    const handleOfficeClick = () => {
      setAddressType('office');
    };
  return (
    <>
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
                <div className='flex flex-col mt-[20%]'>
                  
                <div className='mt-14 ml-4 border-dashed border-2 w-[63vw] rounded-xl flex flex-col py-1'>
                      <h2 className=' font-bold text-[3.4vw] ml-2 mt-1 text-[#094446]'>Name</h2>
                      <div className='flex items-center gap-2 mt-3 ml-2'>
                        <img className='w-[3.7vw]' src={person} alt="" />
                        <input type="text" placeholder='Kunal Deb' className='why focus:outline-none  w-[23vw] text-[4vw] font-bold' 
                       />
                      </div>
                    </div>
                    <div className='mt-4 ml-4 border-dashed border-2 w-[63vw] rounded-xl flex flex-col py-1'>
                      <h2 className=' font-bold text-[3.4vw] ml-2 mt-1 text-[#094446]'>Mobile Number</h2>
                      <div className='flex items-center gap-2 mt-3 ml-2'>
                        <img className='w-[3.7vw]' src={phone} alt="" />
                        <input type="number" placeholder='Kunal Deb' className='why focus:outline-none  w-[23vw] text-[4vw] font-bold' 
                       />
                      </div>
                    </div>
                    <div className='mt-4 ml-4 border-dashed border-2 w-[83vw] rounded-xl flex flex-col py-1'>
                      <h2 className=' font-bold text-[3.4vw] ml-2 mt-1 text-[#094446]'>Flat/ Housing No./ Building/ Apartment</h2>
                      <div className='flex items-center gap-2 mt-3 ml-2'>
                        <img className='w-[3.7vw]' src={globe} alt="" />
                        <input type="number" placeholder='Kunal Deb' className='why focus:outline-none  w-[73vw] text-[4vw] font-bold' 
                       />
                      </div>
                    </div>
                    <div className='mt-4 ml-4 border-dashed border-2 w-[83vw] rounded-xl flex flex-col py-1'>
                      <h2 className=' font-bold text-[3.4vw] ml-2 mt-1 text-[#094446]'>Area/ Street/ Sector</h2>
                      <div className='flex items-center gap-2 mt-3 ml-2'>
                        <img className='w-[3.7vw]' src={location} alt="" />
                        <input type="number" placeholder='Kunal Deb' className='why focus:outline-none  w-[23vw] text-[4vw] font-bold' 
                       />
                      </div>
                    </div>
                    <div className='mt-4 ml-4 border-dashed border-2 w-[53vw] rounded-xl flex flex-col py-1'>
                      <h2 className=' font-bold text-[3.4vw] ml-2 mt-1 text-[#094446]'>Pincode</h2>
                      <div className='flex items-center gap-2 mt-3 ml-2'>

                        <input type="number" placeholder='Kunal Deb' className='why focus:outline-none  w-[23vw] text-[4vw] font-bold' 
                       />
                      </div>
                    </div>
                    <div className='flex justify-between px-4'>
                    <div className='mt-4  border-dashed border-2 w-[43vw] rounded-xl flex flex-col py-1'>
                      <h2 className=' font-bold text-[3.4vw] ml-2 mt-1 text-[#094446]'>City</h2>
                      <div className='flex items-center gap-2 mt-3 ml-2'>

                        <input type="number" placeholder='Kunal Deb' className='why focus:outline-none  w-[23vw] text-[4vw] font-bold' 
                       />
                      </div>
                    </div>
                    <div className='mt-4  border-dashed border-2 w-[43vw] rounded-xl flex flex-col py-1'>
                      <h2 className=' font-bold text-[3.4vw] ml-2 mt-1 text-[#094446]'>State</h2>
                      <div className='flex items-center gap-2 mt-3 ml-2'>

                        <input type="number" placeholder='Kunal Deb' className='why focus:outline-none  w-[23vw] text-[4vw] font-bold' 
                       />
                      </div>
                    </div>
                    </div>
                </div>
                <div className='flex gap-2'>
                <button className={` border-[1.5px] border-[#343434] px-4 py-2 rounded-3xl ml-4 mt-8 ${addressType === 'home' ? 'bg-[#343434] text-white' : 'bg-white text-[#000]'}`} onClick={handleHomeClick}>Home</button>
          <button className={` border-[1.5px] border-[#343434] px-4 py-2 rounded-3xl mt-8 ${addressType === 'office' ? 'bg-[#343434] text-white' : 'bg-white text-[#000]'}`} onClick={handleOfficeClick}>Office</button>
                </div>
                <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
                                <Link to="/checkoutaddress" className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                                Confirm Address
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
</section>
    </>
  )
}

export default Checkoutinfo
