import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import frame397 from '../images/images3/Frame 397.png';
import frame407 from '../images/images3/Frame 407.png';
import frame400 from '../images/images3/Frame 400.png';
import frame409 from '../images/images3/Frame 409.png';
import back from '../images/images3/back.png';
import menudesktop from '../images/menu icon.png'
import backdesktop from '../images/back desktop.png'
import logo from '../images/Frame 397.png'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
import cross from '../images/cross-svgrepo-com.svg'

const getNextColor = (() => {
    const colors = ["#DDF1EF", "#EAE6F6", "#EFEFEF", "#EFF6E6", "#ffc8dd"];
    let colorIndex = 0;
    
    return () => {
        const color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
        return color;
    };
})();

function CreateProductPage2() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [categories, setCategories] = useState([]);
    const [inputcategory, setinputcategory] = useState('')

    const handleCategoryClick = (index) => {
        setSelectedCategory(index);
    };



    const handleInputChange = (e) => {
        setNewCategoryName(e.target.value);
    };

    const handleAddCategory = () => {
        if (newCategoryName.trim() !== '') {
            const newCategory = {
                name: newCategoryName.trim(),
                color: getNextColor(),
                count: "0"
            };
            setCategories([...categories, newCategory]);
            setNewCategoryName('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddCategory();
        }
    };

    const handleRemoveCategory = (index) => {
        setCategories(categories.filter((_, i) => i !== index));
    };

    return (
        <>
        <div className='forscroll'>
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between">
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={frame397} alt="" />
                </div>
                <div className="flex justify-center items-center gap-4">
                <Link to="/createpage"><img className="w-12" src={back} alt="" /></Link>
                </div>
            </div>

            <p className="mx-5 text-[7vw] font-extrabold">Choose Your <br /> Personalised Category</p>
            <p className="mx-5 mt-2 text-[3vw] text-[#636363]">Create dedicated sections for your product list add items to their respective slot.</p>
            <Link to='/viewallproducts'>
            <button className='mt-5 ml-4 font-bold text-[3vw] px-5 py-3 bg-[#094446] rounded-full text-white'>View all products</button>
            </Link>
            <p className="mx-5 mt-7 mb-2 font-extrabold text-[#636363] text-[4vw]">New Category:</p>
            <div className="mx-5 my-1 p-3 flex flex-row items-center  border-dotted border-[1px] border-[#636363] rounded-[15px] gap-2">
                <img className="w-[7vw] h-[7vw]" src={frame400} alt="" onClick={handleAddCategory}/>
                <input
                    type="text"
                    id="phone-input"
                    className="text-[#848484] font-bold text-[3.5vw] w-80 border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#ffffff]"
                    placeholder="Create Your New Category"
                    value={newCategoryName}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                
            </div>

            <p className="mx-5 mt-8 mb-2 font-extrabold text-[#636363] text-[4vw]">Created Category:</p>

            <div className="flex flex-wrap ml-5 gap-[2.3vw] mb-[45%]">
                {categories.map((category, index) => (
                    <div key={index} className={`flex flex-col w-[28vw] h-[24vw] bg-[${category.color}] p-[2vw] border rounded-[12px] relative ${selectedCategory === index ? 'bg-gray-300' : ''}`} onClick={() => handleCategoryClick(index)}>
                        <AlertDialog>
                            <AlertDialogTrigger>
                          <div className='absolute flex justify-center items-center h-[5vw] w-[5vw] left-[75%] bg-red-500 rounded-full' >
                            <img className='w-[2.3vw]' src={cross} alt="" />
                         </div>
                         </AlertDialogTrigger>
                            <AlertDialogContent className="w-[90vw] rounded-3xl">
                        <AlertDialogHeader>
               <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className="rounded-3xl">Cancel</AlertDialogCancel>
      <AlertDialogAction className="rounded-3xl" onClick={(e) => { e.stopPropagation(); handleRemoveCategory(index); }}>Continue</AlertDialogAction>
    </AlertDialogFooter>
                        </AlertDialogContent>
                            </AlertDialog>
                        <span className="text-[2.7vw] text-[#094446] font-extrabold mb-[3vw]">{category.name}</span>
                        <p className="text-[6vw] text-[#094446] font-extrabold mb-[-2vw]">{category.count}</p>
                        <div className="flex">
                            <div className="flex w-[100%] justify-between items-center">
                                <p className="text-[2.7vw] text-[#636363] font-extrabold">ITEMS</p>
                                <Link to='/createpage'>
                                <img className="w-[9vw] h-[9vw] mt-[-48%]" src={frame407} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {categories.length === 0 && (
                <div className="flex justify-center items-center h-[410px]">
                    <img className="w-[170px]" src={frame409} alt="" />
                </div>
            )}

            
        </section>
        <section className="hidden lg:block">
            <div className="w-[100vw] flex justify-between px-5 py-5 absolute top-0">
                <div className="flex items-center justify-center relative">
                    <img className="w-[10vw]" src={menudesktop} alt="" />
                    <p className="absolute text-[#ffffff] font-bold mr-[50px]">Menu</p>
                </div>
                <div className="flex items-center justify-center relative">
                    <img className="w-[7vw]" src={backdesktop} alt="" />
                    <p className="absolute text-[#000] font-bold">Back</p>
                </div>
            </div>
            <div className="flex justify-center items-center h-screen">
                <div className="w-[50%]">
                    <p className="mx-5 text-[28px] font-extrabold">Choose Your <br /> Personalised Category</p>
                    <p className="mx-5 mt-2 text-[20px] text-[#636363] w-[80%]">Create dedicated sections for your product list add items to their respective slot.</p>
                    <p className="mx-5 mt-8 mb-2 font-extrabold text-[#636363] text-[20px]">New Category:</p>
                    <div className="mx-5 my-1 p-3 flex flex-row items-center border-dotted border-[1px] border-[#636363] rounded-[15px] gap-2 w-[80%]">
                        <img className="w-[33px] h-[33px]" src={frame400} alt="" onClick={handleAddCategory}/>
                        <input type="text" id="phone-input" className="text-[#848484] font-bold text-[18px] w-80 border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#ffffff]" placeholder="Create Your New Category"    
                    value={newCategoryName}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}/>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[50%]">
                    <p className="mx-5 mt-8 mb-[40px] font-extrabold text-[#636363] text-[28px]">Created Category:</p>
                    <div className="flex flex-wrap ml-5 gap-[25px]">
                    {categories.map((category, index) => (
                        <div key={index} className={`flex flex-col w-[200px] h-[150px] p-[20px] border rounded-[12px] justify-between  bg-[${category.color}]  ${selectedCategory === index ? 'bg-gray-300' : ''}`} onClick={() => handleCategoryClick(index)}>
                       
                            <span className="text-[16px] text-[#094446] font-extrabold mb-">{category.name}</span>
                            <div>
                                <p className="text-[30px] text-[#094446] font-extrabold mb-[-10px]">{category.count}</p>
                                <div className="flex">
                                    <div className="flex w-[100%] justify-between items-center">
                                        <p className="text-[16px] text-[#636363] font-extrabold">ITEMS</p>
                                        <img className="w-[28px] h-[28px]" src={frame407} alt="" />
                                    </div>
                                </div>
                            
                            </div>
                        
                        </div>
                        ))}
                          {categories.length === 0 && (
                <div className="flex justify-center items-center h-[410px]">
                    <img className="w-[250px]" src={frame409} alt="" />
                </div>
            )}
                        {/* End of repeatable div block */}
                    </div>
                    <div className="flex flex-col justify-center items-center mt-[50px]">
                        <p className="text-[12px]">Get latest updates and have a track on what's new on Tnennt</p>
                        <p className="text-[15px] text-[#094446]">Join Our Tnennt Community</p>
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

export default CreateProductPage2;
