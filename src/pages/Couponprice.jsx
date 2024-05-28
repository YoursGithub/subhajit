import React, { useState, useEffect } from 'react';
import coupon from '../images/Frame 458.svg';
import './Coupon.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

function Couponprice() {
    const [description, setDescription] = useState('');
    const [order, setorder] = useState('')
    const [discount, setdiscount] = useState('')
    const [suffixAdded, setSuffixAdded] = useState(false);
    const maxLength = 12;
    const maxdiscount = 3;

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxLength) {
            setDescription(inputValue);
        }
    };
    const handlediscount = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxdiscount) {
            setdiscount(inputValue);
        }
    };
    const handleChange1 = (event) => {
        const inputValue = event.target.value;
        setorder(inputValue);
          
    };
    const handleChange2 = (event) => {
        const inputValue = event.target.value;
        setdiscount(inputValue);
          
    };
    const handleWhatInputChange = (event) => {
        setdiscount(event.target.value.replace(' % OFF', ''));
    };

    const handleWhyInputChange = (event) => {
        const enteredValue = event.target.value;
        setdiscount(enteredValue);
    };
    
    const [doi, setDoi] = useState(null);
  return (
    <>
    <div className='forscroll'>
        <section className="lg:hidden">
            
                
                <div className="flex justify-between items-center px-3 mt-6">
                <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">COUPON</h2>
                <div className="rounded-full bg-red-500 w-[1vh] h-[1vh]  mt-1"></div>
            </div>
            
        </div>
        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                
                <div className='flex justify-center '>
                <img className='w-[93vw] mt-12 ' src={coupon} alt="" />
                <input className=' text-[#094446] focus:outline-none input-transparent w-[22vw] text-[2.7vw] font-bold absolute mt-[17.2%] ml-[-27%]' type="text" value={description}
                            onChange={handleChange} readOnly  />
                <input className='text-black focus:outline-none input-transparent w-[17vw] text-[3.5vw] opacity-50 font-bold absolute mt-[42.7%] ml-[1.2%]' type="text" value={order} onChange={handleChange1} readOnly/>
                <input className='what text-black focus:outline-none input-transparent w-[47vw] text-[5.5vw]  font-bold absolute mt-[33.2%] ml-[-32.2%]' type="text" value={'₹' + discount + ' OFF'}
                
                            onChange={handleWhatInputChange} readOnly/>
                      
                <div className='w-[15vw] h-[15vw] absolute mt-[23.7%] ml-[66.5%] bg-red-200 rounded-lg '></div>
                </div>
                <div className='flex justify-center mt-5'>
                <hr />
                </div>
                
                    <div className='mt-14 ml-5 border-dashed border-2 w-[73vw] rounded-xl flex flex-col py-1'>
                      <h2 className=' font-bold text-[3.4vw] ml-2 mt-1 text-[#094446]'>Discount Value</h2>
                      <div className='flex items-center gap-2 mt-3 ml-2'>
                        <h2 className='font-bold text-[4vw]'>₹</h2>
                        <input type="text" placeholder='20' className='why focus:outline-none  w-[23vw] text-[4vw] font-bold' 
                        value={discount} // Use the order state as the value
                        onChange={(event) => {
                            handleWhyInputChange(event);
                            handlediscount(event);
                        }}
                       />
                      </div>
                    </div>
                
                
                
                    <div className='mt-4 ml-5 border-dashed border-2 w-[73vw] rounded-xl flex items-center justify-between py-1'>
                        <div className='flex flex-col'>
                      <h2 className='font-bold text-[3.4vw] ml-2 mt-1 text-[#094446]'>On Orders Over</h2>
                      <div className='flex items-center gap-2 mt-3 ml-2'>
                        <h2 className='font-bold text-[4vw]'>₹</h2>
                        <input type="text" placeholder='1000' className='focus:outline-none  w-[23vw] text-[4vw] font-bold' 
                        value={order} onChange={handleChange1}/>
                      </div>
                      </div>
                      <h2 className='mr-3 opacity-50 font-semibold text-[3.4vw]'>(optional)</h2>
                    </div>
                    <div className='mt-4 ml-5 border-dashed border-2 w-[73vw] rounded-xl flex items-center justify-between py-1'>
                        <div className='flex flex-col'>
                      <h2 className='font-bold text-[3.4vw] ml-2 mt-1 text-[#094446]'>Coupon Code</h2>
                      
                        <input type="text" placeholder='ABC12' className='how mt-3 ml-2 focus:outline-none  w-[32vw] text-[4vw] font-bold 'value={description}
                           onChange={handleChange}/>
                      
                      </div>
                      <h2 className='mr-3 opacity-50 font-semibold text-[3.4vw]'>({description.length}/{maxLength})</h2>
                    </div>
                    <div className='mt-4 ml-5 border-dashed border-2 w-[73vw] rounded-xl flex items-center justify-between py-1'>
                        <div className='flex flex-col'>
                      <h2 className='font-bold text-[3.4vw] ml-2 mt-1 text-[#094446]'>Coupon Limit</h2>
                      
                        <input type="text" placeholder='200' className='mt-3 ml-2 focus:outline-none  w-[23vw] text-[4vw] font-bold'/>
                      
                      </div>
                      <h2 className='mr-3 opacity-50 font-semibold text-[3.4vw]'>(Coupons)</h2>
                    </div>
                    <div className='mt-4 ml-5 border-dashed border-2 w-[73vw] rounded-xl flex flex-col py-1'>
                      <h2 className='font-bold text-[3.4vw] ml-2 mt-1 text-[#094446]'>Expiry Date</h2>
                      
                        <DatePicker id='doi' selected={doi}
                        onKeyDown={(e) => e.preventDefault()} 
                        onChange={setDoi} placeholderText="DD-MM-YYYY"
                        dateFormat="dd-MM-yyyy" type="text"  className='mt-3 ml-2 focus:outline-none  w-[27vw] text-[4vw] font-bold'/>
                      
                    </div>
                    <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
                                <Link to="/couponcreated" className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                                Generate Coupon
                                </Link>
                            </div>
                </section>
                </div>
    </>
  )
}

export default Couponprice
