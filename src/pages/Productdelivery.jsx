import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/images2/desktop icons/logo.png';
import bigIllustration from '../images/images2/mobile icons/big illustration.png';
import smallIllustration from '../images/images2/mobile icons/small illustrtion.png';
import greenbar from '../images/images2/mobile icons/green bar mobile.png'
import earthIcon from '../images/images2/mobile icons/earth.png';
import './style.css';

const  Productdelivery = () => {
  const [selectedParcel, setSelectedParcel] = useState(null);

  const handleParcelSelect = (parcel) => {
    setSelectedParcel(parcel);
  };

  return (
    <>
    <div className='forscroll'>
    <section className="md:hidden">
      <div className="w-full h-64" style={{ backgroundImage: `url(${bigIllustration})`, backgroundSize: 'cover', padding: '20px' }}>
        <div className="flex">
          <div className="mt-1">
            <Link className="flex items-center text-white">
              <img src={logo} alt="Your Logo" className="mt-5 w-10" />
            </Link>
          </div>
          <div className="ml-auto mt-5 md:mt-5 pr-3 sm:pr-2">
            <img src="./images2/mobile icons/BACK OPTION.png" alt="" className="w-10" />
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl font-gotham-black font-bold mr-28" style={{ color: 'black' }}>Enter Your Delivery Address & Parcel Details</h1>
        </div>
      </div>

      <div className="ml-[-170px] h-72" style={{ backgroundImage: `url(${smallIllustration})`, backgroundSize: 'cover', backgroundPosition: 'left' }}>
        <div className="flex">
          <div className="ml-3 mt-28">
            <img src={greenbar} alt="" className="w-[13px] h-[150px] ml-44 float-left" />
          </div>
          <div className="flex-col">
            <div className="p-8">
              <h1 className="text-[17px] font-extrabold mb-3">Pickup Details</h1>
              <div className="relative">
                <div className="input-with-icon">
                  <div className="absolute left-0 p-2 pointer-events-none font-extrabold text-black ml-1 text-[17px]">Location</div>
                  <img src={earthIcon} alt="" className="absolute top-10 left-3 w-4 h-4" />
                  <Link to='/pickupdetails'>
                    <input type="text" id="Location" name="Location" className="border w-full pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-10 focus:outline-none" placeholder="Pickup item from..." onFocus="askForLocation()" onBlur="collapseLabel('LocationLabel')" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h1 className="text-[17px] font-extrabold mb-3">Shipment Details</h1>
              <div className="relative">
                <div className="input-with-icon">
                  <div className="absolute left-0 p-2 pointer-events-none font-extrabold text-black ml-1 text-[17px]">Location</div>
                  <img src={earthIcon} alt="" className="absolute top-10 left-3 w-4 h-4" />
                  <Link to='/shipment'>
                    <input type="text" id="Location" name="Location" className="border w-full pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-10 focus:outline-none" placeholder="Drop item to..." onFocus="askForLocation()" onBlur="collapseLabel('LocationLabel')" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 mb-20">
        <h1 className="text-[17px] font-extrabold ml-10">Parcel Details</h1>
        <div className="flex flex-wrap ml-11 mt-6 gap-5 pr-1">
          <div className={`border border-dotted border-[#848484] rounded-xl p-4 py-2 cursor-pointer transition-colors duration-300 ${selectedParcel === 'Small' ? 'bg-black text-white' : ''}`} onClick={() => handleParcelSelect('Small')}>
            <p className="font-extrabold text-[#545454]">Small</p>
            <p>Wt: 0 - 500gm</p>
          </div>
          <div className={`border border-dotted border-[#848484] rounded-xl p-4 py-2 cursor-pointer transition-colors duration-300 ${selectedParcel === 'Medium' ? 'bg-black text-white' : ''}`} onClick={() => handleParcelSelect('Medium')}>
            <p className="font-extrabold text-[#545454]">Medium</p>
            <p>Wt: 0 - 500gm</p>
          </div>
          <div className={`border border-dotted border-[#848484] rounded-xl p-4 py-2 cursor-pointer transition-colors duration-300 ${selectedParcel === 'Large' ? 'bg-black text-white' : ''}`} onClick={() => handleParcelSelect('Large')}>
            <p className="font-extrabold text-[#545454]">Large</p>
            <p>Wt: 0 - 500gm</p>
          </div>
          <div className={`border border-dotted border-[#848484] rounded-xl p-4 py-2 cursor-pointer transition-colors duration-300 ${selectedParcel === 'Extra Large' ? 'bg-black text-white' : ''}`} onClick={() => handleParcelSelect('Extra Large')}>
            <p className="font-extrabold text-[#545454]">Extra Large</p>
            <p>Wt: 0 - 500gm</p>
          </div>
        </div>
        <div className="mt-20 m-10">
          <textarea id="" name="" className="border text-xl w-full p-1 py-10 border-dotted border-[#848484] text-black rounded-xl px-20 pl-10 focus:outline-none resize-none" placeholder="Custom Message"></textarea>
        </div>
        <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
          <Link to='/verification'>
          <div className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
            Next Process
          </div>
          </Link>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default Productdelivery;

