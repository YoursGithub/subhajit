import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import camera from '../images/Rectangle 2267.svg';
import subho from '../images/Subhajit.jpg'

function Details() {
    const [time, setTime] = useState("06:00:00");

    useEffect(() => {
      const interval = setInterval(() => {
        updateTime();
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const updateTime = () => {
      setTime(previousTime => {
        const [hours, minutes, seconds] = previousTime.split(":").map(Number);
        // Decrement seconds, minutes, and hours accordingly
        const newSeconds = seconds > 0 ? seconds - 1 : 59;
        const newMinutes = newSeconds === 59 ? (minutes > 0 ? minutes - 1 : 59) : minutes;
        const newHours = newMinutes === 59 && newSeconds === 59 ? (hours > 0 ? hours - 1 : 23) : hours;
        return `${padZero(newHours)}:${padZero(newMinutes)}:${padZero(newSeconds)}`;
      });
    };
  
    const padZero = (num) => {
      return num < 10 ? `0${num}` : num;
    };

  return (
    <>
    <div className='forscroll'>
    <section className="lg:hidden">
      <div className="sticky top-0 z-60 bg-white mb-2">
        <div className="h-[12vh] flex p-[20px] justify-between">
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-2xl font-black">DETAILS</h2>
            <div className="bg-green-400 h-[1vh] w-[1vh] rounded-full"></div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <a href=""><img className="w-12" src="/images/back.png" alt="" /></a>
          </div>
        </div>

        <div className="flex p-[20px] justify-between">
          <div className="flex justify-center items-center gap-2">
            <div>
              <p className="font-bold text-[3vw]">Order ID</p>
              <p className="font-bold text-[3vw]" style={{ color: 'rgb(136, 136, 136)' }}>3249332</p>
            </div>
          </div>
          <div className="flex flex-column items-center">
            <p className="font-bold text-[3vw]" style={{ color: 'rgb(136, 136, 136)' }}>period:</p>
            <div className="uwu px-4 py-2 my-3 rounded-lg mx-3 text-white font-bold text-[3vw]" style={{ backgroundColor: '#343434' }}>{time}</div>
          </div>
        </div>
      </div>

      <div className="flex px-5 py-5 gap-4  p-[20px] justify-between">
        <div>
          <div className="w-[30vw] h-[30vw] bg-green-200 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${camera})` }}></div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-semibold text-[4vw]">Nikon Camera</p>
            <p className="font-bold text-[3vw] mt-5" style={{ color: 'rgb(136, 136, 136)' }}>Assam, Karimganj, Shyamaprasad Road- house no.3</p>
          </div>
          <p className="font-bold text-[3vw] pb-2">₹ 999 <span style={{ color: 'rgb(136, 136, 136)' }}>/hour</span></p>
        </div>
      </div>

      <p className="text-[4vw] font-bold px-4 my-2">Provided Middleman:</p>
      <div className="flex px-4 gap-4 justify-between mt-2">
        <div>
          <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>Mr. Subhajit Bhattacharjee</p>
          <div className="flex gap-1">
            <svg className="w-[3vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>+91 9395593877</p>
          </div>
        </div>
        <div className="bg-[#ff0000] w-[9vw] h-[9vw] border rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${subho})` }}></div>
      </div>

      <p className="text-[4vw] font-bold px-4 mt-7">Amount Details:</p>
      <div className=" px-4 pt-5 pb-2 gap-4 flex justify-between">
        <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>Subtotal</p>
        <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>₹ 999.00</p>
      </div>

      <div className=" px-4 pb-2 gap-4 flex justify-between">
        <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>Middleman</p>
        <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>₹ 100.00</p>
      </div>

      <div className=" px-4 pb-1 gap-4 flex justify-between">
        <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>Discount</p>
        <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>₹ 50.00</p>
      </div>
      <div className='flex justify-center mt-2'>
      <hr/>
      </div>
      <div className=" px-4 pt-5 pb-1 gap-4 flex justify-between">
        <p className="text-[4vw] font-bold">Total Amount</p>
        <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>₹ 1149.00</p>
      </div>

      <p className="text-[4vw] font-bold px-4 mt-7">Payment Details:</p>

      <div className=" px-4 pt-5 pb-2 gap-4 flex justify-between">
        <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>Payment Method</p>
        <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>UPI Payment</p>
      </div>

      <div className=" px-4 pb-2 gap-4 flex justify-between">
        <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>Payment Status</p>
        <p className="text-[3vw] font-bold" style={{ color: 'rgb(136, 136, 136)' }}>Paid</p>
      </div>

      <p className="text-[4vw] font-bold px-4 mt-7">Delivery Details:</p>

      <p className="text-[3vw] font-bold px-4 mt-3">Shipping Address</p>
      <p className="text-[3vw] px-4 mt-2 font-bold" style={{ color: 'rgb(136, 136, 136)' }}>Kunal Deb</p>
      <p className="text-[3vw] px-4 font-bold" style={{ color: 'rgb(136, 136, 136)' }}>Shyamaprasad Road House No. 3</p>
      <p className="text-[3vw] px-4 font-bold" style={{ color: 'rgb(136, 136, 136)' }}>788711</p>
      <p className="mb-28 text-[3vw] px-4 font-bold" style={{ color: 'rgb(136, 136, 136)' }}>Karimganj,Assam,India</p>

      <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
                                <Link to="" className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                                Cancel Order
                                </Link>
                            </div>
    </section>
    </div>
    </>
  );
}

export default Details;
