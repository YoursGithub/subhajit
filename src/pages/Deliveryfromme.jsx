import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 
import logo from '../images/images2/desktop icons/logo.png'; 
import backOption from '../images/images2/mobile icons/BACK OPTION.png'; 
import deliveryIcon from '../images/images2/mobile icons/delivery.png'; 
import confirmedIcon from '../images/images2/mobile icons/confirmed.png';
import cancelIcon from '../images/images2/mobile icons/cancel.png'; 

const DeliveryStatus = () => {
  return (
    <>
    <div className='forscroll'>
    <section className="md:hidden">
      <div className="flex m-3">
        <div className="mt-1">
          <Link className="flex items-center text-white">
            <img src={logo} alt="Your Logo" className="mt-5 w-10" />
          </Link>
        </div>

        <div className="ml-auto mt-5 md:mt-5 pr-3 sm:pr-2">
          <img src={backOption} alt="" className="w-10" />
        </div>
      </div>

      <div className="p-10 ml-5 mt-14 rounded-2xl mr-40 py-6 bg-[#FFDFDF]" style={{ width: '230px', overflow: 'hidden' }}>
        <h2 className="font-black text-2xl font-gotham-black mr-5 ml-[-25px]">
          Delivery <br /> from me <span className="text-green-500"> &bull;</span>
        </h2>
        <p className="text-[#6B6B6B] mt-4 ml-[-25px]">See all the deliveries you have sent</p>
      </div>

      
      <div className="border border-[#8F8F8F] p-10 m-5 rounded-lg relative">
        <div className="flex">
          <div className="flex-wrap">
            <div className="mt-[-21px] text-[13px]">
              <p className="ml-[-28px] font-bold">23 July, 2023</p>
              <h2 className="text-[#094446] ml-[-28px] text-[16px] font-gotham-black font-extrabold">Barnik Deb</h2>
            </div>
            <p className="ml-[-28px] text-[15px] mt-1">Delivery ID: <span className="text-[#A5A5A5] text-[13px]">9099877</span></p>
            <p className="ml-[-28px] text-[15px] mt-1">Delivery Charges: <span className="text-[#A5A5A5] text-[13px]">Rs 99</span></p>
            <h4 className="mt-5 ml-[-28px]">MSI GF75 Thin laptop</h4>
          </div>
          <div className="absolute top-5 right-3">
            <p className="font-extrabold text-[12px]">ESTIMATED DELIVERY TIME</p>
            <div className="flex">
              <img src={deliveryIcon} alt="" className="w-9 h-9 ml-6 mt-2" />
              <div>
                <p className="text-[12px] ml-2 mt-1">July 7, 2023</p>
                <p className="text-[12px] ml-2 mt-1">09:00 - 09:30 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      
      <div className="border border-[#8F8F8F] p-10 m-5 rounded-lg relative">
        <div className="flex">
          <div className="flex-wrap">
            <div className="mt-[-21px] text-[13px]">
              <p className="ml-[-28px] font-bold">23 July, 2023</p>
              <h2 className="text-[#094446] ml-[-28px] text-[16px] font-gotham-black font-extrabold">Subhajit Bhattacharjee</h2>
            </div>
            <p className="ml-[-28px] text-[15px] mt-1">Delivery ID: <span className="text-[#A5A5A5] text-[13px]">9099877</span></p>
            <p className="ml-[-28px] text-[15px] mt-1">Delivery Charges: <span className="text-[#A5A5A5] text-[13px]">Rs 99</span></p>
            <h4 className="mt-5 ml-[-28px]">MSI GF75 Thin laptop</h4>
          </div>
          <div className="absolute top-16 right-3">
            <div className="flex">
              <img src={confirmedIcon} alt="" className="w-7 h-7 ml-2 mt-2" />
              <p className="ml-2 mt-2">Delivered</p>
            </div>
          </div>
        </div>
      </div>

  
      <div className="border border-[#8F8F8F] p-10 m-5 rounded-lg relative">
        <div className="flex">
          <div className="flex-wrap">
            <div className="mt-[-21px] text-[13px]">
              <p className="ml-[-28px] font-bold">23 July, 2023</p>
              <h2 className="text-[#094446] ml-[-28px] text-[16px] font-gotham-black font-extrabold">Saurojit Karmakar</h2>
            </div>
            <p className="ml-[-28px] text-[15px] mt-1">Delivery ID: <span className="text-[#A5A5A5] text-[13px]">9099877</span></p>
            <h4 className="mt-5 ml-[-28px]">MSI GF75 Thin laptop</h4>
          </div>
          <div className="absolute top-16 right-3">
            <div className="flex">
              <img src={cancelIcon} alt="" className="w-7 h-7 ml-2 mt-2" />
              <p className="ml-2 mt-2">Cancelled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
    </>
  );
};

export default DeliveryStatus;
