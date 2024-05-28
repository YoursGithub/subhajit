import React, { useState } from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backIcon from '../images/back.png';
import emailIcon from '../images/EMAIL.png';
import { Link } from 'react-router-dom';
import Desktopheader from '@/components/Desktopheader';
import Desktopfooter from '@/components/Desktopfooter';

const SelectEmailPage = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        if (!email) {
            e.preventDefault();
            setError('Email is required');
        }
    };

    return (
        <>
            <div className='forscroll'>
                <section className="lg:hidden">
                    <div className="w-full h-[12vh] flex p-[20px] justify-between sticky z-50 mb-[12vh]">
                        <div className="flex justify-center items-center gap-2">
                            <img src={tnnentLogo} alt="tnnent-logo" className="w-10" />
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <img className="w-12" src={backIcon} alt="" />
                        </div>
                    </div>

                    <div className="mx-5">
                        <p className="font-extrabold text-[7vw]">Enter Your Business/Store mail</p>
                        <p className="text-[#636363] text-[4vw]">People can search for your store using this domain</p>
                    </div>

                    <div className="mx-5 my-3 px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh] bg-[#]">
                        <p className="text-[#094446] text-[4vw] font-extrabold">Email</p>
                        <div className="flex justify-between">
                            <input
                                type="email"
                                id="email-input"
                                value={email}
                                onChange={handleEmailChange}
                                className="text-[4vw] border-0 border-[#000000] px-0.5 py-1 outline-none"
                                required
                            />
                            <img className="w-[4.5vw] h-[4vw]" src={emailIcon} alt="" />
                        </div>
                        {error && <p className="text-red-500 text-[3.5vw]">{error}</p>}
                    </div>

                    <div className="parent flex justify-center items-center relative h-[440px]">
                        <div className="absolute bottom-[10px]">
                            <div className="flex gap-1 pb-2">
                                <input className="w-[3vw]" type="checkbox" name="" id="" />
                                <p className="text-[3vw]">I agree with the <span className="text-[#094446]">Terms and Conditions</span></p>
                            </div>
                            <Link to='/storename' onClick={handleSubmit}>
                                <button className="px-[9vh] py-3 bg-[#094446] text-[4vw] font-extrabold text-white border rounded-[15px]">
                                    CONTINUE
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className='hidden lg:block'>
                    <Desktopheader />
                    <div className='mt-24'>
                        <div className="text-center border p-10 w-[850px] h-[500px] mt-5 rounded-2xl gap-28 text-[16px] mx-auto" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>
                            <h2 className="font-extrabold text-2xl mt-14">
                                Enter Your Business/Store Email
                            </h2>

                            <p className="text-sm text-[#636363] mt-3">Email regarding store will be sent to this email</p>

                            <div className="relative mt-10">
                                <div className="input-with-icon">
                                    <div className="absolute left-48 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">
                                        Email
                                    </div>
                                    <img
                                        src={emailIcon}
                                        alt=""
                                        className="absolute top-10 left-52 w-5 h-4"
                                    />
                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="border w-96 pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-10 focus:outline-none"
                                        placeholder="Enter your Email"
                                        required
                                    />
                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                                </div>
                            </div>

                            <div className="flex">
                                <div className="mt-24 flex gap-2">
                                    <input type="checkbox" id="agree" className="form-checkbox accent-[#094446] h-5 w-5" />
                                    <p className="text-sm">I agree with <span className="text-green-700">Terms & Conditions</span></p>
                                </div>

                                <a href="#" className="p-2 w-72 mt-20 ml-3 rounded-full py-4 bg-[#094446] text-lg text-center block" onClick={handleSubmit}>
                                    <div>
                                        <p className="text-white">Continue</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Desktopfooter />
                </section>
            </div>
        </>
    );
};

export default SelectEmailPage;
