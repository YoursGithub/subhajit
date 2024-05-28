import React, { useState, useEffect } from 'react';
import frameLogo from '../images/Frame 397.png';
import delivery from '../images/download (11).svg';
import packing from '../images/Frame 507.svg';
import analysis from '../images/download (16).svg';
import discount from '../images/download (18).svg';
import { Link } from 'react-router-dom';
import storebuild from '../images/download (10).svg';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './startingswiper.css';

function Storeregistrationstarting() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiper = useSwiper();

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex);
    };

    
  return (
  <>
  <section className='lg:hidden'>
  <div className="sticky top-0 z-50 bg-white pb-3">


    <img className="w-[10vw] ml-4 mt-4" src={frameLogo} alt="" />
          
                
     
        </div>
        <div className='w-[100vw] h-[65vw] relative'>
        
        <Swiper
        onSlideChange={handleSlideChange}
        navigation={{
            nextEl:'.swiper-button-next'
        }}
        pagination={{
          dynamicBullets: true,
          className: 'swiper-pagination-custom',
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

            <div className='flex justify-center'>
            <img className='mt-[7vw] w-[74vw]' src={storebuild} alt="" />

            </div>
            <div className='flex flex-col mt-[25vw] gap-2 mb-[20vw]'>
                <div className='flex justify-center'>
                <h2 className='text-[5.7vw] font-bold '>Create Your Own e-Store</h2>
                </div>
                <div className='flex justify-center'>
                <p className='text-center text-[3.8vw] font-medium text-[#858585]'>Make your own digital store and start selling<br/>online</p>
                </div>
            </div>

            </SwiperSlide>
            <SwiperSlide>

            <div className='flex justify-center'>
            <img className='mt-[1vw] w-[94vw]' src={delivery} alt="" />

            </div>
            <div className='flex flex-col mt-[33vw] gap-2'>
                <div className='flex justify-center'>
                <h2 className='text-[5.7vw] font-bold '>Delivery Support</h2>
                </div>
                <div className='flex justify-center'>
                <p className='text-center text-[3.8vw] font-medium text-[#858585]'>Provided middlemen for product delivery</p>
                </div>
            </div>

            </SwiperSlide>
            <SwiperSlide>

            <div className='flex justify-center'>
            <img className='mt-[1vw] w-[54vw]' src={packing} alt="" />

            </div>
            <div className='flex flex-col mt-[40vw] gap-2'>
                <div className='flex justify-center'>
                <h2 className='text-[5.7vw] font-bold '>Packaging</h2>
                </div>
                <div className='flex justify-center'>
                <p className='text-center text-[3.8vw] font-medium text-[#858585]'>Provide product delivery in our custom packaging</p>
                </div>
            </div>

            </SwiperSlide>
            <SwiperSlide>
      
            <div className='flex justify-center'>
            <img className='mt-[1vw] w-[84vw]' src={analysis} alt="" />

            </div>
            <div className='flex flex-col mt-[30vw] gap-2'>
                <div className='flex justify-center'>
                <h2 className='text-[5.7vw] font-bold '>Analytics</h2>
                </div>
                <div className='flex justify-center'>
                <p className='text-center text-[3.8vw] font-medium text-[#858585]'>See Your Business Insights & Store Matrics</p>
                </div>
            </div>
    
            </SwiperSlide>
            <SwiperSlide>
      
            <div className='flex justify-center'>
            <img className='mt-[-1vw] w-[84vw]' src={discount} alt="" />

            </div>
            <div className='flex flex-col mt-[24vw] gap-2'>
                <div className='flex justify-center'>
                <h2 className='text-[5.7vw] font-bold '>Discount Coupons</h2>
                </div>
                <div className='flex justify-center'>
                <p className='text-center text-[3.8vw] font-medium text-[#858585]'>Create Discount Coupons For Your Store And<br/>Products Easily And Instantly</p>
                </div>
            </div>
    
            </SwiperSlide>
            </Swiper>
            </div>

            <div className="bottom-swiper fixed bottom-5 left-0 right-0 flex justify-center items-center">
                    <div className="swiper-button-next flex bg-[#094446] rounded-full text-xl p-4 w-[63vw] md:hidden text-white justify-center font-bold items-center">
                        {currentSlide < 4 ? (
                            currentSlide < 1 ? 'Get Started' : 'Next'
                        ) : <Link to='/registration'>Finish</Link>}
                    </div>
                </div>

  </section>
  </>
  )
}

export default Storeregistrationstarting
