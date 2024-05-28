import React, { useState } from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backButton from '../images/back.png';
import eastImage from '../images/east.png';
import { Link, useHistory } from 'react-router-dom';
import Desktopheader from '@/components/Desktopheader';
import Desktopfooter from '@/components/Desktopfooter';

function Otpverify() {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
    const [isValid, setIsValid] = useState(false);
    const history = useHistory();

    const handleChange = (index, value) => {
        const newValue = value.replace(/[^0-9]/g, '');

        if (newValue.length <= 1) {
            const updatedVerificationCode = [...verificationCode];
            updatedVerificationCode[index] = newValue;
            setVerificationCode(updatedVerificationCode);

            if (newValue.length === 1 && index < 3) {
                document.getElementById(`digit${index + 2}`).focus();
            }

            validateForm(updatedVerificationCode);
        }
    };

    const validateForm = (codeArray) => {
        const isFormValid = codeArray.every((digit) => digit !== '');
        setIsValid(isFormValid);
    };

    const handleContinue = (e) => {
        e.preventDefault();
        if (isValid) {
            history.push('/storeemail');
        } else {
            alert("Please fill in all the fields.");
        }
    };

    return (
        <>
            <div className='forscroll'>
                <section className="lg:hidden">
                    <div className="w-full h-[12vh] flex p-[20px] justify-between sticky z-50 mb-[9vh]">
                        <div className="flex justify-center items-center gap-2">
                            <img src={tnnentLogo} alt="tnnent-logo" className="w-10" />
                        </div>
                        <a href="./registration.html">
                            <div className="flex justify-center items-center gap-4">
                                <img className="w-12" src={backButton} alt="back button" />
                            </div>
                        </a>
                    </div>

                    <div className="ml-7 mb-[5vh]">
                        <p className="font-extrabold text-[7vw]">Verification</p>
                        <p className="text-[#636363] text-[4vw]">Enter it in the verification code box and click continue</p>
                    </div>

                    <div className="border border-[#848484] bg-[#E1E1E1] rounded-xl border-dotted h-48 mt-10 m-8 flex items-center justify-center">
                        <div className="max-w-sm mx-auto">
                            <div className="flex space-x-2">
                                {verificationCode.map((value, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        id={`digit${index + 1}`}
                                        name={`digit${index + 1}`}
                                        maxLength="1"
                                        className="bg-[#E1E1E1] w-10 py-2 px-1 border-b-2 border-[#636363] focus:outline-none focus:border-red-500 text-[5vw]"
                                        value={value}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-12 h-12 bg-[#094446] rounded-full mt-3 mx-auto flex items-center">
                        <button onClick={handleContinue}>
                            <img src={eastImage} alt="continue button" className="w-6 ml-3" />
                        </button>
                    </div>
                </section>

                <section className='hidden lg:block'>
                    <Desktopheader />
                    <div className='mt-24'>
                        <div className="text-center border p-10 w-[850px] h-[500px] mt-5 rounded-2xl gap-28 text-[16px] mx-auto" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>
                            <h2 className="font-extrabold text-2xl mt-14">
                                Verification
                            </h2>

                            <p className="text-sm text-[#636363] mt-3">Enter it in the verification code box and click continue</p>

                            <div className="border border-[#848484] mx-auto w-96 rounded-xl border-dotted h-40 mt-10 m-8 flex items-center justify-center">
                                <div className="max-w-sm mx-auto">
                                    <div className="flex space-x-2">
                                        {verificationCode.map((value, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                id={`digit${index + 1}`}
                                                name={`digit${index + 1}`}
                                                maxLength="1"
                                                className="w-10 py-2 px-3 border-b-2 border-[#636363] focus:outline-none focus:border-red-500"
                                                value={value}
                                                onChange={(e) => handleChange(index, e.target.value)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button onClick={handleContinue} className="p-2 w-72 mt-5 mx-auto rounded-full py-4 bg-[#094446] text-lg text-center block">
                                <div>
                                    <p className="text-white">Continue</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <Desktopfooter />
                </section>
            </div>
        </>
    );
}

export default Otpverify;
