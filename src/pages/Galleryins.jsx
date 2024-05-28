import React from 'react';
import './style.css'; 
import tnenntIcon from '../images/tnennt icon.png';
import frame380 from '../images/Frame 380.png';
import image1 from '../images/image 1.png';
import vector1 from '../images/Vector (1).png';

function MiddlemanGroup() {

    
        return (
            <>
            <div className='forscroll'>
            
                <section className="md:hidden bg-[#f1f0ec] w-full h-screen">
                    
                    <div className="flex justify-center">
                        <div className="bg-white p-2 w-[94vw] mt-4 rounded-3xl">
                            <img className="w-[29vw] px-2 py-2" src={tnenntIcon} alt="" />
                            <div className="flex justify-between mt-16">
                                <h2 className="font-bold text-[#094446] text-[7.7vw] ml-[9px] mt-[-53px]">THE<br />MIDDLEMAN</h2>
                                <img className="w-[40vw] mt-[-50px]" src={frame380} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="px-6 flex justify-between mt-6">
                        <h2 className="font-bold text-[6vw] leading-1">THE MIDDLEMAN<br />GROUP!</h2>
                        <button className="bg-[#094446] border-2 py-2.5 px-5 me-2 mb-2 rounded-full text-white text-[4vw] font-bold mt-4 mr-[-1%]">View List</button>
                    </div>

                    <p className="ml-6 mt-4 text-[3.5vw]">Get a chance to work as a certified middlemen and let's<br />grow together!</p>
                    <div className="flex mt-4 gap-3">
                        <div className="flex ml-6 mt-8 w-[150px] ">
                            <div className="bg-violet-300 h-[7vh] w-[7vh] rounded-full"></div>
                            <div className="bg-yellow-200 z-10 ml-[-30px] h-[7vh] w-[7vh] rounded-full"></div>
                            <div className="bg-red-300 z-20 ml-[-30px] h-[7vh] w-[7vh] rounded-full"></div>
                            <div className="bg-slate-300 flex justify-center items-center z-30 ml-[-30px] h-[7vh] w-[7vh] rounded-full">
                                <h2 className="text-[15px]">9.8k+</h2>
                            </div>
                        </div>
                        <p className="self-center mt-8 text-[4vw]">active middlemen</p>
                    </div>
                    <div className=" mt-12 mb-32 px-5">
                        <h2 className="font-bold text-[5vw]">DESCRIPTION</h2>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="flex gap-3 fixed justify-center bottom-6 left-8 z-50">
                        <a href="gallery.html">
                            <div className="w-[12.7vw] h-[12.7vw] mt-[10px] bg-[#2D332F] rounded-full flex-shrink-0 flex justify-center items-center">
                                <img className="w-[2.5vw] mr-[4.1px]" src={image1} alt="" />
                            </div>
                        </a>
                        <div className="fixed bottom-4" style={{ right: 'calc(6px + 4.5vw + 1vw)' }}> {/* Adjusted right position */}
                            <button className="bg-[#2D332F] py-[3.5vw] px-[23vw] mt-2 mb-2 rounded-full text-white text-[4vw] relative">
                                Register Now
                                <div className="absolute right-0 top-[50%] transform translate-y-[-50%] w-[3.5vw] mt-0 mr-[12%] flex items-center justify-center">
                                    <img src={vector1} alt="" className="w-full h-full" />
                                </div>
                            </button>
                        </div>
                    </div>
                    
                </section>
                </div>
            </>
        );
    }


export default MiddlemanGroup;
