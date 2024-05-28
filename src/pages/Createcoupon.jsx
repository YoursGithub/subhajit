import React from 'react';
import logo from '../images/Frame 397.png';
import coupon from '../images/Group 3.svg';
import back from '../images/images3/back.png'
import { Link } from 'react-router-dom';

function CreateCoupon() {
  return (
    <section className="lg:hidden">
      <div className="flex m-5">
        <div className="mt-1">
          <a href="index.html" className="flex items-center text-white">
            <img
              src={logo}
              alt="Your Logo"
              className="mt-5 w-10"
            />
          </a>
        </div>

        <div className="ml-auto mt-5 md:mt-5 pr-3 sm:pr-2">
          <img
            src={back}
            alt=""
            className="w-10"
          />
        </div>
      </div>

      <div className="ml-5 flex mt-10 gap-5">
        <div className="mt-7">
          <h1 className="text-3xl font-extrabold">Create your Store Coupon</h1>
          <p className="mt-3 font-normal text-xs">
            Create Discount Coupons For Your Store And Products Easily And
            Instantly
          </p>
        </div>
        <div className="mr-6">
          <img src={coupon} alt="" />
        </div>
      </div>
     <div className='flex justify-center'>
      <hr className='mt-4 mb-4'/>
      </div>
      <Link to='/couponprice'>
      <div className="mt-4 p-10 py-10 m-5 rounded-xl bg-[#094446]">
        <h2 className="text-white text-2xl font-bold mt-[-10px] ml-[-20px]">
          Fixed Price Discount <span className="text-red-500"> &bull;</span>
        </h2>
        <p className="ml-[-20px] mt-14 text-white">
          Create fixed amount discount coupons for your customers
        </p>
      </div>
      </Link>
      <Link to='/couponpercent'>
      <div className="mt-4 mb-10 p-10 py-10 m-5 rounded-xl bg-[#094446]">
        <h2 className="text-white text-2xl font-bold mt-[-10px] ml-[-20px]">
          Percentage Discount <span className="text-green-500"> &bull;</span>
        </h2>
        <p className="ml-[-20px] mt-14 text-white">
          Create percentage based discount coupons for your customers
        </p>
      </div>
      </Link>
    </section>
  );
}

export default CreateCoupon;
