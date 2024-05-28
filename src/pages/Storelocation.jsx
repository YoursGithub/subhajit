import React, { useState } from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backButton from '../images/back.png';
import vectorImage from '../images/Vector (18).svg';
import { Link } from 'react-router-dom';
import Desktopheader from '@/components/Desktopheader';
import Desktopfooter from '@/components/Desktopfooter';

function SelectStoreLocation() {
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
        if (e.target.value) {
            setError('');
        }
    };

    const handleContinue = () => {
        if (!location) {
            setError('Location is required');
        } else {
          
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
                            <img className="w-12" src={backButton} alt="" />
                        </div>
                    </div>

                    <div className="mx-5">
                        <p className="font-extrabold text-[7vw]">Enter Your Store Location</p>
                        <p className="text-[#636363] text-[4vw]">Search for area, street name</p>
                    </div>

                    <div className="mx-5 my-3 px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh]">
                        <p className="text-[#094446] text-[3vw] font-extrabold">Location</p>
                        <div className="flex items-center gap-2">
                            <img className="w-[4vw] h-[4vw]" src={vectorImage} alt="" />
                            <input
                                type="text"
                                id="phone-input"
                                className="w-[70vw] text-[4vw] border-0 border-[#000000] px-0.5 py-1 outline-none"
                                value={location}
                                onChange={handleLocationChange}
                            />
                        </div>
                        {error && <p className="text-red-500 text-[3vw]">{error}</p>}
                    </div>

                    <div className="parent flex justify-center items-center relative h-[440px]">
                        <div className="absolute bottom-[10px]">
                            <button
                                className="px-[9vh] py-3 bg-[#094446] text-[3vw] font-extrabold text-white border rounded-[15px]"
                                onClick={handleContinue}
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
                            <h2 className="font-extrabold text-2xl mt-10">
                                Enter Your Store Location
                            </h2>

                            <p className="text-sm text-[#636363] mt-3">Search for area, street name . . . </p>

                            <div className="relative mt-14">
                                <div className="input-with-icon">
                                    <div className="absolute left-48 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">
                                        Location
                                    </div>
                                    <img
                                        src={vectorImage}
                                        alt=""
                                        className="absolute top-10 left-52 w-4 h-4"
                                    />
                                    <input
                                        type="text"
                                        id="Location"
                                        name="Location"
                                        className="border w-96 pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-10 focus:outline-none"
                                        placeholder="Enter your Location"
                                        value={location}
                                        onChange={handleLocationChange}
                                    />
                                </div>
                            </div>
                            {error && <p className="text-red-500 mt-3">{error}</p>}
                            <div className="flex">
                                <button
                                    className="p-2 w-72 mt-10 mx-auto rounded-full py-4 bg-[#094446] text-lg text-center block text-white"
                                    onClick={handleContinue}
                                >
                                    Continue
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

export default SelectStoreLocation;
