import Checkoutcardsfinal from '../components/Checkoutcardsfinal.jsx'
import React from 'react';
import memory from '../images/memory.svg'
import gpay from '../images/Group 10.svg'
import apple from '../images/Group 11.svg'
import bhimupi from '../images/Group 12.svg'
import tickupi from '../images/Group 13.svg'
import visa from '../images/Group 15.svg';
import rupay from '../images/Group 16.svg';
import mastercard from '../images/Mastercard-logo-2019.svg';
import ae from '../images/png-transparent-amex-payment-method-card-icon-thumbnail 1.svg';
import card from '../images/credit_card.svg';
import cash from '../images/universal_currency_alt.svg';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Desktopheader from '@/components/Desktopheader.jsx';
import Desktopfooter from '@/components/Desktopfooter.jsx';
import Checkoutcardsdesktop from '@/components/Checkoutcardsdesktop.jsx';
import { Link } from 'react-router-dom';

function Checkoutfinal() {
  return (
    <>
    <div className='forscroll'>
    <section className='lg:hidden'>
    <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-6">
                <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">CHECKOUT</h2>
                <div className="rounded-full bg-red-500 w-[1vh] h-[1vh] "></div>
            </div>
            
        </div>
        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                </div>
                <div className='mt-[20%]'>
                <Checkoutcardsfinal/>
                </div>
                <h2 className='font-bold text-[3.7vw] ml-5 mt-12'>Select Payment Option</h2>
                <div className='flex justify-center'>
                <Accordion type='single' collapsible className='w-[90vw] border-2 rounded-xl px-4 mt-4'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="hover:no-underline">
                        <div className='flex gap-3'>
                            <img className='w-[5vw]' src={memory} alt="" />
                            <div className='flex flex-col items-start'>
                                <h2 className='text-[3.6vw] font-bold'>UPI</h2>
                                <h2 className='text-[2.6vw] font-bold opacity-60'>Pay by an UPI app</h2>
                            </div>
                        </div>
                        </AccordionTrigger>
                        <AccordionContent>
                           <div className='flex flex-col mt-3'>
                            <div className='flex gap-2 items-center'>
                                <img className='w-[13vw]' src={gpay} alt="" />
                                <h2 className='font-medium text-[3.5vw]'>Google Pay</h2>
                            </div>
                            <hr className='mt-3 border-solid border-[0.1px] opacity-15'/>
                           </div>
                           <div className='flex flex-col mt-3'>
                            <div className='flex gap-2 items-center'>
                                <img className='w-[13vw]' src={apple} alt="" />
                                <h2 className='font-medium text-[3.5vw]'>Apple Pay</h2>
                            </div>
                            <hr className='mt-3 border-solid border-[0.1px] opacity-15'/>
                           </div>
                           <div className='flex flex-col mt-3'>
                            <div className='flex gap-2 items-center'>
                                <img className='w-[13vw]' src={bhimupi} alt="" />
                                <h2 className='font-medium text-[3.5vw]'>Add new UPI ID</h2>
                            </div>
                            <div className='flex flex-col '>
                            <div className='flex gap-4 items-center mt-4'>
                                <div className='w-[66vw] h-[10vw] border-2 rounded-lg flex justify-start items-center px-2'>
                                    <input className='w-[60vw] focus:outline-none' type="text " />
                                </div>
                             <img className='w-[10vw]' src={tickupi} alt="" />
                            </div>
                           </div>
                           <h2 className='text-[2.6vw] mt-1 ml-1'>Your UPI ID will be encrypted and in 100% safe with us</h2>
                           </div>
                        </AccordionContent>
                    </AccordionItem>
                    
                </Accordion>
                
                </div>
                <div className='flex justify-center'>
                <Accordion type='single' collapsible className='w-[90vw] border-2 rounded-xl px-4 mt-2'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="hover:no-underline">
                        <div className='flex gap-3'>
                            <img className='w-[5vw]' src={card} alt="" />
                            <div className='flex flex-col items-start'>
                                <h2 className='text-[3.6vw] font-bold'>Credit/ Debit Card</h2>
                                <h2 className='text-[2.6vw] font-bold opacity-60'>Visa, Mastercard, Rupay & more</h2>
                            </div>
                        </div>
                        </AccordionTrigger>
                        <AccordionContent>
                           <div className='mt-1 flex gap-2 ml-7'>
                             <img className='w-[9vw]' src={visa} alt="" />
                             <img className='w-[9vw]' src={rupay} alt="" />
                             <img className='w-[9vw]' src={mastercard} alt="" />
                             <img className='w-[9vw]' src={ae} alt="" />
                           </div>
                           <div className='w-[66vw] h-[10vw] border-2 rounded-lg flex justify-start items-center px-2 mt-4'>
                                    <input placeholder='Card Number' className='w-[60vw] focus:outline-none' type="text " />
                                </div>
                            <div className='flex gap-2'>
                            <div className='w-[34vw] h-[10vw] border-2 rounded-lg flex justify-start items-center px-2 mt-2'>
                                    <input placeholder='Expiry (MM/YY)' className='w-[30vw] focus:outline-none' type="text " />
                                </div>
                                <div className='w-[30vw] h-[10vw] border-2 rounded-lg flex justify-start items-center px-2 mt-2'>
                                    <input placeholder='CVV' className='w-[20vw] focus:outline-none' type="text " />
                                </div> 
                            </div>
                            <div className='flex items-center gap-2 mt-3 '>
                            <input id="agree-checkbox" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
                            <h2 className='text-[2.6vw]'>Save this card as per RBI guidelines.<span className='text-sky-600 underline'>Know More</span></h2>
                            </div>
                            <button className='bg-[#094446] mt-4 rounded-3xl w-[80vw] h-[10vw] text-white text-[4.3vw] items-center'>₹ 60</button>
                        </AccordionContent>
                    </AccordionItem>

                    
                </Accordion>
                
                </div>
                <Link to='/receiptsuccess'>
                <div className='flex justify-center'>
                <div className='w-[90vw] border-2 rounded-xl px-4 mt-2 h-[18vw] flex items-center'>
                <div className='flex gap-3'>
                            <img className='w-[5vw]' src={cash} alt="" />
                            <div className='flex flex-col items-start'>
                                <h2 className='text-[3.6vw] font-bold'>Cash on Delivery</h2>
                                <h2 className='text-[2.6vw] font-bold opacity-60'>Pay at your doorstep</h2>
                            </div>
                        </div>
                </div>
                </div>
                </Link>
                <h2 className='font-bold text-[3.7vw] ml-5 mt-8'>Order Information</h2>
                <div className='flex justify-center'>
                <div className='w-[90vw] border-2 rounded-xl px-4 mt-3 h-[14vw] flex items-center'>
                <div className='flex gap-2 items-center'>
                            
                                <h2 className='text-[3.6vw] font-bold opacity-60'>Deliver to</h2>
                                <h2 className='text-[3.6vw] font-bold'>Kunal Deb, 788710</h2>
                            
                        </div>
                </div>
                </div>
                </section>
              <section className='hidden lg:block'>
                   <Desktopheader/>
                   <div className='flex gap-[20%]'>
                    <div>
                   <div className='flex items-center mt-24 ml-6 gap-2 '>
  <h2 className='font-bold text-[30px]'>CHECKOUT</h2>
  <div className='w-[10px] h-[10px] rounded-full bg-red-500 mt-2'></div>
</div>
<div className='w-[500px] h-[460px] ml-16 overflow-y-scroll mt-9'>
<h2 className='text-[19px] font-bold ml-[8%] mt-[3%]'>Select Payment Option</h2>
<div className='ml-[8%]'>
                <Accordion type='single' collapsible className='w-[430px] border-2 rounded-xl px-4 mt-4'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="hover:no-underline">
                        <div className='flex gap-3'>
                            <img className='w-[22px]' src={memory} alt="" />
                            <div className='flex flex-col items-start'>
                                <h2 className='text-[15px] font-bold'>UPI</h2>
                                <h2 className='text-[12px] font-bold opacity-60'>Pay by an UPI app</h2>
                            </div>
                        </div>
                        </AccordionTrigger>
                        <AccordionContent>
                           <div className='flex flex-col mt-3'>
                            <div className='flex gap-2 items-center'>
                                <img className='w-[50px]' src={gpay} alt="" />
                                <h2 className='font-medium text-[16px]'>Google Pay</h2>
                            </div>
                            <hr className='mt-3 border-solid border-[0.1px] opacity-15'/>
                           </div>
                           <div className='flex flex-col mt-3'>
                            <div className='flex gap-2 items-center'>
                                <img className='w-[50px]' src={apple} alt="" />
                                <h2 className='font-medium text-[16px]'>Apple Pay</h2>
                            </div>
                            <hr className='mt-3 border-solid border-[0.1px] opacity-15'/>
                           </div>
                           <div className='flex flex-col mt-3'>
                            <div className='flex gap-2 items-center'>
                                <img className='w-[50px]' src={bhimupi} alt="" />
                                <h2 className='font-medium text-[15px]'>Add new UPI ID</h2>
                            </div>
                            <div className='flex flex-col '>
                            <div className='flex gap-4 items-center mt-4'>
                                <div className='w-[400px] h-[40px] border-2 rounded-lg flex justify-start items-center px-2'>
                                    <input className='w-[300px] focus:outline-none' type="text " />
                                </div>
                             <img className='w-[37px]' src={tickupi} alt="" />
                            </div>
                           </div>
                           <h2 className='text-[12px] mt-1 ml-1'>Your UPI ID will be encrypted and in 100% safe with us</h2>
                           </div>
                        </AccordionContent>
                    </AccordionItem>
                    
                </Accordion>
                
                </div>
                <div className='ml-[8%]'>
                <Accordion type='single' collapsible className='w-[430px] border-2 rounded-xl px-4 mt-2'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="hover:no-underline">
                        <div className='flex gap-3'>
                            <img className='w-[22px]' src={card} alt="" />
                            <div className='flex flex-col items-start'>
                                <h2 className='text-[15px] font-bold'>Credit/ Debit Card</h2>
                                <h2 className='text-[12px] font-bold opacity-60'>Visa, Mastercard, Rupay & more</h2>
                            </div>
                        </div>
                        </AccordionTrigger>
                        <AccordionContent>
                           <div className='mt-1 flex gap-2 ml-7'>
                             <img className='w-[40px]' src={visa} alt="" />
                             <img className='w-[40px]' src={rupay} alt="" />
                             <img className='w-[40px]' src={mastercard} alt="" />
                             <img className='w-[40px]' src={ae} alt="" />
                           </div>
                           <div className='w-[300px] h-[40px] border-2 rounded-lg flex justify-start items-center px-2 mt-4'>
                                    <input placeholder='Card Number' className='w-[250px] focus:outline-none' type="text " />
                                </div>
                            <div className='flex gap-2'>
                            <div className='w-[150px] h-[40px] border-2 rounded-lg flex justify-start items-center px-2 mt-2'>
                                    <input placeholder='Expiry (MM/YY)' className='w-[120px] focus:outline-none' type="text " />
                                </div>
                                <div className='w-[140px] h-[40px] border-2 rounded-lg flex justify-start items-center px-2 mt-2'>
                                    <input placeholder='CVV' className='w-[120px] focus:outline-none' type="text " />
                                </div> 
                            </div>
                            <div className='flex items-center gap-2 mt-3 '>
                            <input id="agree-checkbox" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
                            <h2 className='text-[12px]'>Save this card as per RBI guidelines.<span className='text-sky-600 underline'>Know More</span></h2>
                            </div>
                            <button className='bg-[#094446] mt-4 rounded-3xl w-[390px] h-[40px] text-white text-[16px] items-center'>₹ 60</button>
                        </AccordionContent>
                    </AccordionItem>

                    
                </Accordion>
                <Link>
                <div className=''>
                <div className='w-[430px] border-2 rounded-xl px-4 mt-2 h-[75px] flex items-center'>
                <div className='flex gap-3'>
                            <img className='w-[22px]' src={cash} alt="" />
                            <div className='flex flex-col items-start'>
                                <h2 className='text-[15px] font-bold'>Cash on Delivery</h2>
                                <h2 className='text-[12px] font-bold opacity-60'>Pay at your doorstep</h2>
                            </div>
                        </div>
                </div>
                </div>
                </Link>
                <h2 className='font-bold text-[19px] mt-5'>Order Information</h2>
                <div className=''>
                <div className='w-[430px] border-2 rounded-xl px-4 mt-3 h-[75px] flex items-center'>
                <div className='flex gap-2 items-center'>
                            
                                <h2 className='text-[15px] font-bold opacity-60'>Deliver to</h2>
                                <h2 className='text-[15px] font-bold'>Kunal Deb, 788710</h2>
                            
                        </div>
                </div>
                </div>
                
                </div>
                </div>
                </div>
                <div className='ml-auto mr-[11%] mt-[10%] h-[28vw] border-[1px] shadow-md rounded-3xl w-[40vw] py-4 flex flex-col gap-4 items-center overflow-y-scroll'>
      <Checkoutcardsdesktop/>
      <Checkoutcardsdesktop/>
      <Checkoutcardsdesktop/>
      <Checkoutcardsdesktop/>
      <Checkoutcardsdesktop/>
      </div>
                </div>
                   <Desktopfooter/>
               
              </section>
              </div>
    </>
  )
}

export default Checkoutfinal
