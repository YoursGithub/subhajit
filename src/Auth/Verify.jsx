import React, { useRef, useEffect } from 'react';

import welcomeLogo from '../images/LOADING PAGE/WELCOME PAGE LOGO BLACK.png';
import backOptionIcon from '../images/images3/back.png';
import eastIcon from '../images/AUTHENTICATION LOGOS AND ICONS/east.png';
import Slideshow from '../components/Slideshow.jsx';


function Verify() {

    const digit1Ref = useRef(null);
    const digit2Ref = useRef(null);
    const digit3Ref = useRef(null);
    const digit4Ref = useRef(null);

   

    const handleInput = (event, nextRef) => {
        const { value } = event.target;
        if (value.length > 0) {
            event.target.value = value.slice(0, 1);
            nextRef.current && nextRef.current.focus();
        }
    };

    const handleKeyDown = (e, currentRef, prevRef) => {
        if (e.key === 'Backspace' && currentRef.current.value === '') {
            prevRef.current.focus();
        }
    };


    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text');
        if (paste.length === 4) {
            digit1Ref.current.value = paste[0];
            digit2Ref.current.value = paste[1];
            digit3Ref.current.value = paste[2];
            digit4Ref.current.value = paste[3];
            digit4Ref.current.focus();
        }
        e.preventDefault();
    };

    const digit5Ref = useRef(null);
    const digit6Ref = useRef(null);
    const digit7Ref = useRef(null);
    const digit8Ref = useRef(null);

   

    const handleInput2 = (event, nextRef) => {
        const { value } = event.target;
        if (value.length > 0) {
            event.target.value = value.slice(0, 1);
            nextRef.current && nextRef.current.focus();
        }
    };

    const handleKeyDown2 = (e, currentRef, prevRef) => {
        if (e.key === 'Backspace' && currentRef.current.value === '') {
            prevRef.current.focus();
        }
    };


    const handlePaste2 = (e) => {
        const paste = e.clipboardData.getData('text');
        if (paste.length === 4) {
            digit5Ref.current.value = paste[0];
            digit6Ref.current.value = paste[1];
            digit7Ref.current.value = paste[2];
            digit8Ref.current.value = paste[3];
            digit8Ref.current.focus();
        }
        e.preventDefault();
    };

    function handleWheel(event) {
        event.preventDefault();
    }

  return (
    <>
    <nav className="sticky z-50">
                <div className="mx-3 md:mx-10 flex">
                    <div>
                        <a href="index.html" className="flex items-center text-white">
                            <img src={welcomeLogo} alt="Your Logo" className="mt-5 w-24 md:w-[120px]" />
                        </a>
                    </div>
                    <div className="ml-auto mt-[18px] md:mt-5 pr-3 sm:pr-2">
                        <img src={backOptionIcon} alt="" className="w-9" />
                    </div>
                </div>
            </nav>
            <section className="lg:hidden">
            <div className="mx-10 mt-20">
                <h1 className="text-4xl font-bold">Verification</h1>
                <p className="text-[#636363] mt-3">Enter it in the verification code box and click continue</p>
            </div>
            <div className="border border-[#848484] rounded-xl border-dotted h-48 mt-10 m-8 flex items-center justify-center">
                <div className="max-w-sm mx-auto">
                    <div className="flex space-x-2">
                        <input type="number" id="digit1" name="digit1" maxLength="1" className="w-10 py-2 px-3 border-b-2 border-[#636363] focus:outline-none focus:border-red-500" 
                               ref={digit1Ref}
                               
                               onChange={(e) => handleInput(e, digit2Ref)}
                               onPaste={handlePaste}
                               onKeyDown={(e) => handleKeyDown(e, digit4Ref, digit1Ref)}
                                />
                        <input type="number" id="digit2" name="digit2" maxLength="1" className="w-10 py-2 px-3 border-b-2 border-[#636363] focus:outline-none focus:border-red-500"
                               ref={digit2Ref}
                              
                               onChange={(e) => handleInput(e, digit3Ref)}
                               onKeyDown={(e) => handleKeyDown(e, digit4Ref, digit1Ref)} />
                        <input type="number" id="digit3" name="digit3" maxLength="1" className="w-10 py-2 px-3 border-b-2 border-[#636363] focus:outline-none focus:border-red-500"
                               ref={digit3Ref}
                               
                               onChange={(e) => handleInput(e, digit4Ref)}
                               onKeyDown={(e) => handleKeyDown(e, digit4Ref, digit2Ref)} />
                        <input type="number" id="digit4" name="digit4" maxLength="1" className="w-10 py-2 px-3 border-b-2 border-[#636363] focus:outline-none focus:border-red-500"
                               ref={digit4Ref}
                               onChange={(e) => handleInput(e, null)}
                               onKeyDown={(e) => handleKeyDown(e, digit4Ref, digit3Ref)} />
                    </div>
                </div>
            </div>

            <div className="w-10 h-10 bg-[#094446] rounded-full mt-3 mx-auto flex items-center justify-center">
                <a href="profile_pic.html">
                    <img src={eastIcon} alt="" className="w-6 ml-2" />
                </a>
            </div>
           
        </section>
        <section class="hidden lg:block">
            <Slideshow/>
            <section class="">
            <div class="form-container hidden md:block mx-auto max-w-[400px] 2xl:max-w-[500px] h-[500px] 2xl:h-[570px] mt-2 rounded-xl border border-gray-300 justify-center bg-white">
                <div class="pr-[85px] md:pr-10 z-50">
                    <div class="mx-10 mt-20">
                    <h1 class="text-4xl font-bold">Verification</h1>
                    <p class="text-[#636363] mt-3">Enter it in the verification code box and click continue </p>
                    </div>
                </div>

                <div class="border border-[#848484] rounded-xl border-dotted h-48 mt-10 m-8 flex items-center justify-center relative">
                    <div class="max-w-sm mx-auto">
                        <div class="flex space-x-2">
                        <input type="text" id="digit5" name="digit5" maxLength="1" className="w-10 py-2 px-3 border-b-2 border-[#636363] focus:outline-none focus:border-red-500 " 
                               ref={digit5Ref}
                               
                               onChange={(e) => handleInput(e, digit6Ref)}
                               onPaste={handlePaste}
                               onKeyDown={(e) => handleKeyDown(e, digit8Ref, digit5Ref)} 
                               />
                        <input type="text" id="digit6" name="digit6" maxLength="1" className="w-10 py-2 px-3 border-b-2 border-[#636363] focus:outline-none focus:border-red-500"
                               ref={digit6Ref}
                              
                               onChange={(e) => handleInput(e, digit7Ref)}
                               onKeyDown={(e) => handleKeyDown(e, digit8Ref, digit5Ref)} />
                        <input type="text" id="digit7" name="digit7" maxLength="1" className="w-10 py-2 px-3 border-b-2 border-[#636363] focus:outline-none focus:border-red-500"
                               ref={digit7Ref}
                               
                               onChange={(e) => handleInput(e, digit8Ref)}
                               onKeyDown={(e) => handleKeyDown(e, digit8Ref, digit6Ref)} />
                        <input type="text" id="digit8" name="digit8" maxLength="1" className="w-10 py-2 px-3 border-b-2 border-[#636363] focus:outline-none focus:border-red-500"
                               ref={digit8Ref}
                               onChange={(e) => handleInput(e, null)}
                               onKeyDown={(e) => handleKeyDown(e, digit8Ref, digit7Ref)} />
                        </div>
                       
                    </div>
                </div>
                <div class="w-10 h-10 bg-[#094446] rounded-full ml-44 2xl:ml-56 absolute flex justify-center items-center">
                    <a href="profile_pic.html">
                    <img src={eastIcon} alt="" class="w-6"/>
                    </a>
                </div>

                </div>
        
        </section>
        </section>
    </>
  )
}

export default Verify
