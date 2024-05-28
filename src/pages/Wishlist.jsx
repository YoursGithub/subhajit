import React, { useState } from 'react';
import './Heart.css';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import back from '../images/images3/back.png'
import Wishlistcard from '@/components/Wishlistcard.jsx';
import Desktopheader from '@/components/Desktopheader';
import Desktopwishlist from '@/components/Desktopwishlist';

function WishlistPage() {
    const [showMain, setShowMain] = useState(false);
    const [showCheckbox, setShowCheckbox] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
  
    const toggleMainVisibility = () => {
      setShowMain(!showMain);
    };
  
    const toggleCheckboxVisibility = () => {
      setShowCheckbox(!showCheckbox);
    };
    const handleCheckboxChange = (isChecked, productValue) => {
        if (isChecked) {
          setTotalAmount(totalAmount + productValue);
        } else {
          setTotalAmount(totalAmount - productValue);
        }
      };

  return (
    <>
    <section className="lg:hidden">
      <div className="sticky top-0 z-50 bg-white pb-3">
        <div className="w-full h-[12vh] flex p-[20px] justify-between">
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-2xl font-black">WISHLIST</h2>
            <div className="bg-green-400 h-[1vh] w-[1vh] rounded-full"></div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <a href=""><img className="w-12" src={back} alt="" /></a>
          </div>
        </div>

        <div className="w-full flex px-[15px] justify-between">
          <div className="flex justify-center items-center gap-2">
            <div>
              <p className="font-bold text-[4vw]">Total Amount</p>
              <p className="font-bold" style={{ color: 'rgb(136, 136, 136)' }}>₹ {totalAmount}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div>
              <p className="text-[4vw] font-bold text-right">Select Items</p>
              <p className="text-right text-[2.5vw]">Rent All The Selected Products Together</p>
            </div>
              <input className="w-[5vw] h-[5vw]"  type="checkbox" onClick={() => {
              toggleMainVisibility();
              toggleCheckboxVisibility(); 
            }} />
             
              
           
          </div>
        </div>

        {showMain && (
          <div className="">
            <button className="px-4 py-2 mt-3 ml-4 rounded-3xl mx-3 text-white font-bold text-sm bg-[#094446]" >Buy All</button>
          </div>
        )}

      </div>

      <Wishlistcard showCheckbox={showCheckbox} onCheckboxChange={handleCheckboxChange} productValue={100} />
      <Wishlistcard showCheckbox={showCheckbox} onCheckboxChange={handleCheckboxChange} productValue={200} />
    
      <Wishlistcard showCheckbox={showCheckbox} onCheckboxChange={handleCheckboxChange} productValue={350} />

    
      <Wishlistcard showCheckbox={showCheckbox} onCheckboxChange={handleCheckboxChange} productValue={1000} />

    </section>

        <section className='hidden lg:block'>
          <Desktopheader />

          <div className='flex mt-20'>
            <div className='ml-7 mt-10 text-xl'>
              <h3 className='font-extrabold'>WISHLIST <span className='text-green-500'>&bull;</span></h3>
            </div>


          </div>

          <div className="flex mt-5 px-2 ">
              <Swiper
                spaceBetween={10}
                slidesPerView={5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="mr-2 ml-4 mt-4"
              >
                <SwiperSlide>
                  <Desktopwishlist />
                </SwiperSlide>
                <SwiperSlide>
                  <Desktopwishlist />
                </SwiperSlide>
                <SwiperSlide>
                  <Desktopwishlist />
                </SwiperSlide>
                <SwiperSlide>
                  <Desktopwishlist />
                </SwiperSlide>

                <SwiperSlide>
                  <Desktopwishlist />
                </SwiperSlide>
                <SwiperSlide>
                  <Desktopwishlist />
                </SwiperSlide>
              </Swiper>
            </div>
        </section>
      </>
  );
}

export default WishlistPage;
