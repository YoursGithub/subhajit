import React from 'react'
import frameLogo from '../images/Frame 397.png';
import backButton from '../images/images3/back.png';
import coupon from '../images/Group 8.svg';
import link from '../images/attach_file_add.svg';
import whatsapp from '../images/whatsapp.svg';
import fb from '../images/facebook.svg';
import signal from '../images/signal.svg';
import instagram from '../images/instagram.svg';
import telegram from '../images/telegram.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Couponcreated() {
  return (
    <>
    <div className='forscroll'>
    <section className='lg:hidden'>
    <div className="sticky top-0 z-50 bg-white pb-3">
            <div className="w-full h-[12vh] flex p-[20px] justify-between">
                <div className="flex justify-center items-center gap-2">
                    <img className="w-[10vw]" src={frameLogo} alt="" />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <a href="#">
                        <img className="w-12" src={backButton} alt="" />
                    </a>
                </div>
            </div>   
        </div>
        <div>
            <div className="text-[5vw] font-extrabold " style={{ textAlign: 'center' }}>
                Your Coupon Has Been<br/>Generated !
            </div>

            <div className="flex justify-center items-center relative mt-[9vw] mb-[20px]">
                <img className="w-[60vw]" src={coupon} alt="" />
                <p className="absolute rotate-90 top-[42.4vw] text-[4vw] right-[16.6vw] font-bold" style={{ color: '#094446' }}>
                    XAJAJNAKZAZ
                </p>
                <p className="absolute rotate-90 top-[20vw] text-[11vw] left-[24vw] font-extrabold">
                    20% <span className="text-[5vw]">OFF</span>
                </p>
                <p className="absolute rotate-90 text-[5vw]" style={{ color: '#848484', top: '57vw', left: '27.2vw', fontWeight: 'bold' }}>
                    1000
                </p>
                <div className="absolute bg-white w-[20vw] h-[20vw] border rounded-lg bottom-[9vw] "></div>
            </div>
        </div>

        <Swiper
      spaceBetween={10}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     className='px-5 mt-12 mb-4'
    >
        <SwiperSlide>
        <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-5 border border-black rounded-full">
                    <img className="w-[3.8vw]" src={link} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Copy Link</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-4 border border-black rounded-full">
                    <img className="w-[5vw]" src={whatsapp} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Whatsapp</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-4 border border-black rounded-full">
                    <img className="w-[5vw]" src={instagram} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Instagram</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-4 border border-black rounded-full">
                    <img className="w-[5vw]" src={fb} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Facebook</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-4 border border-black rounded-full">
                    <img className="w-[5vw]" src={signal} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Signal</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-4 border border-black rounded-full">
                    <img className="w-[5vw]" src={telegram} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Telegram</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-5 border border-black rounded-full">
                    <img className="w-[3.8vw]" src={link} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Twitter</p>
            </div>
        </SwiperSlide>


    </Swiper>

    </section>
    </div>
    </>
  )
}

export default Couponcreated
