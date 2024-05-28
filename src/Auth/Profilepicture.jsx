import React, { useState } from 'react';
import welcomeLogo from '../images/LOADING PAGE/WELCOME PAGE LOGO BLACK.png';
import backOptionIcon from '../images/images3/back.png';

function AddProfilePicture() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    return (
        <div>
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

            <section>
                <div className="text-center mt-52">
                    <h2 className="text-2xl font-extrabold">Add profile picture</h2>
                    <p className="text-[#636363] m-2">Add a profile photo so that your friends know it's you</p>
                    <div className="max-w-sm mx-auto">
                        <input type="file" id="imageUpload" className="hidden" onChange={handleFileChange} />
                        <button onClick={() => document.getElementById('imageUpload').click()} className="bg-[#094446] px-6 py-4 text-white mt-7 m-20 rounded-xl text-center text-xl font-bold">Add a Picture</button>
                    </div>
                    <a href="name.html" className="mt-[-60px] text-[#094446] font-extrabold">Skip</a>
                </div>

                <div className="footer bottom-0 mt-20 hidden lg:block left-0 right-0 md:relative md:flex ml-10 2xl:mt-44 text-[12px] form-container">
                    <p className="font-gotham-black font-medium text-[#272822]">© 2024 Tnennt All rights reserved.</p>
                </div>
            </section>
        </div>
    );
}

export default AddProfilePicture;
