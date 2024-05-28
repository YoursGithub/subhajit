import React from 'react';
import welcomeLogo from '../images/LOADING PAGE/WELCOME PAGE LOGO BLACK.png';
import backOptionIcon from '../images/images3/back.png';
import checkIcon from '../images/AUTHENTICATION LOGOS AND ICONS/check.png';
import eastIcon from '../images/AUTHENTICATION LOGOS AND ICONS/east.png';

function ProfilePictureadded() {
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
                <div className="flex flex-col items-center mt-40 gap-2">
                    <div className="w-24 h-24 bg-[#757575] rounded-full">
                        <div className="relative">
                            <div className="w-10 h-10 bg-[#094446] rounded-full mt-10 ml-16 mx-auto relative">
                                <img src={checkIcon} alt="" className="w-9 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                    <h2 className="font-extrabold text-xl">Profile Picture Added</h2>
                    <a href="" className="text-[#757575] mt-[-2px]">Change Picture</a>
                    <div className="w-10 h-10 bg-[#094446] rounded-full mt-7 mx-auto flex items-center">
                        <img src={eastIcon} alt="" className="w-6 ml-2" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProfilePictureadded;
