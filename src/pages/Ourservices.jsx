import React from 'react';
import './style.css'; // Import CSS file
import { Link } from 'react-router-dom';
// Import images
import logo from '../images/images2/desktop icons/logo.png';
import bigIllustration from '../images/images2/mobile icons/big illustration.png';
import backOption from '../images/images2/mobile icons/BACK OPTION.png';

const ServicesPage = () => {
    return (
        <>
    <div className='forscroll'>
        <section className="md:hidden">
            <div className="w-full h-64" style={{ backgroundImage: `url(${bigIllustration})`, backgroundSize: 'cover', padding: '20px' }}>
                <div className="flex">
                    <div className="mt-1">
                        <Link href="index.html" className="flex items-center text-white">
                            <img src={logo} alt="Your Logo" className="mt-5 w-10" />
                        </Link>
                    </div>
                    <div className="ml-auto mt-5 md:mt-5 pr-3 sm:pr-2">
                        <img src={backOption} alt="" className="w-10" />
                    </div>
                </div>
                <div className="mt-5">
                    <h1 className="text-3xl font-gotham-black font-bold mr-10" style={{ color: 'black' }}>
                        Deliver <br />
                        Anything Anywhere Easily
                    </h1>
                </div>
            </div>

            <div className="p-4">
                <p>Check all your recent & ongoing delivery details just in one click</p>
            </div>

            <Link to="/deliverytome">
                <div className="p-10 ml-5 mt-7 rounded-2xl mr-40 py-6 bg-[#EFEFEF]" style={{ width: '230px', overflow: 'hidden' }}>
                    <h2 className="font-black text-2xl font-gotham-black mr-5 ml-[-25px]" style={{ color: 'black' }}>
                        Delivery to me<span className="text-red-500"> &bull;</span>
                    </h2>
                    <p className="text-[#6B6B6B] mt-4 ml-[-25px]">See all the deliveries you have received</p>
                </div>
            </Link>

            <Link to="/deliveryfromme">
                <div className="p-10 ml-5 mt-5 rounded-2xl mr-40 mb-32 py-6 bg-[#FFDFDF]" style={{ width: '230px', overflow: 'hidden' }}>
                    <h2 className="font-black text-2xl font-gotham-black mr-5 ml-[-25px]" style={{ color: 'black' }}>
                        Delivery from me <span className="text-green-500"> &bull;</span>
                    </h2>
                    <p className="text-[#6B6B6B] mt-4 ml-[-25px]">See all the deliveries you have sent</p>
                </div>
            </Link>

            <div className="fixed left-0 right-0 flex justify-center items-center bottom-3">
                <Link to="/deliverproduct" className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                    Deliver Product
                </Link>
            </div>
        </section>
        </div>
        </>
    );
};

export default ServicesPage;
