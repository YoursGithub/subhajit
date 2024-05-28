import React, { useState } from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backIcon from '../images/back.png';
import './style.css';
import Desktopheader from '@/components/Desktopheader';
import Desktopfooter from '@/components/Desktopfooter';
import { Link } from 'react-router-dom';


const SelectCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const toggleCategory = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
    };

    const categories = ['Clothing', 'Grocery', 'Electronics', 'Restaurant','Book Store','Bakery','Beauty Apparel','Cafe','Florist','Footwear','Accessories','Stationary','Eyewear','Watch','Musical Instrument','Sports'];

    return (
        <>
        <div className='forscroll'>
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between sticky z-50 mb-[1vh]">
                <div className="flex justify-center items-center gap-2">
                    <img src={tnnentLogo} alt="tnnent-logo" className="w-10" />
                </div>
                <a href="./registration.html">
                    <div className="flex justify-center items-center gap-4">
                        <img className="w-12" src={backIcon} alt="" />
                    </div>
                </a>
            </div>

            <div className="mx-5 mb-[5vh]">
                <p className="font-extrabold text-[7vw]">Choose Your Category</p>
                <p className="text-[#636363] text-[4vw]">Select one category which describes your store</p>
            </div>

            {/* Repeat the category selection divs for each category */}
            {/* Example: */}
            
            <div className="mx-5 mb-24">
                {categories.reduce((rows, category, index) => {
                    if (index % 2 === 0) rows.push([]);
                    rows[rows.length - 1].push(
                        <div key={category} className="w-[50%] my-5">
                            <div
                                 className={`p-3 flex items-center border-dotted rounded-lg gap-2 border-[2px] border-[#636363] ${
                                    selectedCategory === category && 'bg-[#094446] text-white'
                                }`}
                                onClick={() => toggleCategory(category)}
                            >
                                <div className="checkbox-wrapper-13">
                                <input
                                    id={`c1-${index}`}
                                    type="checkbox"
                                    checked={selectedCategory === category}
                                    onChange={() => toggleCategory(category)}
                                />
                                </div>
                                <p className="text text-[12px]">{category}</p>
                            </div>
                        </div>
                    );
                    return rows;
                }, []).map((row, index) => (
                    <div key={index} className="flex justify-center items-center gap-8">
                        {row}
                    </div>
                ))}
            </div>


            {/* Continue button */}
            
                <Link to='/storeupi'>
                    <button className="absolute bottom-[3%] left-[20%] px-[9vh] py-3 bg-[#094446] font-extrabold text-white border rounded-[15px]">
                        CONTINUE
                    </button>
                    </Link>
                
            
        </section>
        <section className='hidden lg:block'>
            <Desktopheader/>
            <div className="flex containers mt-[14%]">
                <div className="text-center mt-10">
                    <h2 className="text-2xl font-extrabold">Choose Your Category</h2>
                    <p className="mt-5 text-[#636363] text-md ml-2">Select one category which describes your store</p>
                    <a href="#" className="p-2 w-72 mt-20 mx-auto rounded-full py-4 bg-[#094446] text-lg text-center block">
                        <div>
                            <p className="text-white">Continue</p>
                        </div>
                    </a>  
                </div>
                <div className='flex flex-col gap-7 mt-[-5%] ml-[12%] flex-wrap max-h-[30vw]'>
                    {categories.map((category, index) => (
                        <div key={category} className={`w-[50%] flex justify-center items-center gap-8`}>
                            <div
                                className={`p-3 flex w-[170px] items-center border-dotted rounded-lg gap-2 border-[2px] border-[#636363] ${
                                    selectedCategory === category && 'bg-[#094446] text-white'
                                }`}
                                onClick={() => toggleCategory(category)}
                            >
                                <div className="checkbox-wrapper-13">
                                    <input
                                        id={`c1-${index}`}
                                        type="checkbox"
                                        checked={selectedCategory === category}
                                        onChange={() => toggleCategory(category)}
                                    />
                                </div>
                                <p className="text text-[12px]">{category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Desktopfooter/> 
        </section>
        </div>
        </>
    
    );
};

export default SelectCategory;
