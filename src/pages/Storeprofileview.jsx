import React from 'react';
import './style.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import vectorImage from '../images/Vector (5).svg';
import iosShareImage from '../images/ios_share.svg';
import flag from '../images/Vector (2).png';
import camera from '../images/Rectangle 2267.svg';

function Storeprofileview() {
  return (
    <>
    <div className='forscroll'>
    <section className="lg:hidden">
        <div className="flex justify-center">
            <div className="w-[93vw] rounded-3xl  mt-4 bg-[#2D332F] relative">
                <div className="flex gap-4 ml-4 items-center">
                    <div className="rounded-xl w-[11vh] h-[11vh] bg-green-200 mt-6"></div>
                    <div className="flex flex-col">
                      <div className="absolute flex justify-center items-center text-[#DEFF98] border-[#DEFF98] border-2 px-4 py-1 rounded-2xl  mt-8">
                        <h3 className="text-[3vw]">Clothing</h3>
                      </div>
                      <div className="flex items-center gap-3 mt-16">
                        <h2 className="text-white font-bold text-[7vw]">Jain Brothers</h2>
                        <div className="rounded-full bg-green-500 w-[1vh] h-[1vh]  mt-1"></div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img className="w-[1.3vh]" src={vectorImage} alt=""/>
                        <p className="text-white opacity-50 text-[3vw]">jainbrothers.tnennt.store</p>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-between items-center mb-2">
            <div className="flex gap-3 items-center">
                <img
            className="w-[4vw] mt-12 ml-4 mb-4"
            src={iosShareImage}
            alt=""
          />
          <button
          className="bg-[#67676733] px-5 py-2 mt-9 rounded-full text-white text-[2.7vw] font-bold"
        >
          Assam-Karimganj
        </button>
            </div>
            <div className="flex flex-end gap-3 mt-4 customer">
                <div className="rounded-lg border-[1px] w-[21vw] h-[14vw] mr-5 flex flex-col justify-center items-center">
                    <h2 className="font-bold text-white text-[5vw] leading-1">17</h2>
                    <p className="font-bold text-[#B6B6B6] text-[2.5vw] mt-[-2%]">CUSTOMERS</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className="flex justify-center w-full items-center">
            <div
              className="bg-transparent border-2 border-[#A7A7A7] mt-4 p-2  w-[96vw] rounded-3xl"
            >
              <div className="flex px-1 py-2 gap-2 justify-center items-center">
                <div className="bg-[#DDF1EF] w-[67%]  rounded-lg p-2">
                    <div className="flex justify-between items-center">
                        <div>
                        <div className="flex gap-3 items-center">
                            <h2 className="font-bold text-[3vw]">STORE</h2>
                            <div className="bg-yellow-400 h-[0.6vh] w-[0.6vh] rounded-full"></div>
                           </div>
                            <h2 className="font-bold text-[3vw] leading-1">ENGAGEMENT</h2>
                        </div>
                        <div className="rounded-full w-[7vw] h-[7vw] border-[1px] border-[#CECECE] bg-white  flex justify-center items-center">
                            <img className="w-[3vw]" src={flag} alt=""/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                    <button className="flex justify-between px-2 py-2 items-center gap-2 bg-[#094446] rounded-lg">
                        <h3 className="font-bold text-[2.1vw] text-white">CONNECT</h3>
                        <svg width="8" height="8" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8828 1.71387L10.8828 19.2853" stroke="white" stroke-width="3" stroke-linecap="round"/>
                            <path d="M19.2852 10.1182L1.71373 10.1182" stroke="white" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                    </button>
                    <div className="flex flex-col">
                        <h2 className="font-bold text-[3.2vw] self-end">137</h2>
                        <h3 className="text-[2.3vw] opacity-50 font-bold mt-[-2.7%]">CONNECTIONS</h3>
                    </div>
                </div>
                </div>
              
                <div className="bg-[#EFEFEF] w-[33%]  rounded-lg p-2">
                    <div className="flex gap-1 items-center">
                        <h2 className="font-bold text-[2.5vw]">STORE</h2>
                        <div className="bg-yellow-400 h-[0.6vh] w-[0.6vh] rounded-full"></div>
                       </div>
                        <h2 className="font-bold text-[2.5vw] leading-1">COMMUNITY<br/>POST</h2>
                        <div className="flex justify-between mt-[4px] items-center">
                        <div className=" flex flex-col">
                            <h2 className="font-bold text-[3.2vw]">17</h2>
                            <h3 className="text-[2.3vw] opacity-50 font-bold ">POSTS</h3>
                        </div>
                        <div className="bg-[#7E7E7E] h-[3vh] w-[3vh] rounded-lg flex justify-center items-center p-2">
                            <svg width="12" height="12" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.91914" y1="1.53789" x2="10.5895" y2="10.2082" stroke="#DEFF98" stroke-width="2.59973"/>
                                <line x1="1.52617" y1="17.4266" x2="8.87943" y2="10.0733" stroke="#DEFF98" stroke-width="2.59973"/>
                                </svg>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            </div>
            <h2 className="font-bold text-[5vw] ml-5 mt-3">Highlights</h2>
        <div className="flex justify-center">
        <div className="w-[95vw] h-[40vw] mt-5 flex gap-2 ml-5 mr-3">
        <Swiper
      spaceBetween={10}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide><div className="border-[1px] border-[#B5B5B5] h-[30vw] w-[34vw] rounded-xl flex justify-center items-center swiper-slide">
        </div></SwiperSlide>
        <SwiperSlide><div className="border-[1px] border-[#B5B5B5] h-[30vw] w-[34vw] rounded-xl flex justify-center items-center swiper-slide">
        </div></SwiperSlide>
        <SwiperSlide><div className="border-[1px] border-[#B5B5B5] h-[30vw] w-[34vw] rounded-xl flex justify-center items-center swiper-slide">
        </div></SwiperSlide>
        <SwiperSlide><div className="border-[1px] border-[#B5B5B5] h-[30vw] w-[34vw] rounded-xl flex justify-center items-center swiper-slide">
        </div></SwiperSlide>
    </Swiper>
    </div>
        </div>
        <div className="flex flex-start px-5 items-center">
            <h2 className="font-bold text-[5vw]">Featured</h2>
            
        </div>
        <div className="flex justify-center px-2 mt-7 mb-12">
        <Swiper
      spaceBetween={10}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
        <div className=" bg-[#F5F5F5] w-[37vw] h-[52vw] flex flex-col rounded-lg ">
                    <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative"
                      style={{ backgroundImage: `url(${camera})` }}>
                      <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2  flex justify-center items-center">
                        <div className="heart-container " title="Like">
                          <input type="checkbox" className="checkbox w-[1vw]" id="Give-It-An-Id"/>
                          <div className="svg-container">
                            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                              </path>
                            </svg>
                            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                              </path>
                            </svg>
                            
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
                      
                    </div>
                    <div className="flex flex-col gap-4 ml-2">
                      <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
                      <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" bg-[#F5F5F5] w-[37vw] h-[52vw] flex flex-col rounded-lg ">
                    <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative"
                      style={{ backgroundImage: `url(${camera})` }}>
                      <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2  flex justify-center items-center">
                        <div className="heart-container " title="Like">
                          <input type="checkbox" className="checkbox w-[1vw]" id="Give-It-An-Id"/>
                          <div className="svg-container">
                            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                              </path>
                            </svg>
                            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                              </path>
                            </svg>
                            
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
                      
                    </div>
                    <div className="flex flex-col gap-4 ml-2">
                      <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
                      <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" bg-[#F5F5F5] w-[37vw] h-[52vw] flex flex-col rounded-lg ">
                    <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative"
                      style={{ backgroundImage: `url(${camera})` }}>
                      <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2  flex justify-center items-center">
                        <div className="heart-container " title="Like">
                          <input type="checkbox" className="checkbox w-[1vw]" id="Give-It-An-Id"/>
                          <div className="svg-container">
                            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                              </path>
                            </svg>
                            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                              </path>
                            </svg>
                            
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
                      
                    </div>
                    <div className="flex flex-col gap-4 ml-2">
                      <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
                      <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" bg-[#F5F5F5] w-[37vw] h-[52vw] flex flex-col rounded-lg ">
                    <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative"
                      style={{ backgroundImage: `url(${camera})` }}>
                      <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2  flex justify-center items-center">
                        <div className="heart-container " title="Like">
                          <input type="checkbox" className="checkbox w-[1vw]" id="Give-It-An-Id"/>
                          <div className="svg-container">
                            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                              </path>
                            </svg>
                            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                              </path>
                            </svg>
                            
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
                      
                    </div>
                    <div className="flex flex-col gap-4 ml-2">
                      <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
                      <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
                    </div>
                  </div>
        </SwiperSlide>
    </Swiper>
        </div>
        </section>
        </div>
    </>
  )
}

export default Storeprofileview;
