import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../images/images2/desktop icons/logo.png';
import backOption from '../images/images2/mobile icons/BACK OPTION.png';
import userIcon from '../images/images2/mobile icons/user.png';
import callIcon from '../images/images2/mobile icons/call.png';
import earthIcon from '../images/images2/mobile icons/earth.png';
import locationIcon from '../images/images2/mobile icons/location.png';

function ShipmentDetailsPage() {
    const [state, setState] = useState({
        name: '',
        mobile: '',
        location: '',
        area: '',
        pincode: '',
        city: '',
        state: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    return (
        <>
            <div className='forscroll'>
                <section className='lg:hidden'>
                    <div>
                        <nav>
                            <div className="flex p-5">
                                <div className="mt-1">
                                    <Link to="/" className="flex items-center text-white">
                                        <img src={logo} alt="Your Logo" className="mt-5 w-10" />
                                    </Link>
                                </div>
                                <div className="ml-auto mt-5 md:mt-5 pr-3 sm:pr-2">
                                    <img src={backOption} alt="" className="w-10" />
                                </div>
                            </div>
                        </nav>

                        <section className="md:hidden">
                            <div className="mt-2 pl-6">
                                <h1 className="text-[35px] font-gotham-black font-extrabold mr-12" style={{ color: 'black' }}>Enter your Shipment Details</h1>
                            </div>

                            <div className="ml-5 space-y-6 pr-5 mt-5 mb-28">
                                <div className="relative gap-10">
                                    <div className="input-with-icon">
                                        <div className="absolute left-0 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">Name</div>
                                        <img src={userIcon} alt="" className="absolute top-10 left-3 w-4 h-4" />
                                        <input type="text" name="name" className="border w-full pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-10 focus:outline-none" placeholder="Enter your name" onChange={handleInputChange} value={state.name} />
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="input-with-icon">
                                        <div className="absolute left-0 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">Mobile Number</div>
                                        <img src={callIcon} alt="" className="absolute top-10 left-3 w-4 h-4" />
                                        <input type="text" name="mobile" className="border w-full pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-10 focus:outline-none" placeholder="Enter your mobile number" onChange={handleInputChange} value={state.mobile} maxLength="10" />
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="input-with-icon">
                                        <div className="absolute left-0 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">Flat/ Housing No./ Building/ Apartment</div>
                                        <img src={earthIcon} alt="" className="absolute top-10 left-3 w-4 h-4" />
                                        <input type="text" name="location" className="border w-full pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-10 focus:outline-none" placeholder="Enter the details" onChange={handleInputChange} value={state.location} />
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="input-with-icon">
                                        <div className="absolute left-0 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">Area/ Street/ Sector</div>
                                        <img src={locationIcon} alt="" className="absolute top-10 left-3 w-4 h-4" />
                                        <input type="text" name="area" className="border w-full pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-10 focus:outline-none" placeholder="Enter the details" onChange={handleInputChange} value={state.area} />
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="input-with-icon">
                                        <div className="absolute left-0 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">Pincode</div>
                                        <input type="text" name="pincode" className="border w-full pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-3 focus:outline-none text-left" placeholder="Enter your pincode" onChange={handleInputChange} value={state.pincode} maxLength="6" />
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="relative">
                                        <div className="input-with-icon">
                                            <div className="absolute left-0 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">City</div>
                                            <input type="text" name="city" className="border w-full pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-3 focus:outline-none" placeholder="" onChange={handleInputChange} value={state.city} />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="input-with-icon">
                                            <div className="absolute left-0 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">State</div>
                                            <input type="text" name="state" className="border w-full pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-3 focus:outline-none" placeholder="" onChange={handleInputChange} value={state.state} />
                                        </div>
                                    </div>
                                </div>
                                <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
                                    <Link to="/deliverproduct" className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                                        Proceed
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ShipmentDetailsPage;
