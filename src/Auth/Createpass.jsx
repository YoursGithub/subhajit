import React from 'react'
import welcomeLogo from '../images/LOADING PAGE/WELCOME PAGE LOGO BLACK.png';
import backOptionIcon from '../images/images3/back.png';
import eastIcon from '../images/AUTHENTICATION LOGOS AND ICONS/east.png';
import passwordIcon from '../images/AUTHENTICATION LOGOS AND ICONS/PASSWORD.png';
import Slideshow from '../components/Slideshow.jsx';

function Createpass() {

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
            <div className="ml-6 mt-28">
                <h2 className="font-extrabold text-3xl">Create new password</h2>
                <p className="text-[#636363] mt-3 text-xl pr-3">Your new password must be different from previous used passwords.</p>
            </div>

            <div className="ml-6 mt-6">
                
                <div className="relative pr-10">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="w-full px-3 py-4 border border-dotted border-[#848484] rounded-lg focus:outline-none placeholder-gray-400"
                        
                    />
                    
                </div>
            </div>
            
            <div className="ml-6 mt-6">
                
                <div className="relative pr-10">
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="w-full px-3 py-4 border border-dotted border-[#848484] rounded-lg focus:outline-none placeholder-gray-400"
                        
                    />
                    
                </div>
            </div>

            <div className="w-10 h-10 bg-[#094446] rounded-full mt-7 ml-auto flex items-center mr-10">
                <img src={eastIcon} alt="" className="w-6 ml-2" />
            </div>
            
        </section>
        <section className="hidden lg:block">
             <Slideshow/>
             <section>
            <div className="form-container hidden md:block mx-auto max-w-[400px] 2xl:max-w-[500px] h-[500px] 2xl:h-[570px] mt-2 rounded-xl border border-gray-300 justify-center">
                <div className="pr-[85px] md:pr-10 z-50">
                    <div className="ml-6 mt-16">
                        <h2 className="font-extrabold text-3xl">Create new password</h2>
                        <p className="text-[#636363] mt-3 text-xl pr-3">Your new password must be different from previously used passwords.</p>
                    </div>

                    <div className="ml-6 mt-5">
                        <div className="relative">
                            <div className="input-group">
                                <label className="label">New Password</label>
                                <div className="input-container relative">
                                    <input
                                        autoComplete="off"
                                        name="Password"
                                        id="Password"
                                        required
                                        className="input border w-full px-4 py-3 border-dotted bg-[#e3e3e3] border-[#848484] rounded-xl focus:outline-none"
                                        type="password"
                                    />
                                    <img
                                        src={passwordIcon}
                                        className="absolute right-3 top-3 h-5 w-4"
                                        alt="icon"
                                    />
                                </div>
                            </div>
                        </div>
                    
                        <div className="relative mt-5">
                            <div className="input-group">
                                <label className="label">Confirm Password</label>
                                <div className="input-container relative">
                                    <input
                                        autoComplete="off"
                                        name="Password"
                                        id="ConfirmPassword"
                                        required
                                        className="input border w-full px-4 py-3 border-dotted bg-[#e3e3e3] border-[#848484] rounded-xl focus:outline-none"
                                        type="password"
                                    />
                                    <img
                                        src={passwordIcon}
                                        className="absolute right-3 top-3 h-5 w-4"
                                        alt="icon"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="w-10 h-10 bg-[#094446] rounded-full mt-7 ml-auto flex items-center justify-center">
                        <img src={eastIcon} alt="" className="w-6" />
                    </div>
                </div>
            </div>
        </section>
        </section>
    </>
  )
}

export default Createpass
