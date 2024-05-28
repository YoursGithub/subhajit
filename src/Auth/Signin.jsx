import React, { useState } from 'react';

import emailIcon from '../images/AUTHENTICATION LOGOS AND ICONS/EMAIL.png';
import passwordIcon from '../images/AUTHENTICATION LOGOS AND ICONS/PASSWORD.png';
import eastIcon from '../images/AUTHENTICATION LOGOS AND ICONS/east.png';

import welcomeLogo from '../images/LOADING PAGE/WELCOME PAGE LOGO BLACK.png';
import google from '../images/AUTHENTICATION LOGOS AND ICONS/GOOGLE ICON.png'

import './Auth.css';
import Slideshow from '../components/Slideshow.jsx';
import { UserAuth } from '@/context/AuthContext';

function SignIn() {
 
    const {googleSignIn} = UserAuth()
  
    return (
        <div>
            <nav className="sticky z-50">
                <div className="mx-3 md:mx-10 flex">
                    <div className="mt-5">
                        <a href="index.html" className="flex items-center text-white">
                            <img src={welcomeLogo} alt="Your Logo" className="mt-5 w-[130px] md:w-[120px]" />
                        </a>
                    </div>
                </div>    
            </nav>
            <section className="lg:hidden">
            <div className="pr-[85px] md:pr-10">
                <div className="mx-8 mt-[150px] signIn">
                    <h1 className="font-black text-[28px] gotham tracking-tight">Sign in</h1>
                    <p className="text-[#636363] font-poppins text-[18px] pr-1 mt-[-5px]">Enter the following details</p>
                </div>
                <div className="container mx-6 md:mx-10 mt-10 flex flex-col space-y-4 relative">
                    <div className="relative">
                        <input placeholder="Email" type="email" id="email" name="email" className="border w-full p-3 py-4 border-dotted bg-[#e3e3e3] border-[#848484] rounded-xl focus:outline-none border-spacing-x-1 border-spacing-y-4"
/>
                        <img src={emailIcon} className="absolute right-3 top-[22px] h-3 w-4" alt="icon"/>
                    </div>
                    <div className="relative">
                        <input placeholder="Password" type="password" id="password" name="password" className="border w-full p-2 py-4 border-dotted bg-[#e3e3e3] border-[#848484] rounded-xl focus:outline-none"
                    />
                        <img src={passwordIcon} className="absolute right-[15px] top-5 h-4 w-3" alt="icon"/>
                    </div>
                    <a href="reset_pass.html" className="text-xs text-[#636363] font-poppins font-medium tracking-wide">Forgot your password?</a>
                    <div className="flex items-center justify-center mt-4">
                        <div className="w-12 h-12 bg-[#094446] rounded-full ml-auto">
                            <a href="sign_up.html">
                                <img src={eastIcon} alt="" className="w-5 ml-3 mt-3"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <button className='ml-[30vw] flex justify-center px-5 py-2 mt-2 rounded-lg border-2 cursor-pointer'>
                                <div className='flex gap-2' onClick={async() => await googleSignIn() }
                                    >
                                    <img className='w-[20px]' src={google} alt="" />
                                    <h2 className='font-medium text-[15px]'>Google</h2>
                                </div>
                            </button>
        
            
        </section>
            <section class="hidden lg:block">
                <Slideshow/>
            <section>
                <div className="form-container hidden md:block mx-auto max-w-[400px] 2xl:max-w-[500px] h-[500px] 2xl:h-[570px] mt-2 rounded-xl border border-gray-300 justify-center">
                    <div className="pr-[85px] md:pr-10 z-50">
                        <div className="mx-12 2xl:mx-12 mt-[50px] 2xl:mt-20 signIn">
                            <h1 className="font-black text-[28px] gotham tracking-tight">Sign in</h1>
                            <p className="text-[#636363] font-poppins text-[18px] pr-1 mt-[-5px]">Enter the following details</p>
                        </div>
                        <div className="container mx-6 md:mx-10 mt-10 2xl:mt-10 flex flex-col space-y-4 relative pr-10">
                            <div className="relative">
                                <div className="input-group">
                                    <label className="label">Email address</label>
                                    <div className="input-container relative">
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            id="email"
                                            name="email"
                                      
                                            className="input border w-full px-4 py-3 border-dotted bg-[#e3e3e3] border-[#848484] rounded-xl focus:outline-none"
                                     
                                        />
                                        <img src={emailIcon} className="absolute right-3 top-5 h-3 w-4" alt="icon" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative">
                                <div className="input-group">
                                    <label className="label">Password</label>
                                    <div className="input-container relative">
                                        <input
                                            placeholder="Password"
                                            type="password"
                                            id="password"
                                            name="password"
                                   
                                            className="input border w-full px-4 py-3 border-dotted bg-[#e3e3e3] border-[#848484] rounded-xl focus:outline-none"
                                      
                                        />
                                        <img src={passwordIcon} className="absolute right-3 top-3 h-5 w-4" alt="icon" />
                                    </div>
                                </div>
                            </div>
                            <a href="reset_pass.html" className="text-xs text-[#636363] font-poppins font-medium tracking-wide">Forgot your password?</a>
                            <div className="flex items-center justify-center mt-4">
                                <div className="w-9 h-9 bg-[#094446] rounded-full ml-auto">
                                    <a href="sign_up.html">
                                        <img src={eastIcon} alt="" className="w-5 ml-[8px] mt-[8px]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button className='ml-[10vw] flex justify-center px-5 py-2 mt-2 rounded-lg border-2 cursor-pointer'>
                                <div className='flex gap-2'>
                                    <img className='w-[20px]' src={google} alt="" />
                                    <h2 className='font-medium text-[15px]'>Google</h2>
                                </div>
                            </button>
                    </div>
                </div>
                </section>
                <div className="footer bottom-0 mt-10 left-0 right-0 md:relative md:flex ml-10 2xl:mt-28 text-[12px] form-container">
                <p className="font-gotham-black font-medium text-[#272822]">© 2024 Tnennt All rights reserved.</p>
            </div>
            </section>

            
        </div>
    );
}



export default SignIn;
