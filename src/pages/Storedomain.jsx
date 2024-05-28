import React, { useState } from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backIcon from '../images/back.png';
import frame398Icon from '../images/Frame 398.png';
import frame399Icon from '../images/Frame 399.png';
import { Link } from 'react-router-dom';
import Desktopheader from '@/components/Desktopheader';
import Desktopfooter from '@/components/Desktopfooter';

const SelectStoreDomainPage = () => {
    const [domain, setDomain] = useState('');
    const [domainExists, setDomainExists] = useState(true); // Change to false if domain doesn't exist

    const handleDomainChange = (e) => {
        setDomain(e.target.value);
    };

    const handleContinueClick = () => {
        // Handle continue button click event
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
                <p className="font-extrabold text-[7vw]">Enter Your Store Domain</p>
                <p className="text-[#636363] text-[4vw]">People can search for your store using this domain</p>
            </div>

            <div className="mx-5 my-3 px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh]">
                <p className="text-[#094446] text-[3vw] font-extrabold">Store Domain</p>
                <div className="flex flex-row justify-between items-center">
                    <input type="text" value={domain} onChange={handleDomainChange} className="text-[#636363] text-[3vw]  border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#fff]" />
                    <p className="text-[#848484] font-bold text-[3vw]">.tnnent.store</p>
                </div>
            </div>

            {domainExists && (
                <div className="mx-6 my-5 flex items-center">
                    <img src={frame398Icon} alt="" className="w-[3vw] mr-1" />
                    <p className="text-[3vw] text-[#636363]">You can own this store domain</p>
                </div>
            )}

            {!domainExists && (
                <div className="mx-6 my-5 flex items-center">
                    <img src={frame399Icon} alt="" className="w-[3vw] mr-1" />
                    <p className="text-[3vw] text-[#636363]">Already Registered Store</p>
                </div>
            )}

            <div className="parent flex justify-center items-center relative h-[440px]">

                <div className="absolute bottom-[10px]">
                    <Link to='/selectcategory'>
                    <button onClick={handleContinueClick} className="px-[9vh] py-3 bg-[#094446] text-[3vw] font-extrabold text-white border rounded-[15px]">
                        CONTINUE
                    </button>
                    </Link>
                </div>
            </div>
        </section>
        <section className='hidden lg:block'>
          <Desktopheader/>
          <div className='mt-24'>
          <div className="text-center border p-10 w-[850px] h-[500px] mt-5 rounded-2xl gap-28 text-[16px] mx-auto" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>
      <h2 className="font-extrabold text-2xl mt-14">
        Enter Your Store Domain
      </h2>

      <p className="text-sm text-[#636363] mt-3">People can search for your store using this domain</p>

      <div className="relative mt-10">
        <div className="input-with-icon">
          <div className="absolute left-48 p-2 pointer-events-none font-semibold text-black ml-1 text-[17px]">
            Store Domain
          </div>
          {/* <img
            src="./images2/mobile icons/EMAIL.png"
            alt=""
            className="absolute top-10 left-52 w-5 h-4"
          /> */}
          <input
            type="text"
            id="Name"
            name="name"
            className="border w-96 pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-20 pl-3 focus:outline-none relative"
            style={{ paddingRight: '80px' }}
          />
          <div className="absolute inset-y-0 right-52 top-4 flex items-center pr-3 text-gray-500">
            .tnennt.store
          </div>
        </div>
      </div>

      <div className="flex">
        <a href="#" className="p-2 w-72 mt-20 mx-auto rounded-full py-4 bg-[#094446] text-lg text-center block">
          <div>
            <p className="text-white">Continue</p>
          </div>
        </a>  
      </div>
    </div>
          </div>
          <Desktopfooter/>
        </section>
        </div>
        </>
    );
};

export default SelectStoreDomainPage;
