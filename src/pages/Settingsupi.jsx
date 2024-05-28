import React, { useState } from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backButton from '../images/back.png';
import frame398 from '../images/Frame 398.png';

function Settingsupi() {
    const [username, setUsername] = useState('');
    const [upiId, setUpiId] = useState('');
    const [invalidUpi, setInvalidUpi] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleUpiIdChange = (e) => {
        setUpiId(e.target.value);
    };

    const handleContinueClick = () => {
        
        if (upiId === '') {
            setInvalidUpi(true);
        } else {
            
        }
    };

    return (
        <>
        <div className='forscroll'>
        <section className="md:hidden">
        <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-6">
                <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">SETTINGS</h2>
                <div className="rounded-full bg-green-500 w-[1vh] h-[1vh]  mt-1"></div>
            </div>
            <p className="font-bold opacity-50 text-[3vw]">Store Settings</p>
        </div>
        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                </div>

            <div className="mx-5 mt-[50%]">
                <p className="font-extrabold text-[7vw]">Enter Your UPI Details</p>
                <p className="text-[#636363] text-[4vw]">You will receive your store payment directly to your UPI account</p>
            </div>

            <div className="mx-5 my-3 px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh]">
                <p className="text-[#094446] text-[3vw] font-extrabold">Username</p>
                <input type="text" value={username} onChange={handleUsernameChange} className="text-[#636363] text-[3vw] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#fff]" />
            </div>

            <div className="mx-5 my- px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh]">
                <p className="text-[#094446] text-[3vw] font-extrabold">UPI ID</p>
                <input type="email" value={upiId} onChange={handleUpiIdChange} className="text-[#636363] text-[3vw] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#fff]" />
            </div>

            {invalidUpi && (
                <div className="mx-6 my-5 flex items-center">
                    <img src={frame398} alt="" className="w-[4vw] h-[4vw] mr-1" />
                    <p className="text-[3vw] text-[#636363]">There's a problem with your verification. Try again</p>
                </div>
            )}

            <div className="parent flex justify-center items-center h-[350px] relative">
                <div className="absolute bottom-[10px]">
                    <button onClick={handleContinueClick} className="px-[9vh] py-3 bg-[#094446] font-extrabold text-white border rounded-[15px]">
                        CONTINUE
                    </button>
                </div>
            </div>
        </section>
        </div>
        </>
    );
}

export default Settingsupi;
