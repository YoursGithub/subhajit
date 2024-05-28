import React from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backButton from '../images/back.png';
import vectorImage from '../images/Vector (18).svg';


function Settingslocation() {
  return (
    <>
    <div className='forscroll'>
        <section className="lg:hidden">
        <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-6">
                <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">SETTINGS</h2>
                <div className="rounded-full bg-green-500 w-[1vh] h-[1vh]  mt-1"></div>
            </div>
            <p className="font-bold opacity-50 text-[3vw]">Store Settings</p>
        </div>
        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                </div>

            <div className="mx-5 mt-[50%]">
                <p className="font-extrabold text-[7vw]">Enter Your Store Location</p>
                <p className="text-[#636363] text-[4vw]">Search for area, street name</p>
            </div>

            <div className="mx-5 my-3 px-3 py-2 border border-[#848484] rounded-lg border-dotted bg-[#D9D9D9] mt-[3vh]">
                <p className="text-[#094446] text-[3vw] font-extrabold">Location</p>
                <div className="flex items-center gap-2">
                    <img className="w-[4vw] h-[4vw]" src={vectorImage} alt="" />
                    <input type="text" id="phone-input" className="text-[#636363] w-[70vw] text-[4vw] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#d9d9d9]" />
                </div>
            </div>

            <div className="parent flex justify-center items-center relative h-[440px]">
                <div className="absolute bottom-[10px]">
                    <button className="px-[9vh] py-3 bg-[#094446] text-[3vw] font-extrabold text-white border rounded-[15px]">
                        CONTINUE
                    </button>
                </div>
            </div>
        </section>
        </div>
        </>
   
  )
}

export default Settingslocation
