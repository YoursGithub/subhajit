import React, { useState } from 'react';
import './style.css';
import backImage from '../images/images3/back.png';
import Engaged from '../components/Engaged.jsx';
import Orderplaced from '../components/Orderplaced.jsx';
import Delivered from '../components/Delivered.jsx';
import Returned from '../components/Returned.jsx';
import Cancelled from '../components/Cancelled.jsx';
import Refunded from '../components/Refunded.jsx';
import Desktopheader from '@/components/Desktopheader';
import Desktopfooter from '@/components/Desktopfooter';
import Orderplaceddesktop from '@/components/Orderplaceddesktop';
import Delivereddesktop from '@/components/Delivereddesktop';
import Cancelleddesktop from '@/components/Cancelleddesktop';
import Refundeddesktop from '@/components/Refundeddesktop';
import Engageddesktop from '@/components/Engageddesktop';

function Storenotification() {
    const [selectedCategory, setSelectedCategory] = useState('gen');

    const showCategory = (category) => {
        setSelectedCategory(category);
    };
    const [selectedOption, setSelectedOption] = useState('Today');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setMenuOpen(false);
    };
  return (
   <>
   <div className='forscroll'>
    <section className='lg:hidden'>
   <div className="sticky bg-white z-60 top-0 w-full">
            <div className="w-full h-[12vh] flex p-[20px] justify-between">
                <div className="flex justify-center items-center gap-2">
                    <h2 className="text-[6vw] font-black">UPDATE</h2>
                    <div className="bg-green-400 h-[1vh] w-[1vh] rounded-full"></div>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={backImage} alt="Back" />
                </div>
            </div>
            <div className="mx-5 pb-4 flex gap-3 flex-wrap">
        <button
            className={`focus:outline-none visited:outline-none active:outline-none category-button border-2 border-black bg-[#094446] text-[#000] px-5 py-2 rounded-2xl text-[3vw] transition-colors duration-300 inline-flex items-center font-extrabold"
           ${selectedCategory === 'gen' ? 'bg-[#094446] text-white' : 'bg-white text-[#000]'}`} data-category="gen" onClick={() => showCategory('gen')}
            
        >
            General
        </button>
        <button
            className={`focus:outline-none visited:outline-none active:outline-none category-button border-[1px] border-black bg-[#094446] text-[#000] px-5 py-2 rounded-2xl text-[3vw] transition-colors duration-300 inline-flex items-center font-extrabold"
            
            ${selectedCategory === 'store' ? 'bg-[#094446] text-white' : 'bg-white text-[#000]'}`} data-category="store" onClick={() => showCategory('store')}
        >
            Store
        </button>
        </div>
            </div>
            <div class="mx-5 my-6">
            {selectedCategory === 'gen' && (
                    <>
                        <p className="font-extrabold text-[4vw]">Today</p>
                        <Orderplaced/>
                        <Delivered/>
                        <Returned/>
                        <p className="font-extrabold text-[4vw]">Yesterday</p>
                        <Cancelled/>
                        <Refunded/>
                    </>
                )}
            </div>
            <div class="mx-5 my-6">
            {selectedCategory === 'store' && (
                    <>
                        <p className="font-extrabold text-[4vw]">Today</p>
                         <Engaged/>
                         <Engaged/>
                         <Engaged/>
                        <p className="font-extrabold text-[4vw]">Yesterday</p>
                        <Engaged/>
                        <Engaged/>
                        <Engaged/>
                    </>
                )}
            </div>
            </section>
            <section className='hidden lg:block'>
                <Desktopheader/>
                <div className='flex gap-12'>
                    <div>
                <div className='flex flex-col mt-32 ml-12'>
            <div className='flex gap-2 items-center'>
            <h2 className='font-bold text-[34px] '>NOTIFICATION</h2>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
            </div>
            <p className='font-medium opacity-70 text-[20px]'>Get all your notifications here</p>
          </div>
          <div className='flex gap-3 ml-12 mt-10'>
          <button
            className={`focus:outline-none visited:outline-none active:outline-none category-button border-2 border-black bg-[#094446] text-[#000] px-5 py-2 rounded-3xl text-[18px] transition-colors duration-300 inline-flex items-center font-extrabold"
           ${selectedCategory === 'gen' ? 'bg-[#094446] text-white' : 'bg-white text-[#000]'}`} data-category="gen" onClick={() => showCategory('gen')}
            
        >
            General
        </button>
        <button
            className={`focus:outline-none visited:outline-none active:outline-none category-button border-[1px] border-black bg-[#094446] text-[#000] px-5 py-2 rounded-3xl text-[18px] transition-colors duration-300 inline-flex items-center font-extrabold"
            
            ${selectedCategory === 'store' ? 'bg-[#094446] text-white' : 'bg-white text-[#000]'}`} data-category="store" onClick={() => showCategory('store')}
        >
            Store
        </button>
          </div>
          </div>
          <div>
          <div className='bg-white w-[600px] h-[570px] ml-28 mt-28 rounded-2xl shadow-lg flex flex-col'>
          <div className="dropdown relative ml-[410px] mt-8" style={{width:"160px"}}>
                        <div className="select border-[1px] border-[#AFAFAF] rounded-full font-bold" onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="selected">{selectedOption}</span>
                            <div className={`caret ${menuOpen ? 'caret-rotate' : ''}`}>
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="15.9091" y1="1.63956" x2="7.7021" y2="9.84654" stroke="#272727" strokeWidth="2.4608"/>
                    <line x1="0.870025" y1="1.26865" x2="7.83034" y2="8.22896" stroke="#272727" strokeWidth="2.4608"/>
                    </svg> 
                            </div>
                        </div>
                        <ul className={`menu font-bold ${menuOpen ? 'menu-open' : ''}`}>
                            <li className={selectedOption === 'Today' ? 'active' : ''} onClick={() => handleOptionSelect('Today')}>Today</li>
                            <li className={selectedOption === 'Yesterday' ? 'active' : ''} onClick={() => handleOptionSelect('Yesterday')}>Yesterday</li>
                            <li className={selectedOption === 'Last Month' ? 'active' : ''} onClick={() => handleOptionSelect('Last Month')}>Last Month</li>
                            <li className={selectedOption === 'Last Year' ? 'active' : ''} onClick={() => handleOptionSelect('Last Year')}>Last Year</li>
                        </ul>
                    </div>
                    <div className='flex justify-center'>
                    <div className='w-[540px] mt-2 h-[465px] overflow-y-scroll'>
                    {selectedCategory === 'store' && (
                    <>
                        <Orderplaceddesktop/>
                        <Delivereddesktop/>
                        <Cancelleddesktop/>
                        <Refundeddesktop/>
                    </>
                    )}
                    {selectedCategory === 'gen' && (
                    <>
                        <Engageddesktop/>
                        <Engageddesktop/>
                        <Engageddesktop/>
                        <Engageddesktop/>
                        <Engageddesktop/>
                        <Engageddesktop/>
                    </>
                    )}
                    </div>
                    </div>
                     
                    </div>
                    
          </div>
          <div className='w-[350px] h-[570px] bg-slate-200 rounded-3xl mt-28'></div>   
                </div>
                <Desktopfooter/>
            </section>
   </div>
   </>
  )
}

export default Storenotification
