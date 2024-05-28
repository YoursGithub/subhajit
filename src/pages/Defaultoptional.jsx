import React, { useState } from 'react';
import frame397 from '../images/images3/Frame 397.png';
import backIcon from '../images/images3/back.png';
import menudesktop from '../images/menu icon.png'
import backdesktop from '../images/back desktop.png'
import logo from '../images/Frame 397.png'

function SelectDefaultOptional() {
    const [options, setOptions] = useState([
        { label: '1 Pound', value: '1pound' },
        { label: '1.5 Pound', value: '1.5pound' },
        { label: '2 Pound', value: '2pound' },
        { label: '3 Pound', value: '3pound' }
    ]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <>
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between">
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={frame397} alt="" />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <a href=""><img className="w-12" src={backIcon} alt="" /></a>
                </div>
            </div>

            <p className="mx-5 font-extrabold text-[5.5vw]">Select Your Default Optional</p>
            <p className="mx-5 text-[#636363] text-[3.5vw] pb-4">Default optional will be displayed to the customer first.</p>

            <div className="flex justify-center items-center pt-3 pb-4">
                <hr className="w-[95%]" style={{ borderTop: '1.5px dashed #848484' }} />
            </div>

            <form onSubmit={handleSubmit}>
                {options.map((option, index) => (
                    <div key={index} className="flex justify-between mx-5 my-5">
                        <p className="text-[4vw] text-[#094446] font-bold">{option.label}</p>
                        <input
                            className="w-[4vw]"
                            type="radio"
                            id={option.value}
                            name="defaultOption"
                            value={option.value}
                            checked={selectedOption === option.value}
                            onChange={handleOptionChange}
                        />
                    </div>
                ))}

<button className="text-[#ffffff] text-[4vw] py-3 px-20 bg-[#000000]  rounded-full font-bold fixed bottom-4 left-[23%]">
        Change
    </button>
            </form>
            
        </section>
        <section className='hidden lg:block'>
          <div className="flex justify-center items-center h-screen">

          <div className="w-screen flex justify-between px-5 py-5 absolute top-0">
            <div className="flex items-center justify-center relative">
              <img className="w-[10vw]"  src={menudesktop} alt="" />
              <p className="absolute text-[#ffffff] font-bold mr-[50px]">Menu</p>
            </div>
            <div className="flex items-center justify-center relative">
              <img className="w-[7vw]"  src={backdesktop} alt="" />
              <p className="absolute text-black font-bold">Back</p>
            </div>
          </div>
    
          <div className="w-1/2">
            <p className="mx-9 font-extrabold text-4xl">Select Your Default Optional</p>
            <p className="mx-9 text-[#636363] text-[20px] pb-4">Default optional will be displayed to the customer first.</p>
            <div className="flex mx-9 mt-[30px]">
              <button className="px-[90px] py-4 bg-[#343434] text-white font-bold border rounded-full">Change</button>
            </div>
          </div>
          <div class="w-[50%] flex flex-col justify-center items-center">
          {options.map((option, index) => (
                    <div key={index} className="flex justify-between mx-5 my-5 w-[60%]">
                        <p className="text-[23px] text-[#094446] font-bold">{option.label}</p>
                        <input
                            className="w-[23px]"
                            type="radio"
                            id={option.value}
                            name="defaultOption"
                            value={option.value}
                            checked={selectedOption === option.value}
                            onChange={handleOptionChange}
                        />
                    </div>
                ))}
            </div>
        </div>
        <div className="absolute bottom-[10px] flex justify-center items-center">
    <p className="mx-5 text-[12px]">©2024 Tnennt All rights reserved.</p>
    <img width="30px" className="absolute left-[49vw]" src={logo} alt="" />
</div>

        </section>
        </>
    );
}

export default SelectDefaultOptional;
