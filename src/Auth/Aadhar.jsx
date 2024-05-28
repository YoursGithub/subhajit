import React, { useState, useEffect } from 'react';
import Slideshow from '../components/Slideshow.jsx';
import DatePicker from 'react-datepicker';
import './Auth.css';
import 'react-datepicker/dist/react-datepicker.css';
import dobIcon from '../images/AUTHENTICATION LOGOS AND ICONS/DTE.png';
import aadharIcon from '../images/AUTHENTICATION LOGOS AND ICONS/ID PROOF.png';
import tickIcon from '../images/AUTHENTICATION LOGOS AND ICONS/INTEREST TICK.png';
import defaultImage from '../images/AUTHENTICATION LOGOS AND ICONS/IMAGE.png';
import { Link } from 'react-router-dom';
import logoBlack from '../images/LOADING PAGE/WELCOME PAGE LOGO BLACK.png';
import backIcon from '../images/images3/back.png';

function UploadDocuments() {
    const [doi, setDoi] = useState(null);
    const [isAadharComplete, setIsAadharComplete] = useState(false);
    const [aadharInput, setAadharInput] = useState('');
    const [imagePreview, setImagePreview] = useState(defaultImage);
    const [imagePreview1, setimagePreview1] = useState(defaultImage);



    function expandLabel(labelId) {
        document.getElementById(labelId).classList.add('expanded');
    }

    function collapseLabel(labelId) {
        const input = document.getElementById(labelId);
        if (input.value === '') {
            input.classList.remove('expanded');
        }
    }

    function handleAadharInput(event) {
        const aadhar = event.target.value.replace(/\D/g, '');
        const aadharFormatted = aadhar.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3');
        setAadharInput(aadharFormatted.substring(0, 14));

        if (aadhar.length === 12) {
            setIsAadharComplete(true);
        } else {
            setIsAadharComplete(false);
        }
    }

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    function handleImageUpload1(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setimagePreview1(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    function handleButtonClick() {
        redirectToUploadDoc();
    }

 

    function redirectToUploadDoc() {
        sessionStorage.setItem('hasClickedContinue', 'true');
        window.location.href = "uploadDoc.html";
    }
    function redirectToUploadDoc1() {
        sessionStorage.setItem('hasClickedContinue', 'true');
        window.location.href = "uploadDoc.html";
    }

    return (
        <>
        <nav className="sticky z-50">
            <div className="mx-3 md:mx-10 flex">
                <div>
                    <Link to="/" className="flex items-center text-white">
                        <img src={logoBlack} alt="Your Logo" className="mt-5 w-24 md:w-[120px]" />
                    </Link>
                </div>
                <div className="ml-auto mt-[18px] md:mt-5 pr-3 sm:pr-2">
                    <img src={backIcon} alt="" className="w-9" />
                </div>
            </div>
        </nav>
        <section className="lg:hidden">
            {/* Mobile view */}
            {/* Date of Birth */}
            <div className="ml-6 mt-28 pr-10">
                <h2 className="font-extrabold text-2xl">Upload your documents.</h2>
                <p className="text-[#636363] mt-3">Submit your aadhaar card details below</p>
            </div>
            <div className="pr-10 md:pr-10 mt-6">
                <div className="mb-4 ml-6 relative">
                    <label htmlFor="doi" className="block mb-1 font-extrabold text-[#545454]">Date of Birth:</label>
                    <DatePicker
                        id='doi'
                        selected={doi}
                        onKeyDown={(e) => e.preventDefault()} 
                        onChange={setDoi}
                        placeholderText="DD-MM-YYYY"
                        dateFormat="dd-MM-yyyy" type="text" placeholder="DD-MM-YYYY" className="w-full px-3 py-4 border border-dotted rounded-lg focus:outline-none border-[#848484] font-extrabold text-[#545454z] pr-12"/>
                    <img src={dobIcon} className="absolute right-20 top-11 h-6 w-6" alt="icon"  onClick={() => document.getElementById('doi').focus()}/>
                </div>
                {/* Aadhar Number */}
                <div className="mb-4 ml-6 relative">
                    <label htmlFor="aadhar" className="block mb-1 font-extrabold text-[#545454]">ID Proof (Aadhar Number):</label>
                    <input id="aadhar" type="text" placeholder="Enter 12 digit Aadhar Number" className="w-full px-3 py-4 border border-dotted rounded-lg focus:outline-none border-[#848484] font-extrabold text-[#545454] pr-12" onFocus={() => expandLabel('aadharLabel')} onBlur={() => collapseLabel('aadharLabel')} value={aadharInput} onChange={handleAadharInput} />
                    <img src={aadharIcon} className="absolute right-4 top-11 h-6 w-7" alt="icon" />
                    <img src={tickIcon} className="absolute right-12 top-11 h-6 w-6" alt="icon" style={{ display: isAadharComplete ? 'block' : 'none' }} id="tickIcon" />
                </div>
            </div>
            {/* Add Aadhar Image */}
            <div>
                <p className="text-[#545454] font-extrabold ml-6 mt-5">Add aadhaar image</p>
            </div>
            <div className="flex">
                <div className="border border-dotted p-4 ml-6 mt-3 border-[#848484] rounded-xl">
                    <label htmlFor="imageUpload" className="cursor-pointer">
                        <img id="imagePreview" src={imagePreview} alt="" className="w-10" />
                        <input id="imageUpload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </label>
                </div>
                <div className="mt-7 pr-3 text-xs ml-2">
                    <p className="text-[#636363]">(Add an image of your aadhaar so that we could verify it's you)</p>
                </div>
            </div>
            {/* Continue Button */}
            <div className="justify-center flex">
                <div className="flex justify-center mt-10 mb-3 mx-auto" id="button1">
                    <button className="bg-[#094446]  px-6 py-3 text-white rounded-lg text-center text-xl font-bold" onClick={handleButtonClick}>Continue</button>
                </div>
            </div>
        </section>
        {/* Desktop view */}
        <section className="hidden lg:block">
        <Slideshow style={{ zIndex: -1 }} />

            <div className="form-container hidden md:block mx-auto max-w-[400px] 2xl:max-w-[500px] h-[500px] 2xl:h-[570px] mt-2 rounded-xl border border-gray-300 justify-center">
                <div className="ml-6 mt-16 pr-10">
                    <h2 className="font-extrabold text-2xl">Upload your documents.</h2>
                    <p className="text-[#636363] mt-3">Submit your aadhaar card details below</p>
                </div>
                <div className="pr-10 md:pr-10 mt-6">
                    <div className="mb-4 ml-6 relative">
                        <label htmlFor="doe" className="block mb-1 font-extrabold text-[#545454]">Date of Birth:</label>
                        <DatePicker
                            id='doe'
                            selected={doi}
                            onKeyDown={(e) => e.preventDefault()} 
                            onChange={setDoi}
                            placeholderText="DD-MM-YYYY"
                            dateFormat="dd-MM-yyyy" type="text" placeholder="DD-MM-YYYY" className="w-full px-3 py-4 border border-dotted rounded-lg focus:outline-none border-[#848484] font-extrabold text-[#545454z] pr-12"/>
                        <img src={dobIcon} className="absolute right-44 top-11 h-6 w-6" alt="icon"  onClick={() => document.getElementById('doe').focus()} />
                    </div>
                    <div className="mb-4 ml-6 relative">
                        <label htmlFor="aadhar1" className="block mb-1 font-extrabold text-[#545454]">ID Proof (Aadhar Number):</label>
                        <input id="aadhar1" type="text" placeholder="Enter 12 digit Aadhar Number" className="w-full px-3 py-4 border border-dotted rounded-lg focus:outline-none border-[#848484] font-extrabold text-[#545454] pr-12" onFocus={() => expandLabel('aadharLabel')} onBlur={() => collapseLabel('aadharLabel')} value={aadharInput} onChange={handleAadharInput}  />
                        <img src={aadharIcon} className="absolute right-4 top-11 h-6 w-7" alt="icon" />
                        <img src={tickIcon} className="absolute right-12 top-11 h-6 w-6" alt="icon" style={{ display: isAadharComplete ? 'block' : 'none' }} id="tickIcon" />
                    </div>
                </div>
                <div>
                    <p className="text-[#545454] font-extrabold ml-6 mt-5">Add aadhaar image</p>
                </div>
                <div className="flex gello" >
                    <div className="border border-dotted p-4 ml-6 mt-3 border-[#848484] rounded-xl">
                        <label  htmlFor="imageUpload1" className="cursor-pointer ">
                            <img id="imagePreview1" src={imagePreview1} alt="" className="w-10" />
                            <input id="imageUpload1" type="file" accept="image/*" className="hidden" onChange={handleImageUpload1} />
                        </label>
                    </div>
                    <div className="mt-7 pr-3 text-xs ml-2">
                        <p className="text-[#636363]">(Add an image of your aadhaar so that we could verify it's you)</p>
                    </div>
                </div>
                {/* Continue Button */}
                <div className="justify-center flex">
                    <div className="flex justify-center mt-3 mx-auto" id="button2">
                        <button className="z-[999] bg-[#094446] px-6 py-3 text-white rounded-xl text-center text-xl font-bold" onClick={redirectToUploadDoc1}>Continue</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default UploadDocuments;
