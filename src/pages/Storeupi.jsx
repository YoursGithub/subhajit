import React, { useState } from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backButton from '../images/back.png';
import frame398 from '../images/Frame 398.png';
import { Link } from 'react-router-dom';
import Desktopheader from '@/components/Desktopheader';
import Desktopfooter from '@/components/Desktopfooter';

function StoreUPI() {
    const [username, setUsername] = useState('');
    const [upiId, setUpiId] = useState('');
    const [invalidUpi, setInvalidUpi] = useState(false);
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleUpiIdChange = (e) => {
        setUpiId(e.target.value);
    };

    const handleContinueClick = (e) => {
        e.preventDefault();
        if (!username.trim() || !upiId.trim()) {
            setInvalidUpi(true);
            setError('Both fields are required.');
        } else {
            setInvalidUpi(false);
            setError('');
        }
    };

    return (
        <>
            <div className='forscroll'>
                <section className="md:hidden">
                    <div className="w-full h-[12vh] flex p-[20px] justify-between sticky z-50 mb-[12vh]">
                        <div className="flex justify-center items-center gap-2">
                            <img src={tnnentLogo} alt="tnnent-logo" className="w-10" />
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <img className="w-12" src={backButton} alt="back-button" />
                        </div>
                    </div>

                    <div className="mx-5">
                        <p className="font-extrabold text-[7vw]">Enter Your UPI Details</p>
                        <p className="text-[#636363] text-[4vw]">You will receive your store payment directly to your UPI account</p>
                    </div>

                    <div className="mx-5 my-3 px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh]">
                        <p className="text-[#094446] text-[3vw] font-extrabold">Username</p>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={handleUsernameChange} 
                            className="text-[#636363] text-[3vw] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#fff]" 
                        />
                    </div>

                    <div className="mx-5 my- px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh]">
                        <p className="text-[#094446] text-[3vw] font-extrabold">UPI ID</p>
                        <input 
                            type="email" 
                            value={upiId} 
                            onChange={handleUpiIdChange} 
                            className="text-[#636363] text-[3vw] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#fff]" 
                        />
                    </div>

                    {invalidUpi && (
                        <div className="mx-6 my-5 flex items-center">
                            <img src={frame398} alt="error-icon" className="w-[4vw] h-[4vw] mr-1" />
                            <p className="text-[3vw] text-[#636363]">{error}</p>
                        </div>
                    )}

                    <div className="parent flex justify-center items-center h-[350px] relative">
                        <div className="absolute bottom-[10px]">
                            <button 
                                onClick={handleContinueClick} 
                                className="px-[9vh] py-3 bg-[#094446] font-extrabold text-white border rounded-[15px]"
                            >
                                CONTINUE
                            </button>
                        </div>
                    </div>
                </section>

                <section className='hidden lg:block'>
                    <Desktopheader />
                    <div className='mt-24'>
                        <div className="text-center border p-10 w-[850px] h-[500px] mt-5 rounded-2xl gap-28 text-[16px] mx-auto" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>
                            <h2 className="font-extrabold text-2xl mt-4">Enter Your UPI Details</h2>
                            <p className="text-sm text-[#636363] mt-3">You will receive your store payment directly to your UPI account</p>

                            <div className="relative mt-10">
                                <div className="input-with-icon">
                                    <div className="absolute left-48 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">Username</div>
                                    <input
                                        type="text"
                                        id="Name"
                                        name="name"
                                        className="border w-96 pt-9 p-1 py-2 border-dotted border-[#848484] text-black rounded-xl px-20 pl-3 focus:outline-none"
                                        placeholder="Enter your Name"
                                        value={username}
                                        onChange={handleUsernameChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="relative mt-10">
                                <div className="input-with-icon">
                                    <div className="absolute left-48 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">UPI ID</div>
                                    <input
                                        type="text"
                                        id="UPI"
                                        name="upi"
                                        className="border w-96 pt-9 p-1 py-2 border-dotted border-[#848484] text-black rounded-xl px-20 pl-3 focus:outline-none"
                                        placeholder="Enter your UPI ID"
                                        value={upiId}
                                        onChange={handleUpiIdChange}
                                        required
                                    />
                                </div>
                            </div>

                            {invalidUpi && (
                                <div className="my-5 flex items-center justify-center">
                                    <img src={frame398} alt="error-icon" className="w-[20px] h-[20px] mr-2" />
                                    <p className="text-sm text-[#636363]">{error}</p>
                                </div>
                            )}

                            <div className="flex">
                                <button 
                                    onClick={handleContinueClick} 
                                    className="p-2 w-72 mt-10 mx-auto rounded-full py-4 bg-[#094446] text-lg text-center block"
                                >
                                    <p className="text-white">Continue</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Desktopfooter />
                </section>
            </div>
        </>
    );
}

export default StoreUPI;
