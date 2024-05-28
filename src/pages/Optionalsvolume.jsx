import React, { useState, useContext } from 'react';
import backIcon from '../images/images3/back.png';
import menudesktop from '../images/menu icon.png'
import backdesktop from '../images/back desktop.png'
import logo from '../images/Frame 397.png'
import './style.css';
import OptionalsContext from '../context/OptionalContext';

function OptionalsVolume() {
    const [selectedCategory, setSelectedCategory] = useState('ml');
    const { selectedOptions, setSelectedOptions } = useContext(OptionalsContext);

    const handleCheckboxChange = (option, isChecked) => {
        if (isChecked) {
          setSelectedOptions([...selectedOptions, option]);
        } else {
          setSelectedOptions(selectedOptions.filter(o => o!== option));
        }
      };

    const showCategory = (category) => {
        setSelectedCategory(category);
    };

    const [milliliterOptions] = useState([
        { amount: '50ml' },
        { amount: '100ml' },
        { amount: '150ml' },
        { amount: '200ml' },
        { amount: '250ml' },
        { amount: '500ml' }
    ]);

    const [literOptions] = useState([
        { amount: '1l' },
        { amount: '1.5l' },
        { amount: '2l' },
        { amount: '2.5l' },
        { amount: '3l' },
        { amount: '3.5l' }
    ]);


    return (
        <>
        <div className='forscroll'>
            <section className="lg:hidden">
                <div className="sticky z-60 bg-white top-0">
                    <div className="w-full h-[12vh] flex p-[20px] justify-between">
                        <div className="flex justify-center items-center gap-2">
                            <h2 className="text-2xl font-black">OPTIONALS</h2>
                            <div className="bg-red-400 h-[1vh] w-[1vh] rounded-full"></div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <img className="w-12" src={backIcon} alt="Back" />
                        </div>
                    </div>

                    <p className="mx-5 font-extrabold text-[4vw] pb-4">Add Option Type</p>

                    <div className="mx-5 flex gap-3 flex-wrap">
                        <button className="focus:outline-none visited:outline-none active:outline-none category-button border border-black bg-[#094446] text-white px-14 py-3 rounded-lg transition-colors duration-300 inline-flex items-center font-bold ">
                            Volume
                        </button>
                    </div>

                    <div className="mx-4 mt-7 mb-7">
                        <div>
                            <button className={`focus:outline-none visited:outline-none active:outline-none category-button-1 border border-black bg-[#343434] text-[#737373] m-1 px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center font-bold ${selectedCategory === 'ml' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'}`} data-category="ml" onClick={() => showCategory('ml')}>
                                Millilitre
                            </button>
                            <button className={`focus:outline-none visited:outline-none active:outline-none category-button-1 border border-black bg-[#343434] text-[#737373] m-1 px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center font-bold ${selectedCategory === 'l' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'}`} data-category="l" onClick={() => showCategory('l')}>
                                Litre
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center pt-3 pb-6">
                        <hr className="w-[95%]" style={{ borderTop: '1.5px dashed #848484' }} />
                    </div>

                    <div className="flex justify-between pb-4 items-center z-[99]">
                        <div>
                            <p className="mx-5 font-extrabold text-[4vw]">Options Selected</p>
                            <p className="mx-5 font-bold text-[#848484] text-[3vw]">This will be added to your optional list</p>
                        </div>
                        <div className="py-1 px-[5px]  border-black mx-5 rounded-lg border-[2px]">
                            <p className="text-[4vw] font-bold">09</p>
                        </div>
                    </div>

                </div>

                <div className="w-full mt-5">
                    <div className="mx-5">
                        {selectedCategory === 'ml' && (
                            <div className="flex flex-col">
                            {milliliterOptions.map((option, index) => (
                                <div key={index} className="my-5">
                                    <div className='flex justify-between'>
                                    <p className="text-[4vw] text-[#094446] font-bold">{option.amount}</p>
                                    <div className="checkbox-wrapper-13">
                                        <input type="checkbox" id={`agree-${index}`} onChange={(e) => handleCheckboxChange(option.amount, e.target.checked)} className="form-checkbox accent-[#094446] h-5 w-5" />
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        )}

                        {selectedCategory === 'l' && (
                            <div className="flex flex-col">
                            {literOptions.map((option, index) => (
                                <div key={index} className="my-5">
                                    <div className='flex justify-between'>
                                    <p className="text-[4vw] text-[#094446] font-bold">{option.amount}</p>
                                    <div className="checkbox-wrapper-13">
                                        <input type="checkbox" id={`agree-${index}`} onChange={(e) => handleCheckboxChange(option.amount, e.target.checked)} className="form-checkbox accent-[#094446] h-5 w-5" />
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center items-center sticky bottom-[1px] bg-white">
                <button className="text-[#ffffff] text-[4vw] w-[66%] py-3 my-3 bg-[#000000] border rounded-full font-bold">
                    Next
                </button>
            </div>

            </section>
            <section className="hidden lg:block overflow-x-hidden">

<div className="w-full flex justify-between px-5 py-5 absolute top-0">
    <div className="flex items-center justify-center relative">
        <img className="w-[10vw]" src={menudesktop} alt="" />
        <p className="absolute text-[#ffffff] font-bold mr-[50px]">Menu</p>
    </div>
    <div className="flex items-center justify-center relative">
        <img className="w-[7vw]" src={backdesktop} alt="" />
        <p className="absolute text-[#000] font-bold">Back</p>
    </div>
</div>

<div className="flex items-center h-screen">

    <div className="w-30 flex flex-col">
        <h2 className="text-[42px] mx-5 font-black mb-[20px]">ADD PRODUCT</h2>
        <a className="mx-5" href="">
            <button className="text-[#ffffff] text-[25px] w-[66%] py-3 my-3 bg-[#000000] border rounded-full font-bold">
                Next
            </button>
        </a>
    </div>

    <div className="w-[70%] ml-20">

        <div className="flex justify-between items-center ">
            <p className="mx-5 font-extrabold text-[22px] pb-4">Add Option Type</p>
            <div className="flex justify-between pb-4 items-center">
                <div className=''>
                    <p className="mx-5 font-extrabold text-[22px]">Options Selected</p>
                    <p className="mx-5 font-bold text-[#848484] text-[15px]">This will be added to your optional list</p>
                </div>
                <div className="py-1 px-[5px] border-black mx-5 rounded-lg border-[1px]">
                    <p className="text-[22px] font-bold">09</p>
                </div>
            </div>
        </div>

        <div className="mx-5 flex gap-3 flex-wrap">
            <button className="focus:outline-none visited:outline-none active:outline-none category-button border border-black bg-[#094446] text-white px-14 py-3 rounded-lg transition-colors duration-300 inline-flex items-center font-bold"  data-category="size">
                Volume
            </button>
        </div>

        <div className="mx-4 mt-7 mb-7">
            <div className="">

                    <button className={`focus:outline-none visited:outline-none active:outline-none category-button-1 border border-black bg-[#343434] text-[#737373] m-1 px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center font-bold ${selectedCategory === 'ml' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'}`} data-category="ml" onClick={() => showCategory('ml')}>
                        Millilitre
                    </button>
                    <button className={`focus:outline-none visited:outline-none active:outline-none category-button-1 border border-black bg-[#343434] text-[#737373] m-1 px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center font-bold ${selectedCategory === 'l' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'}`} data-category="l" onClick={() => showCategory('l')}>
                        Litre
                    </button>
                    
            </div>
        </div>

        <div className="flex justify-center items-center pt-3 pb-1">
            <hr className="w-[95%]" style={{ borderTop: "1.5px dashed [#848484]" }} />
        </div>

        <div className="flex justify-center" id="categorySection1">

        {selectedCategory === 'ml' && (
    <div className="flex flex-col flex-wrap max-h-[25vw] mb-12 justify-center mr-[9vw]">
        {milliliterOptions.map((option, index) => (
            <div key={index} className="w-[33%] mr-[7vw] max-h-screen">
                <div className='flex justify-between items-center mt-[2.05vw] w-[60%]'>
                    <p className="text-[20px] text-[#094446] font-bold absolute max-h-[28vw]">{option.amount}</p>
                    <div className="checkbox-wrapper-13" style={{marginLeft: "170px"}}>
                        <input type="checkbox" id={`agree-${index}`} onChange={(e) => handleCheckboxChange(option.amount, e.target.checked)} className="form-checkbox accent-[#094446] h-5 w-5" />
                    </div>
                </div>
            </div>
        ))}
    </div>
)}



                        {selectedCategory === 'l' && (
                            <div className="flex flex-col flex-wrap max-h-[25vw] mb-12 justify-center mr-[9vw]">
                            {literOptions.map((option, index) => (
                                <div key={index} className="w-[33%] mr-[7vw] max-h-screen">
                                    <div className='flex justify-between items-center mt-[2.05vw] w-[60%]'>
                                        <p className="text-[20px] text-[#094446] font-bold absolute max-h-[28vw]">{option.amount}</p>
                                        <div className="checkbox-wrapper-13" style={{marginLeft: "170px"}}>
                                            <input type="checkbox" id={`agree-${index}`} onChange={(e) => handleCheckboxChange(option.amount, e.target.checked)} className="form-checkbox accent-[#094446] h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        )}

                       
        </div>

    </div>
</div>

<div className="absolute bottom-[10px] flex justify-center items-center">
    <p className="mx-5 text-[12px]">©2024 Tnennt All rights reserved.</p>
    <img width="30px" className="absolute left-[49vw]" src={logo} alt="" />
</div>

</section>
            
            </div>
        </>
    );
}

export default OptionalsVolume;
