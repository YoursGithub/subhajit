import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import your custom CSS file
import logo from '../images/images2/desktop icons/logo.png'; // Import logo image
import backOption from '../images/images2/mobile icons/BACK OPTION.png'; // Import back option image
import deliveryIcon from '../images/images2/mobile icons/delivery.png'; 
import confirmedIcon from '../images/images2/mobile icons/confirmed.png'; // Import confirmed icon image
import cancelIcon from '../images/images2/mobile icons/cancel.png'; // Import cancel icon image
import electronicsCard from '../images/images2/desktop_mainpage/desktop_electronicscard.png';
import camera from '../images/Rectangle 2267.svg'; // Import electronics card image
import home from '../images/home.png';
import catalog from '../images/catalog.png';
import community from '../images/community.png';
import store from '../images/store.png';
import gallery from '../images/gallery.png';

const ElectronicsPage = () => {
  // Define states for dynamic data
  const [todaysDate, setTodaysDate] = useState('');

  // Function to format today's date
  const formatDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const today = new Date();
    const dayOfWeek = days[today.getDay()];
    const dayOfMonth = today.getDate();
    const month = months[today.getMonth()];
    return `${dayOfWeek} ${dayOfMonth} ${month}`;
  };

  // Initialize today's date when the component mounts
  useState(() => {
    setTodaysDate(formatDate());
  }, []);

  // Function to handle budget selection
  const updateBudget = (value) => {
    // Logic to handle budget selection
  };

  return (
    <section>
      <div className="flex">
        <div className="mt-7 ml-4">
          <p className="text-sm text-[#727272] font-extrabold font-gotham-black" id="todaysDate">{todaysDate}</p>
          <h2 className="text-2xl font-extrabold font-gotham-black">Barnik Deb <span className="text-green-500"> &bull;</span></h2>
        </div>
        <div className="ml-auto mt-8 md:mt-5 pr-6 sm:pr-2">
          <img src={backOption} alt="" className="w-10" />
        </div>
      </div>

      <div className="p-4 mt-3">
        <img src={electronicsCard} alt="" />
      </div>

      {/* Search and Filter */}
      <div className="p-4">
        <div className="mt-5 gap-5 flex">
          {/* Search by name */}
          <div className="border w-full pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-1 pl-10 focus:outline-none relative">
            <input type="text" placeholder="Search by name..." className="w-full px-1 focus:outline-none" />
            <div className="absolute left-0 top-0 p-2 pointer-events-none font-extrabold text-black ml-1 text-[17px]">Item</div>
            <img src="./images2/mobile icons/Vector.png" alt="" className="absolute top-10 left-3 w-4 h-4" />
          </div>

          {/* Filter by Budget */}
          <div className="border w-full pt-9 p-1 py-5 border-dotted border-[#848484] text-black rounded-xl px-1 pl-10 focus:outline-none relative">
            <div className="absolute left-0 top-0 p-2 pointer-events-none font-extrabold text-black ml-1 text-[17px]">Budget</div>
            <img src="./images2/mobile icons/drop.png" alt="" className="absolute top-11 left-3 w-4 h-4" />
            <select className="absolute inset-y-0 left-10 top-6 pr-3 font-extrabold font-gotham-black bg-transparent appearance-none border-none focus:outline-none" onChange={(e) => updateBudget(e.target.value)}>
              <option value="Car">500-1000</option>
              <option value="Car">1000-2000</option>
              <option value="Bus">2000-3000</option>
              <option value="Bike">3000-5000</option>
            </select>
          </div>
        </div>
      </div>

      {/* Electronics cards */}
      <section className="md:hidden">
        <div className="flex flex-wrap justify-center mt-10 gap-5 mr-3 mb-20">
          {/* Repeat this card section for each electronics item */}
          <div className="relative bg-[#F5F5F5] rounded-xl w-36 min-h-full">
            {/* Like button container */}
            <div className="absolute top-0 right-0 mt-2 mr-2 bg-white rounded-full w-10 h-10 justify-center items-center flex">
                <div className="heart-container" title="Like">
                    <input type="checkbox" className="checkbox" id="Give-It-An-Id" />
                    <div className="svg-container">
                        {/* Outline heart icon */}
                        <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        {/* Filled heart icon */}
                        <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        {/* Celebrate animation icon */}
                        <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="10,10 20,20"></polygon>
                            <polygon points="10,50 20,50"></polygon>
                            <polygon points="20,80 30,70"></polygon>
                            <polygon points="90,10 80,20"></polygon>
                            <polygon points="90,50 80,50"></polygon>
                            <polygon points="80,80 70,70"></polygon>
                        </svg>
                    </div>
                </div>
            </div>
            {/* Product image */}
            <img src={camera} alt="" className="p-3" />
            {/* Product details */}
            <div className="m-1 text-center mb-2">
                <h1 className="font-extrabold text-[15px]">Canon xyz Camera</h1>
                <p className="text-left font-extrabold text-[15px] ml-2">&#8377; 200<span className="text-[#A9A9A9]"> /Hour</span></p>
            </div>
        </div>
        <div className="relative bg-[#F5F5F5] rounded-xl w-36 min-h-full">
            {/* Like button container */}
            <div className="absolute top-0 right-0 mt-2 mr-2 bg-white rounded-full w-10 h-10 justify-center items-center flex">
                <div className="heart-container" title="Like">
                    <input type="checkbox" className="checkbox" id="Give-It-An-Id" />
                    <div className="svg-container">
                        {/* Outline heart icon */}
                        <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        {/* Filled heart icon */}
                        <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        {/* Celebrate animation icon */}
                        <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="10,10 20,20"></polygon>
                            <polygon points="10,50 20,50"></polygon>
                            <polygon points="20,80 30,70"></polygon>
                            <polygon points="90,10 80,20"></polygon>
                            <polygon points="90,50 80,50"></polygon>
                            <polygon points="80,80 70,70"></polygon>
                        </svg>
                    </div>
                </div>
            </div>
            {/* Product image */}
            <img src={camera} alt="" className="p-3" />
            {/* Product details */}
            <div className="m-1 text-center mb-2">
                <h1 className="font-extrabold text-[15px]">Canon xyz Camera</h1>
                <p className="text-left font-extrabold text-[15px] ml-2">&#8377; 200<span className="text-[#A9A9A9]"> /Hour</span></p>
            </div>
        </div>
        <div className="relative bg-[#F5F5F5] rounded-xl w-36 min-h-full">
            {/* Like button container */}
            <div className="absolute top-0 right-0 mt-2 mr-2 bg-white rounded-full w-10 h-10 justify-center items-center flex">
                <div className="heart-container" title="Like">
                    <input type="checkbox" className="checkbox" id="Give-It-An-Id" />
                    <div className="svg-container">
                        {/* Outline heart icon */}
                        <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        {/* Filled heart icon */}
                        <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        {/* Celebrate animation icon */}
                        <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="10,10 20,20"></polygon>
                            <polygon points="10,50 20,50"></polygon>
                            <polygon points="20,80 30,70"></polygon>
                            <polygon points="90,10 80,20"></polygon>
                            <polygon points="90,50 80,50"></polygon>
                            <polygon points="80,80 70,70"></polygon>
                        </svg>
                    </div>
                </div>
            </div>
            {/* Product image */}
            <img src={camera} alt="" className="p-3" />
            {/* Product details */}
            <div className="m-1 text-center mb-2">
                <h1 className="font-extrabold text-[15px]">Canon xyz Camera</h1>
                <p className="text-left font-extrabold text-[15px] ml-2">&#8377; 200<span className="text-[#A9A9A9]"> /Hour</span></p>
            </div>
        </div>
        <div className="relative bg-[#F5F5F5] rounded-xl w-36 min-h-full">
            {/* Like button container */}
            <div className="absolute top-0 right-0 mt-2 mr-2 bg-white rounded-full w-10 h-10 justify-center items-center flex">
                <div className="heart-container" title="Like">
                    <input type="checkbox" className="checkbox" id="Give-It-An-Id" />
                    <div className="svg-container">
                        {/* Outline heart icon */}
                        <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        {/* Filled heart icon */}
                        <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        {/* Celebrate animation icon */}
                        <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="10,10 20,20"></polygon>
                            <polygon points="10,50 20,50"></polygon>
                            <polygon points="20,80 30,70"></polygon>
                            <polygon points="90,10 80,20"></polygon>
                            <polygon points="90,50 80,50"></polygon>
                            <polygon points="80,80 70,70"></polygon>
                        </svg>
                    </div>
                </div>
            </div>
            {/* Product image */}
            <img src={camera} alt="" className="p-3" />
            {/* Product details */}
            <div className="m-1 text-center mb-2">
                <h1 className="font-extrabold text-[15px]">Canon xyz Camera</h1>
                <p className="text-left font-extrabold text-[15px] ml-2">&#8377; 200<span className="text-[#A9A9A9]"> /Hour</span></p>
            </div>
        </div>
        </div>
      </section>

      {/* Bottom navigation */}
      <div className="fixed bottom-4 left-0 right-0 flex mx-auto mb-1 bg-[#2D332F] rounded-full text-xl p-2 w-[350px] md:w-full md:hidden text-white justify-around items-center">
        <Link className="icon flex items-center justify-center bg-[#2D332F] rounded-full p-4 w-14 h-14">
            <img src={home} alt="" className="w-8"/>
        </Link>
        <Link className="icon flex items-center justify-center bg-white rounded-full p-4 w-14 h-14">
            <img src={catalog} alt="" className="w-8"/>
        </Link>
        <Link  className="icon flex items-center justify-center bg-[#2D332F] rounded-full p-4 w-14 h-14">
            <img src={store} alt="" className="w-8"/>
        </Link>
        <Link  className="icon flex items-center justify-center bg-[#2D332F] rounded-full p-4 w-14 h-14">
            <img src={gallery} alt="" className="w-5"/>
        </Link>
        <Link  className="icon flex items-center justify-center bg-[#2D332F] rounded-full p-4 w-14 h-14">
            <img src={community} alt="" className="w-5"/>
       </Link>
</div>
    </section>
  );
};

export default ElectronicsPage;
