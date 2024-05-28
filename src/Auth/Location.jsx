import React from 'react';
import Slideshow from '../components/Slideshow.jsx';
import { useState } from 'react';
import './Auth.css';
import welcomeLogoBlack from '../images/LOADING PAGE/WELCOME PAGE LOGO BLACK.png'; // Import welcome logo black
import backOptionIcon from '../images/images3/back.png'; // Import back option icon
import earthIcon from '../images/AUTHENTICATION LOGOS AND ICONS/EARTH.png';


function LocationPage() {
    const [location, setLocation] = useState(''); // State to store location input

    // Function to handle location input change
    function handleLocationChange(event) {
        setLocation(event.target.value);
    }

    // Function to ask for user's location
    function askForLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    // Redirect to uploadDoc page with latitude and longitude as query parameters
                    window.location.href = `uploadDoc.html?lat=${latitude}&long=${longitude}`;
                },
                function (error) {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }
    // Function to expand label
function moveLabel(labelId) {
    const label = document.getElementById(labelId);
    const input = document.getElementById(labelId.replace("Label", ""));
    if (input.value === "") {
        label.classList.add("text-xs", "top-[0]");
    }
}

// Function to collapse label
function collapseLabel(labelId) {
    const label = document.getElementById(labelId);
    const input = document.getElementById(labelId.replace("Label", ""));
    if (input.value === "") {
        label.classList.remove("text-xs", "top-1");
    }
}

    return (
        <div className="location-page">
        {/* Navigation */}
        <nav className="sticky z-50">
            <div className="mx-3 md:mx-10 flex">
                <div>
                    <a href="index.html" className="flex items-center text-white">
                        <img src={welcomeLogoBlack} alt="Your Logo" className="mt-5 w-24 md:w-[120px]" />
                    </a>
                </div>
                <div className="ml-auto mt-[18px] md:mt-5 pr-3 sm:pr-2">
                    <img src={backOptionIcon} alt="" className="w-9" />
                </div>
            </div>
        </nav>

        {/* Location Input Section */}
        <section className="lg:hidden">
            <div className="ml-10 mt-40">
                <h2 className="text-2xl font-extrabold">Where are you located?</h2>
                <p className="text-[#636363]">Search for area, street name...</p>
            </div>

            <div className="pr-20 md:pr-10">
                <div className="container mx-10 md:mx-10 mt-10 flex flex-col space-y-4">
                    <div>
                        <div className="input-with-icon">
                            <img src={earthIcon} alt="" />
                            <input
                                type="Location"
                                id="Location"
                                name="Location"
                                className="border w-full p-2 py-4 border-dotted border-[#848484] rounded-xl pl-10 focus:outline-none"
                                placeholder="Enter your location"
                                value={location}
                                onChange={handleLocationChange}
                                onFocus={askForLocation}
                                onBlur={() => collapseLabel('LocationLabel')}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <button className="bg-[#094446] px-6 py-3 text-white rounded-xl text-center text-xl font-bold">Continue</button>
            </div>
        </section>

        {/* Slideshow Section */}
        <section className="hidden lg:block">
         <Slideshow/>
            <section>
            <div className="form-container hidden md:block mx-auto max-w-[400px] 2xl:max-w-[500px] h-[500px] 2xl:h-[570px] mt-2 rounded-xl border border-gray-300 justify-center bg-white">
                <div className="pr-[85px] md:pr-10 z-50">
                    <div className="ml-10 mt-40">
                        <h2 className="text-2xl font-extrabold">Where are you located?</h2>
                        <p className="text-[#636363]">Search for area, street name...</p>
                    </div>
                    <div className="pr-20 md:pr-10">
                        <div className="container mx-10 md:mx-10 mt-10 flex flex-col space-y-4">
                            <div>
                                <div className="input-with-icon">
                                    <img src={earthIcon} alt="" />
                                    <input
                                        type="Location"
                                        id="Location"
                                        name="Location"
                                        className="border w-full p-2 py-4 border-dotted border-[#848484] rounded-xl pl-10 focus:outline-none"
                                        placeholder="Enter your location"
                                        value={location}
                                        onChange={handleLocationChange}
                                        onFocus={askForLocation}
                                        onBlur={() => collapseLabel('LocationLabel')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10 absolute ml-32 2xl:ml-44">
                        <a href="uploadDoc.html">
                            <button className="bg-[#094446] px-6 py-3 text-white rounded-xl text-center text-xl font-bold">Continue</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer bottom-0 mt-10 left-0 right-0 md:relative md:flex ml-10 2xl:mt-28 text-[12px] form-container">
                <p className="font-gotham-black font-medium text-[#272822]">© 2024 Tnennt All rights reserved.</p>
            </div>
        </section>
        </section>

    </div>
    );
}

export default LocationPage;


