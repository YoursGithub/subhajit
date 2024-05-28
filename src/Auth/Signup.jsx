import React from 'react'
import usernameIcon from '../images/AUTHENTICATION LOGOS AND ICONS/USERNAME.png';
import emailIcon from '../images/AUTHENTICATION LOGOS AND ICONS/EMAIL.png';
import passwordIcon from '../images/AUTHENTICATION LOGOS AND ICONS/PASSWORD.png';
import eastIcon from '../images/AUTHENTICATION LOGOS AND ICONS/east.png';
import welcomeLogo from '../images/LOADING PAGE/WELCOME PAGE LOGO BLACK.png';
import Slideshow from '../components/Slideshow.jsx';
import './Auth.css';

function Signup() {
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
            <div className="pr-20 md:pr-10">
                <div className="mx-10 mt-32">
                    <h1 className="text-4xl font-bold">Sign Up</h1>
                    <p className="text-[#636363]">Enter the following details</p>
                </div>
                <div className="container mx-10 md:mx-10 mt-5 flex flex-col space-y-4">
                    <div className="relative">
                        <input placeholder="Username" type="text" id="username" name="username" 
                               className="border w-full p-2 py-4 border-dotted border-gray-400 rounded-xl focus:outline-none pr-10" />
                        <img src={usernameIcon} className="absolute right-3 top-4 h-6 w-6" alt="icon" />
                    </div>
                    
                    <div className="relative">
                        <input placeholder="Email" type="email" id="email" name="email"
                               className="border w-full p-2 py-4 border-dotted border-gray-400 rounded-xl focus:outline-none" />
                        <img src={emailIcon} className="absolute right-3 top-4 h-5 w-6" alt="icon" />
                    </div>
                    <div className="relative">
                        <input placeholder="Password" type="password" id="password" name="password" 
                               className="border w-full p-2 py-4 border-dotted border-gray-400 rounded-xl focus:outline-none" />
                        <img src={passwordIcon} className="absolute right-3 top-4 h-7 w-6" alt="icon" />
                    </div>
                    <div className="w-10 h-10 bg-[#094446] rounded-full ml-auto">
                        <a href="registration.html">
                            <img src={eastIcon} alt="" className="w-5 ml-2 mt-3" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <p className="text-[#545454] mt-24">Already a user? <a href="sign_in.html" className="text-[#000000]">Sign In</a></p>
            </div>

           
        </section>
        <section class="hidden lg:block">
            <Slideshow/>
            <section className="">
            <div className="form-container hidden md:block mx-auto max-w-[400px] 2xl:max-w-[500px] h-[500px] 2xl:h-[570px] mt-2 rounded-xl border border-gray-300 justify-center">
                <div className="pr-[85px] md:pr-10 z-50">
                    <div className="mx-12 2xl:mx-12 mt-[50px] 2xl:mt-20 signIn">
                        <h1 className="font-black text-[28px] gotham tracking-tight">Sign Up</h1>
                        <p className="text-[#636363] font-poppins text-[18px] pr-1 mt-[-5px]">Enter the following details</p>
                    </div>
                    <div className="container mx-6 md:mx-10 mt-10 2xl:mt-10 flex flex-col space-y-4 relative pr-10">

                        <div className="relative">
                            <div className="input-group">
                                <label className="label">Username</label>
                                <div className="input-container relative">
                                    <input autoComplete="off" type="text" required className="input border w-full px-4 py-3 border-dotted bg-[#e3e3e3] border-[#848484] rounded-xl focus:outline-none" />
                                    <img src={usernameIcon} className="absolute right-3 top-5 h-4 w-4" alt="icon" />
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="input-group">
                                <label className="label">Email address</label>
                                <div className="input-container relative">
                                    <input autoComplete="off" name="Email" id="Email" type="email" required className="input border w-full px-4 py-3 border-dotted bg-[#e3e3e3] border-[#848484] rounded-xl focus:outline-none" />
                                    <img src={emailIcon} className="absolute right-3 top-5 h-3 w-4" alt="icon" />
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="input-group">
                                <label className="label">Password</label>
                                <div className="input-container relative">
                                    <input autoComplete="off" name="Password" id="Password" required className="input border w-full px-4 py-3 border-dotted bg-[#e3e3e3] border-[#848484] rounded-xl focus:outline-none" type="password" />
                                    <img src={passwordIcon} className="absolute right-3 top-3 h-5 w-4" alt="icon" />
                                </div>
                            </div>
                        </div>
                
                        <div className="flex items-center justify-center mt-4">
                            <div className="w-9 h-9 bg-[#094446] rounded-full ml-auto">
                                <a href="registration.html">
                                    <img src={eastIcon} alt="" className="w-5 ml-[8px] mt-[8px]" />
                                </a>
                            </div>
                        </div>
                
                        <div className="text-center">
                            <p className="text-[#545454] mt-10 text-[15px] 2xl:mt-20">Already a user? <a href="sign_in.html" className="form-container font-poppins text-[#545454] semi-bold">Sign In</a></p>
                        </div>
                
                    </div>
                </div>
            </div>
        </section>
        </section>
    </div>
  )
}

export default Signup
