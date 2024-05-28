import React, { useState } from 'react';
import earthIcon from '../images/AUTHENTICATION LOGOS AND ICONS/EARTH.png';
import welcomeLogoBlack from '../images/LOADING PAGE/WELCOME PAGE LOGO BLACK.png';
import backOptionIcon from '../images/images3/back.png';
import './Auth.css'
import Slideshow from '../components/Slideshow.jsx';

function Name() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  




 

  

    return (
        <section>
            <nav className="sticky z-50">
            <div className="mx-3 md:mx-10 flex">
                <div>
                    <a href="index.html" className="flex items-center text-white">
                        <img src={welcomeLogoBlack} alt="Your Logo" className="mt-5 w-24 md:w-[120px]" />
                    </a>
                </div>
                <div className="ml-auto mt-[18px] md:mt-5 pr-3 sm:pr-2">
                    <img src={backOptionIcon} alt="" className="w-9" />
                </div>
            </div>
        </nav>
        <section className="lg:hidden">
            <div className="ml-10 mt-32">
                <h2 className="text-2xl font-extrabold">What's your name?</h2>
                <p className="text-[#636363]">Add your name and surname</p>
            </div>

            <div className="pr-20 md:pr-10">
                <div className="container mx-10 md:mx-10 mt-10 flex flex-col space-y-4">
                    <div className="relative">
                        {/* <label htmlFor="FirstName" className="text-[#545454] transition-all transform absolute -top-[-15px] left-2 cursor-text" id="FirstNameLabel" onClick={() => moveLabel('FirstNameLabel')}>First Name</label> */}
                        <input placeholder='First Name' type="text" id="FirstName" name="FirstName" className="border w-full p-2 py-4 border-dotted border-[#848484] rounded-xl focus:outline-none" />
                    </div>
                    <div className="relative">
                        {/* <label htmlFor="LastName" className="text-[#545454] transition-all transform absolute -top-[-15px] left-2 cursor-text" id="LastNameLabel" onClick={() => moveLabel('LastNameLabel')}>Last Name</label> */}
                        <input placeholder='Last Name' type="text" id="LastName" name="LastName" className="border w-full p-2 py-4 border-dotted border-[#848484] rounded-xl focus:outline-none" />
                    </div>
                </div>
            </div>

            <div className="justify-center flex">
                <div className="flex justify-center mt-10 mb-3 mx-auto" id="button1">
                    <button className="bg-[#094446] px-6 py-3 text-white rounded-lg text-center text-xl font-bold">Continue</button>
                </div>

                {/* {buttonVisible && (
                    <div className="flex justify-center mt-10 mx-auto" id="button2">
                        <a href="location.html">
                            <button className="bg-[#094446] px-6 py-3 text-white rounded-xl text-center text-xl font-bold">Continue</button>
                        </a>
                    </div>
                )} */}
            </div>
        </section>
        <section className="hidden lg:block">
            <Slideshow/>
            <div className="form-container hidden md:block mx-auto max-w-[400px] 2xl:max-w-[500px] h-[500px] 2xl:h-[570px] mt-2 rounded-xl border border-gray-300 justify-center">
            <div className="pr-[85px] md:pr-10 z-50">
                <div className="ml-10 mt-32 md:mt-24">
                    <h2 className="text-2xl font-extrabold">What's your name?</h2>
                    <p className="text-[#636363]">Add your name and surname</p>
                </div>
                <div className="container mx-6 md:mx-10 mt-10 2xl:mt-10 flex flex-col space-y-4 relative pr-10">

                <div className="relative">
                    <div className="input-group">
                        <label className="label">First Name</label>
                        <div className="input-container relative">
                            <input autoComplete="off" type="text" required className="input border w-full px-4 py-3 border-dotted bg-[#e3e3e3] border-[#848484] rounded-xl focus:outline-none" />  
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="input-group">
                        <label className="label">Last Name</label>
                        <div className="input-container relative">
                            <input autoComplete="off" required className="input border w-full px-4 py-3 border-dotted bg-[#e3e3e3] border-[#848484] rounded-xl focus:outline-none" />
                            
                        </div>
                    </div>
                </div>
                </div>

                <a href="location.html">
                    <div className="flex justify-center mt-10 absolute ml-32 2xl:ml-44" id="button1">
                        <button className="bg-[#094446] px-6 py-3 text-white mx-auto rounded-xl text-center text-xl font-bold"  >Continue</button>
                    </div>
                </a>
                {/* {buttonVisible && (
                <a href="location.html">
                    <div className="flex justify-center mt-10 absolute ml-32 2xl:ml-44" id="button2">
                        <button className="bg-[#094446] px-6 py-3 text-white mx-auto rounded-xl text-center text-xl font-bold">Continue</button>
                    </div>
                </a>
                )} */}
            </div>
        </div>
        <div className="footer bottom-0 mt-10 left-0 right-0 md:relative md:flex ml-10 2xl:mt-28 text-[12px] form-container">
            <p className="font-gotham-black font-medium text-[#272822]">© 2024 Tnennt All rights reserved.</p>
        </div>
        </section>
        </section>
    );
}

export default Name;
