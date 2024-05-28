import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import person from '../images/person.svg'
import tnenntIcon from '../images/tnennt icon.png';
import frame380 from '../images/Frame 380.png';
import frame401 from '../images/Frame 401.png';
import frame292 from '../images/Frame 292.png';
import Navbar from '../components/Navbar';

function Gallerymiddle() {
    const [Toggled, setToggled] = useState(false)

    return (
        <>
        <div className='forscroll'>
            <section className="lg:hidden bg-[#f1f0ec] w-full h-screen">
                <div className="flex p-[20px] justify-between">
                    <div className="flex justify-center items-center gap-2">
                        <h2 className="text-[5.7vw] font-bold">GALLERY</h2>
                        <div className="bg-[#00FF44] h-[1vh] w-[1vh] rounded-full"></div>
                    </div>
                    <button className="bg-black p-4 py-3 rounded-lg text-white text-[3.7vw]">Contact Us</button>
                </div>
                <h3 className="font-bold text-[5vw] mt-5 ml-4">Middlemen</h3>
                <div className="flex justify-center">
                    <div className="w-[93vw] rounded-xl mt-4 bg-[#2D332F] py-5 px-3 items-center relative">
                        <div className="flex gap-3 items-center">
                            <div className="rounded-full w-[9vh] h-[9vh] bg-green-200"></div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-white font-bold text-[7vw]">Barnik Deb</h2>
                                    <div className="rounded-full w-[0.8vh] h-[0.8vh] bg-green-500 mt-2"></div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <img className="w-[1.3vh]" src={person} alt="" />
                                    <p className="text-white opacity-50 text-[3vw]">900089760068900088</p>
                                </div>
                            </div>
                        </div>
                        <div
        className={`toggle w-[15vw] h-[8vw] bg-transparent border-2 border-white rounded-[30px] flex items-center px-1 mr-2 ml-[77%] absolute mt-[-7%] ${
          Toggled ? "Toggled" : ""
        }`}
        onClick={() => setToggled(!Toggled)}
      >
        <div
          className="toggle-btn rounded-full w-[5vw] h-[5vw] bg-red-500 ease-in duration-300"
        />
        </div>
                    </div>
                </div>
                <hr className="mt-8 ml-2" />
                <div className="flex justify-center mt-5 px-5">
                    <img src={frame401} alt="" />
                </div>
                <div className="flex justify-center mt-5 px-4 relative">
                    <img src={frame292} alt="" />
                    <h3 className="absolute text-white font-bold text-[4.3vw] mt-[39%] mr-[68%]">9,877<span><p className="text-white text-[3vw] absolute mt-[-53%] ml-[104%]">+</p></span></h3>
                </div>
                <div className="flex justify-center">
                    <div className="bg-[#F3F3F3] w-[93vw] mt-6 rounded-3xl shadow-xl p-4">
                        <div className="bg-white p-2 w-[84vw] mt-1 rounded-3xl">
                            <img className="w-[29vw] px-2 py-2" src={tnenntIcon} alt="" />
                            <div className="flex justify-between">
                                <h2 className="font-bold text-[#094446] text-[6vw] ml-[11px] mt-2">THE<br />MIDDLEMAN</h2>
                                <img className="w-[40vw] mt-[-50px]" src={frame380} alt="" />
                            </div>
                        </div>
                        <div className="px-3 py-2 flex justify-between mt-2">
                            <h2 className="font-bold text-[4vw] leading-1">THE MIDDLEMAN<br />GROUP!</h2>
                            <Link href="gallery_ins.html"><button className="bg-transparent border-2 border-[#094446] px-6 py-2 mt-1 rounded-full text-[#094446] text-[3vw] font-bold">View List</button></Link>
                        </div>
                        <p className="px-3 py-2 text-[2.8vw] mt-2">Get a chance to work as a certified middlemen and let's grow together!</p>
                    </div>
                </div>
                <div className="flex left-0 right-0 justify-center items-center mt-6">
                    <p>------------<button className="bg-black px-4 py-3 rounded-lg text-white text-[3vw] mb-32">COMING SOON</button>------------</p>
                </div>
                <Navbar color="#2D332F" color2= "#2D332F" color3= "white" color4= "#2D332F"/>
            </section>
            </div>
            </>
    );
}

export default Gallerymiddle;
