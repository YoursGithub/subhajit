import React, { useState } from 'react';
import welcomeLogo from '../images/LOADING PAGE/WELCOME PAGE LOGO BLACK.png';
import backOptionIcon from '../images/images3/back.png';
import eastIcon from '../images/AUTHENTICATION LOGOS AND ICONS/east.png';


function ResetPassword() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div>
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

            <section>
                <div className="ml-6 mt-28">
                    <h2 className="font-extrabold text-3xl">Reset password</h2>
                    <p className="text-[#636363] mt-3 text-xl">Enter the email associated with your account and we'll send an email with instructions to reset your password</p>
                </div>

                <div className="ml-6 mt-6 pr-10">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <div className="relative">
                        <input
                            id="email"
                            type="email"
                            placeholder=" "
                            className="w-full px-3 py-3 border border-dotted border-[#848484] rounded-lg focus:outline-none placeholder-gray-400"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <label htmlFor="email" className={`absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 ${email ? 'hidden' : ''}`}>Enter Your Email</label>
                    </div>
                </div>

                <div className="w-10 h-10 bg-[#094446] rounded-full mt-7 ml-auto flex items-center mr-10">
                    <img src={eastIcon} alt="" className="w-6 ml-2" />
                </div>
            </section>
        </div>
    );
}

export default ResetPassword;
