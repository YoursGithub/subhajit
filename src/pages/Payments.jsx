import React, { useEffect, useState } from 'react';
import wallet from '../images/Vector (12).svg';
import Earnings from '../components/Earnings.jsx';
import './style.css';
import Desktopheader from '@/components/Desktopheader';
import Desktopfooter from '@/components/Desktopfooter';
import Earningsdesktop from '@/components/Earningsdesktop';

function Payments() {
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
   <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-6">
                <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">PAYMENTS</h2>
                <div className="rounded-full bg-green-500 w-[1vh] h-[1vh]"></div>
            </div>
            <p className="font-bold opacity-50 text-[3vw]">My Earnings</p>
        </div>
        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                <div className='justify-center flex'>
                <div className='w-[93vw] h-[19vw] bg-[#F3F3F3] rounded-2xl mt-8 flex items-center gap-2'>
                    <div className='w-[15vw] h-[15vw] bg-white ml-2 m rounded-2xl flex justify-center items-center'>
                        <img className='w-[7vw]' src={wallet} alt="" />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <h2 className='font-bold text-[3.7vw]'>UPI ID:</h2>
                        <h2 className='font-semibold text-[3.6vw]text-[#838383]'>worldsxtreme2910@oksbi</h2>
                    </div>
                </div>
                </div>
                 <div className='px-4 mt-12 flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <h2 className='text-[4vw] font-bold opacity-50'>Monthy Earning</h2>
                        <h2 className='text-[#094446] font-bold text-[4.5vw]'>₹ 250k</h2>
                    </div>
                    <div className="dropdown ml-4 ">
                        <div className="select border-[1px] border-[#AFAFAF] rounded-3xl font-bold" onClick={() => setMenuOpen(!menuOpen)}>
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
                 </div>
                </div>
                <div className='mt-[82%] mb-5'>
                <Earnings/>
                <Earnings/>
                <Earnings/>
                <Earnings/>
                <Earnings/>
                <Earnings/>
                </div>
                </section>
                <section className='hidden lg:block'>
                    <Desktopheader/>
                    <div className='flex gap-12'>
                    <div>
                    <div className='flex flex-col mt-32 ml-7'>
            <div className='flex gap-2 items-center'>
            <h2 className='font-bold text-[27px] '>PAYMENTS</h2>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
            </div>
            <p className='font-medium opacity-70 '>My Earnings</p>
          </div>
          <div className='flex mt-14 ml-7 items-center'>
            <div className='flex flex-col'>
                <h2 className='font-bold text-[18px] opacity-70'>Monthy Earning</h2>
                <h2 className='font-bold text-[17px] mt-1 text-[#094446]'>₹ 250k</h2>
            </div>
            <div className="dropdown relative ml-[230px] " style={{width:"160px"}}>
                        <div className="select border-[1px] border-[#AFAFAF] rounded-xl font-bold" onClick={() => setMenuOpen(!menuOpen)}>
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
          </div>
          <div className='w-[542px] h-[100px] bg-[#F3F3F3] rounded-2xl mt-16 flex items-center gap-5 ml-6'>
                    <div className='w-[80px] h-[80px] bg-white ml-2 m rounded-2xl flex justify-center items-center'>
                        <img className='w-[34px]' src={wallet} alt="" />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <h2 className='font-bold text-[18px]'>UPI ID:</h2>
                        <h2 className='font-semibold text-[17px] text-[#838383]'>worldsxtreme2910@oksbi</h2>
                    </div>
                </div>
                </div>
                <div className='mt-28 ml-20 flex flex-col w-[700px] h-[500px] overflow-y-scroll'>
                    <Earningsdesktop/>
                    <Earningsdesktop/>
                    <Earningsdesktop/>
                    <Earningsdesktop/>
                    <Earningsdesktop/>
                    <Earningsdesktop/>
                </div>
                </div>
                    <Desktopfooter/>
                </section>
   </div>
            
   </>
  )
}

export default Payments
