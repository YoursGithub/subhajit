import React, { useState } from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backButton from '../images/back.png';
import { Link } from 'react-router-dom';
import Desktopheader from '@/components/Desktopheader';
import Desktopfooter from '@/components/Desktopfooter';

function SelectStoreName() {
    const [storeName, setStoreName] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setStoreName(event.target.value);
    };

    const handleSubmit = () => {
        if (!storeName.trim()) {
            setError('Store name is required.');
        } else {
            setError('');
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
                            <img className="w-12" src={backButton} alt="back-button" />
                        </div>
                    </div>

                    <div className="mx-5">
                        <p className="font-extrabold text-[7vw]">Your Store Name</p>
                        <p className="text-[#636363] text-[4vw]">You can change it later from your store settings</p>
                    </div>

                    <div className="mx-5 my-3 px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh]">
                        <p className="text-[#094446] text-[3vw] font-extrabold">Store Name</p>
                        <input
                            type="text"
                            id="store-name-input"
                            className="text-[#636363] text-[4vw] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#fff]"
                            value={storeName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <div className="parent flex justify-center items-center relative h-[440px]">
                        <div className="absolute bottom-[10px]">
                            <button
                                onClick={handleSubmit}
                                className="px-[9vh] py-3 bg-[#094446] text-[3vw] font-extrabold text-white border rounded-[15px]"
                            >
                                CONTINUE
                            </button>
                        </div>
                    </div>
                </section>

                <section className='lg:block hidden'>
                    <Desktopheader />
                    <div className='mt-24'>
                        <div className="text-center border p-10 w-[850px] h-[500px] mt-5 rounded-2xl gap-28 text-[16px] mx-auto" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>
                            <h2 className="font-extrabold text-2xl mt-14">Your Store Name</h2>
                            <p className="text-sm text-[#636363] mt-3">You can change it later from your store settings</p>

                            <div className="relative mt-10">
                                <div className="input-with-icon">
                                    <div className="absolute left-48 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">Store Name</div>
                                    <input
                                        type="text"
                                        id="Name"
                                        name="name"
                                        className="border w-96 pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-3 focus:outline-none"
                                        placeholder="Enter your Store Name"
                                        value={storeName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            {error && <p className="text-red-500">{error}</p>}

                            <div className="flex">
                                <button
                                    onClick={handleSubmit}
                                    className="p-2 w-72 mt-20 mx-auto rounded-full py-4 bg-[#094446] text-lg text-center block"
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

export default SelectStoreName;
