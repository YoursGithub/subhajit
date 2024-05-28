import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import './Auth.css';
import 'react-datepicker/dist/react-datepicker.css';
import dateIcon from '../images/AUTHENTICATION LOGOS AND ICONS/DTE.png'; 
import aadharIcon from '../images/AUTHENTICATION LOGOS AND ICONS/ID PROOF.png';
import tickIcon from '../images/AUTHENTICATION LOGOS AND ICONS/INTEREST TICK.png';
import welcomeLogo from '../images/LOADING PAGE/WELCOME PAGE LOGO BLACK.png';
import backOptionIcon from '../images/images3/back.png';
import defaultImage from '../images/AUTHENTICATION LOGOS AND ICONS/IMAGE.png';
import eastIcon from '../images/AUTHENTICATION LOGOS AND ICONS/east.png';

function Passport() {

    const [imagePreview, setImagePreview] = useState(defaultImage);

    const [doi, setDoi] = useState(null);
    const [doe, setDoe] = useState(null); 

    const handleDoiChange = (date) => {
        setDoi(date);
    };

    const handleDoeChange = (date) => {
        setDoe(date);
    };
    const [isAadharComplete, setIsAadharComplete] = useState(false);
    
    const [aadharInput, setAadharInput] = useState('');


    useEffect(() => {
        
    }, [aadharInput,imagePreview]);

    function expandLabel(labelId) {
        document.getElementById(labelId).classList.add('expanded');
    }

    function collapseLabel(labelId) {
        const input = document.getElementById(labelId);
        if (input.value === '') {
            input.classList.remove('expanded');
        }
    }

    function redirectToUploadDoc() {
        sessionStorage.setItem('hasClickedContinue', 'true');
        window.location.href = "uploadDoc.html";
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

   

    function handleAadhar1Input(event) {
        let input = event.target.value.replace(/[^\d]/g, '');
        if (input.length > 12) {
            input = input.slice(0, 12);
        }
        let formattedAadhar = '';
        for (let i = 0; i < input.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedAadhar += '-';
            }
            formattedAadhar += input[i];
        }
        setAadharInput(formattedAadhar);

        const tickIconElement = document.getElementById("tickIcon");
        if (input.length === 14) {
            tickIconElement.style.display = "block";
        } else {
            tickIconElement.style.display = "none";
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
   
  return (
    <>
     <nav className="sticky z-50">
                <div className="mx-3 md:mx-10 flex">
                    <div>
                        <a href="index.html" className="flex items-center text-white">
                            <img src={welcomeLogo} alt="Your Logo" className="mt-5 w-24 md:w-[120px]" />
                        </a>
                    </div>
                    <div className="ml-auto mt-[18px] md:mt-5 pr-3 sm:pr-2">
                        <img src={backOptionIcon} alt="" className="w-9" />
                    </div>
                </div>
            </nav>
            <section class="lg:hidden">
        <div class="ml-6 mt-28 pr-10">
            <h2 class="font-extrabold text-2xl">Upload your documents.</h2>
            <p class="text-[#636363] mt-3">Submit your passport details below</p>
        </div>
        <div className="pr-10 md:pr-10 mt-14">
            <div className="flex">
                <div className="mb-4 ml-6 pr-6 relative">
                    <DatePicker
                   id='doi'
                   selected={doi}
                   onKeyDown={(e) => e.preventDefault()} 
                   onChange={handleDoiChange}
                   placeholderText="DD-MM-YYYY"
                   dateFormat="dd-MM-yyyy"
                        className="w-full px-3 py-4 border border-dotted rounded-lg focus:outline-none border-[#848484] font-extrabold text-[#545454] pr-12"
                    />
                    <img src={dateIcon} className="absolute right-9 top-5 h-6 w-6" alt="icon" onClick={() => document.getElementById('doi').focus()} />
                </div>

                <div className="mb-4 ml-6 relative">
                    <DatePicker
                   id='doe'
                   selected={doe}
                   onKeyDown={(e) => e.preventDefault()} 
                   onChange={handleDoeChange}
                   placeholderText="DD-MM-YYYY"
                   dateFormat="dd-MM-yyyy"
                        className="w-full px-3 py-4 border border-dotted rounded-lg focus:outline-none border-[#848484] font-extrabold text-[#545454] pr-12"
                    />
                    <img src={dateIcon} className="absolute right-3 top-5 h-6 w-6" alt="icon" onClick={() => document.getElementById('doe').focus()} />
                </div>
            </div>
            <div className="mb-4 ml-6 relative">
                    <label htmlFor="passport" className="block mb-1 font-extrabold text-[#545454]">Passport Number:</label>
                    <input id="aadhar" type="text" placeholder="Enter your passport Number:" className="w-full px-3 py-4 border border-dotted rounded-lg focus:outline-none border-[#848484] font-extrabold text-[#545454] pr-12" onFocus={() => expandLabel('aadharLabel')} onBlur={() => collapseLabel('aadharLabel')} value={aadharInput} onChange={handleAadharInput} />
                    <img src={aadharIcon} className="absolute right-4 top-11 h-6 w-7" alt="icon" />
                </div>
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

        </div>
        <div className="justify-center flex">
               
                <div className="flex justify-center mt-10 mx-auto" id="button2">
                    <button className="bg-[#094446] px-6 py-3 text-white rounded-xl text-center text-xl font-bold">Continue</button>
                </div>
            </div>
        
        </section>
    </>
  )
}

export default Passport
