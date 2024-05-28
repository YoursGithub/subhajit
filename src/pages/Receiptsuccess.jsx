import React from 'react'
import receipt from '../images/Frame 500.svg';
import camera from '../images/photo_camera.svg';
import tick from '../images/Group 6.svg';
import downloadbtn from '../images/Group 17.svg'
import html2canvas from 'html2canvas';

function Receiptsuccess() {
    const takeScreenshot = () => {
        const element = document.body;
      
        html2canvas(element).then((canvas) => {
          const image = canvas.toDataURL("image/png");
      
          const link = document.createElement('a');
          link.href = image;
          link.download = 'tnnent-receipt.png';
          link.click();
        });
      };
      
  return (
    <>
    <div className='forscroll'>
        <section className='lg:hidden'>
        <div className="fixed bg-white z-60 tnennt px-2">
                
                <div className="flex justify-between items-center px-3 mt-6">
                <img className='w-[7vw]' src={downloadbtn} alt="" onClick={takeScreenshot}/>
        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                </div>
                <div className='flex justify-center mt-[22%] relative mb-12'>
                    <img className='w-[90vw]' src={receipt} alt="" />
                    <img className='w-[20vw] mt-2 absolute' src={tick} alt="" />
                    <div className='flex flex-col absolute ml-[50%] mt-[54%] gap-[15px] items-end'>
                    <h2 className='opacity-60 font-medium text-[4.6vw]'>12 April, 2024</h2> 
                    <h2 className='opacity-60  font-medium text-[4.6vw]'>03:09 AM</h2>
                    <h2 className='opacity-60  font-medium text-[4.6vw]'>Kunal Deb</h2>
                    </div>
                    <h2 className='font-bold text-[6vw] mt-[91.3%] absolute ml-[63%]'>₹210</h2>
                    <h2 className='absolute mt-[114%] font-bold text-[5vw]'>Cash On Delivery</h2>
                    <div className='flex mt-[158vw] justify-between absolute items-center gap-[9vw]'>
                    <div className='flex gap-2 items-center'>
                    <h2 className='font-bold text-[5.3vw]'>Order ID:</h2>
                    <p className='text-[4vw] font-bold opacity-50 mt-1'>9099878</p>
                </div>
                <button className=' px-6 py-2 text-[4.5vw] font-bold text-[#094446] rounded-xl border-2 border-[#094446]'>UNPAID</button>
                    </div>
                </div>

        </section>
    </div>
    </>
  )
}

export default Receiptsuccess
