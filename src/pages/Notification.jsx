import React from 'react'
import './style.css';
import backImage from '../images/images3/back.png';
import Orderplaced from '../components/Orderplaced.jsx';
import Delivered from '../components/Delivered.jsx';
import Returned from '../components/Returned.jsx';
import Cancelled from '../components/Cancelled.jsx';
import Refunded from '../components/Refunded.jsx';

function Notification() {
  return (
    <>
    <div className='forscroll'>
     <div className="sticky bg-white z-60 top-0 w-full">
            <div className="w-full h-[12vh] flex p-[20px] justify-between">
                <div className="flex justify-center items-center gap-2">
                    <h2 className="text-[4vw] font-black">UPDATE</h2>
                    <div className="bg-green-400 h-[1vh] w-[1vh] rounded-full"></div>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={backImage} alt="Back" />
                </div>
            </div>
        
        <div className="mx-5 pb-4 flex gap-3 flex-wrap">
        <button
            className=" category-button border border-black bg-[#094446] text-white px-5 py-2 rounded-2xl text-[3vw] transition-colors duration-300 inline-flex items-center font-extrabold"
            
            
        >
            General
        </button>
        </div>
        </div>
        <div class="mx-5 my-6">
        <p class="font-extrabold text-[4vw]">Today</p>
        <Orderplaced/>
        <Delivered/>
        <Returned/>
        <p class="font-extrabold text-[4vw]">Yesterday</p>
        <Cancelled/>
        <Refunded/>
        </div>
        </div>
    </>
  )
}

export default Notification
