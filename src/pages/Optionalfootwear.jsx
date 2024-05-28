<<<<<<< HEAD
import React, { useState } from 'react';
import backIcon from '../images/images3/back.png';
import menudesktop from '../images/menu icon.png'
import backdesktop from '../images/back desktop.png'
import logo from '../images/Frame 397.png'
import { Link } from 'react-router-dom';
import './style.css';


function Optionalfootwear() {
    const [selectedCategory, setSelectedCategory] = useState('foot');

    const [checkedCount, setCheckedCount] = useState(0);

    const showCategory = (category) => {
        setSelectedCategory(category);
    };
    const handleCheckboxCount = () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let count = 0;
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                count++;
            }
        });
        setCheckedCount(count);
    };

    const [Footwear] = useState([
        { amount: 'US 5' },
        { amount: 'US 6' },
        { amount: 'US 7' }
    ])
    const [Storage] = useState([
        { amount: '6gb, 128gb' },
        { amount: '8gb, 514gb' },
        { amount: '12gb, 1TB' }
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
                            Footwear
                        </button>
                    </div>

                    <div className="mx-4 mt-7 mb-7">
                        <div>
                            <button className={`focus:outline-none visited:outline-none active:outline-none category-button-1 border border-black bg-[#343434] text-[#737373] m-1 px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center font-bold ${selectedCategory === 'foot' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'}`} data-category="foot" onClick={() => showCategory('foot')}>
                                Size
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
                        <div className="py-1 px-[9px]  border-black mx-5 rounded-lg border-[2px]">
                            <p className="here text-[4vw] font-bold">{checkedCount}</p>
                        </div>
                    </div>

                </div>

                <div className="w-full mt-5">
                    <div className="mx-5">
                        {selectedCategory === 'foot' && (
                            <div className="flex flex-col">
                            {Footwear.map((option, index) => (
                                <div key={index} className="my-5">
                                    <div className='flex justify-between'>
                                    <p className="text-[4vw] text-[#094446] font-bold">{option.amount}</p>
                                    <div className="checkbox-wrapper-13">
                                    <input 
                                                type="checkbox" 
                                                id={`agree-${index}`} 
                                                className="form-checkbox accent-[#094446] h-5 w-5" 
                                                onChange={handleCheckboxCount}
                                            />
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        )}

                        
                    </div>
                </div>
                <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
                                <Link to="/addprice" className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                                Next
                                </Link>
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
                Storage
            </button>
        </div>

        <div className="mx-4 mt-7 mb-7">
            <div className="">

                    <button className={`focus:outline-none visited:outline-none active:outline-none category-button-1 border border-black bg-[#343434] text-[#737373] m-1 px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center font-bold ${selectedCategory === 's' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'}`} data-category="s" onClick={() => showCategory('s')}>
                        Capacity
                    </button>
                    
            </div>
        </div>

        <div className="flex justify-center items-center pt-3 pb-1">
            <hr className="w-[95%]" style={{ borderTop: "1.5px dashed [#848484]" }} />
        </div>

        <div className="flex justify-center" id="categorySection1">

        {selectedCategory === 's' && (
    <div className="flex flex-col flex-wrap max-h-[25vw] mb-12 justify-center mr-[9vw]">
        {Storage.map((option, index) => (
            <div key={index} className="w-[33%] mr-[7vw] max-h-screen">
                <div className='flex justify-between items-center mt-[2.05vw] w-[60%]'>
                    <p className="text-[20px] text-[#094446] font-bold absolute max-h-[28vw]">{option.amount}</p>
                    <div className="checkbox-wrapper-13" style={{marginLeft: "170px"}}>
                        <input type="checkbox" id={`agree-${index}`} className="form-checkbox accent-[#094446] h-5 w-5" />
                    </div>
                </div>
            </div>
        ))}
    </div>
)}        </div>

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

export default Optionalfootwear;
=======
import React, { useState,useContext } from 'react';
import backIcon from '../images/images3/back.png';
import menudesktop from '../images/menu icon.png'
import backdesktop from '../images/back desktop.png'
import logo from '../images/Frame 397.png'
import { Link } from 'react-router-dom';
import './style.css';
import OptionalsContext from '../context/OptionalContext';


function Optionalfootwear() {
    const [selectedCategory, setSelectedCategory] = useState('foot');
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

    const [Footwear] = useState([
        { amount: 'US 5' },
        { amount: 'US 6' },
        { amount: 'US 7' }
    ])
    const [Storage] = useState([
        { amount: '6gb, 128gb' },
        { amount: '8gb, 514gb' },
        { amount: '12gb, 1TB' }
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
                            Footwear
                        </button>
                    </div>

                    <div className="mx-4 mt-7 mb-7">
                        <div>
                            <button className={`focus:outline-none visited:outline-none active:outline-none category-button-1 border border-black bg-[#343434] text-[#737373] m-1 px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center font-bold ${selectedCategory === 'foot' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'}`} data-category="foot" onClick={() => showCategory('foot')}>
                                Size
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
                        {selectedCategory === 'foot' && (
                            <div className="flex flex-col">
                            {Footwear.map((option, index) => (
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
                <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
                                <Link to="/addprice" className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                                Next
                                </Link>
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
                Storage
            </button>
        </div>

        <div className="mx-4 mt-7 mb-7">
            <div className="">

                    <button className={`focus:outline-none visited:outline-none active:outline-none category-button-1 border border-black bg-[#343434] text-[#737373] m-1 px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center font-bold ${selectedCategory === 's' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'}`} data-category="s" onClick={() => showCategory('s')}>
                        Capacity
                    </button>
                    
            </div>
        </div>

        <div className="flex justify-center items-center pt-3 pb-1">
            <hr className="w-[95%]" style={{ borderTop: "1.5px dashed [#848484]" }} />
        </div>

        <div className="flex justify-center" id="categorySection1">

        {selectedCategory === 's' && (
    <div className="flex flex-col flex-wrap max-h-[25vw] mb-12 justify-center mr-[9vw]">
        {Storage.map((option, index) => (
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
)}        </div>

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

export default Optionalfootwear;
>>>>>>> ed5b998a6e830c094745f3276fbd1c54de38080c
