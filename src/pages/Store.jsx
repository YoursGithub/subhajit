
import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.css';
import './script.js';
import 'swiper/css/autoplay';
import image1 from '../images/image 1.png';
import image4 from '../images/image 4.svg';
import frame380 from '../images/Frame 380.png';
import frame396 from '../images/Frame 396.png';
import frame401 from '../images/Frame 401.png';
import frame292 from '../images/Frame 292.png';
import notificationIcon from '../images/notfication00.png';
import vector5 from '../images/Vector (5).svg';
import designImage from '../images/design.png';
import camera from '../images/Rectangle 2267.svg';
import Rectangle2484Image from '../images/images2/mobile icons/Rectangle 2484.svg';
import Rectangle2485Image from '../images/images2/mobile icons/Rectangle 2485.svg';
import Rectangle2486Image from '../images/images2/mobile icons/Rectangle 2486.svg';
import Rectangle2487Image from '../images/images2/mobile icons/Rectangle 2487.svg';
import Rectangle2488Image from '../images/images2/mobile icons/Rectangle 2488.svg';
import Rectangle1856 from '../images/Rectangle 1856.svg';
import clothing from '../images/mnz-ToLMORRb97Q-unsplash.jpg'
import accessories from '../images/apostolos-vamvouras-Pp_nVOuJMTU-unsplash.jpg'
import electronics from '../images/christopher-gower-_aXa21cf7rY-unsplash.jpg'
import books from '../images/kimberly-farmer-lUaaKCUANVI-unsplash.jpg'
import grocery from '../images/maria-lin-kim-8RaUEd8zD-U-unsplash.jpg'
import more from '../images/luca-florio-QLmBiJ9GYpU-unsplash.jpg'
import Navbar from '../components/Navbar.jsx';
import { db } from "../../firebase.js";
import { doc, setDoc, arrayUnion, getDoc } from "firebase/firestore";
import ThingCards from '@/components/ThingCards.jsx';
import store1 from '../images/damian-barczak-U9E423m3Hd8-unsplash.jpg'
import store2 from '../images/adam-kolmacka-DQiJZa3LKwY-unsplash.jpg'
import store3 from '../images/arno-senoner-MRjjcDIk3Gw-unsplash.jpg'
import store4 from '../images/declan-sun-MGYc7EH61NA-unsplash.jpg'
import update1 from '../images/download (1).jpeg'
import update2 from '../images/Instagram.jpeg'
import update3 from '../images/Instagram story __ morning routine.jpeg'
import update4 from '../images/Markett.jpeg'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import { Link } from 'react-router-dom';
import profilepic from '../images/Subhajit.jpg'

function Store() {
  useEffect(() => {
    const scrollPosition = window.scrollY;
    sessionStorage.setItem('scrollPosition', scrollPosition);
  }, []);

  const [todaysDate, setTodaysDate] = useState('');

  const userID = "Customer-0002";
  const storeID = "Store-9812";
  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const today = new Date();
    const dayOfWeek = days[today.getDay()];
    const dayOfMonth = today.getDate();
    const month = months[today.getMonth()];
    const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month}`;
    setTodaysDate(formattedDate);
  }, []);
  
  const [selectedCategory, setSelectedCategory] = useState('vehicles');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log("Adding Data to Users - Connect List -");
      const userDocRef = doc(db, `Users/${userID}`);
      // Check if the user already has the store ID in their ConnectList
      const userDocSnapshot = await getDoc(userDocRef);
      let connectList = [];
      if (userDocSnapshot.exists()) {
        connectList = userDocSnapshot.data().ConnectList || [];
      }
      // Append the store ID to the ConnectList
      connectList.push(storeID);
      await setDoc(userDocRef, {
        ConnectList: arrayUnion(...connectList)
      });
      console.log('--Success--');
  
      console.log("Adding Data to Store/CommunityPost -Following List -");
      const storeDocRef = doc(db, `Store/${storeID}`);
      // Check if the store already has the user ID in their FollowingList
      const storeDocSnapshot = await getDoc(storeDocRef);
      let followingList = [];
      if (storeDocSnapshot.exists()) {
        followingList = storeDocSnapshot.data().FollowingList || [];
      }
      // Append the user ID to the FollowingList
      followingList.push(userID);
      await setDoc(storeDocRef, {
        FollowingList: arrayUnion(...followingList)
      });
      console.log('--Success--');
  
    } catch (error) {
      console.log("Failed: ", error);
    }
  }

  return (
    <>
    <div className='forscroll'>
    {/* <div className='follow-btn'><button onClick={handleClick}>follow store</button></div> */}
    <section className='lg:hidden'>
      <div className="flex justify-between items-center">
        <div className="mt-6 ml-4">
          <p className="text-[3vw] text-[#727272] font-bold" id="todaysDate">{todaysDate}</p>
          <h2 className="text-[6vw] font-bold">Barnik Deb <span className="text-green-500"> &bull;</span></h2>
        </div>
        <div className="flex justify-center items-center gap-4 mt-6 mr-3">
          <Link to='/storenotification'>
          <img className="w-[21px]" src={notificationIcon} alt="" />
          </Link>
          <Link to='/userprofile'>
          <div className="bg-slate-300 h-[6vh] w-[6vh] rounded-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${profilepic})`}}>
           
          </div>
          </Link>
        </div>
      </div>

      <div className="mt-4 p-3 relative">
        
        <div className="w-12 h-12 bg-[#DDDDDD] rounded-full absolute top-5 left-5 flex items-center justify-center">
          <img src={image4} alt="" className="w-8" />
        </div>
        <input type="text" className="input-field px-6 py-4 pl-16 border-2  border-[#DDDDDD] rounded-full w-full text-lg focus:outline-none" placeholder="Search Products & Store" />
      </div>

      <div className="flex justify-center relative">
        <div className="relative">
          <img className="w-[93vw] mt-3 mb-5" src={frame396} alt="" />

          <h2 className="absolute bottom-2 left-0 text-white ml-6 mb-4 font-bold leading-[1.2] text-[4vw]" style={{ bottom: '57%', left: '7%' }}>Buy From Your Local Store<br />At A Discounted Price</h2>
          <h2 className="absolute bottom-2 left-0 text-white ml-6 mb-4 leading-[1.2] text-[4vw]" style={{ bottom: '29%', left: '74%' }}>Tnennt<br />Store<span className="text-red-500"> &bull;</span></h2>
          <div className="absolute bottom-9 left-5 w-[38vw]" id="carousel" data-auto="true">
          <Swiper
          className="mySwiper "
          slidesPerView={'3'}
          effect={'coverflow'}
          grabCursor={false}
          centeredSlides={true}
          autoplay={{ delay:1000 }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          
          modules={[EffectCoverflow, Pagination, Autoplay]}
          loop={true}
        >
          <SwiperSlide>
        
              <div className="h-[14vw] w-[14vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${store1})` }}></div>
       
          
          </SwiperSlide>
          <SwiperSlide>
        
        <div className="h-[14vw] w-[14vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${store2})` }}></div>
 
    
    </SwiperSlide>
    <SwiperSlide>
        
        <div className="h-[14vw] w-[14vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${store3})` }}></div>
 
    
    </SwiperSlide>
    <SwiperSlide>
        
        <div className="h-[14vw] w-[14vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${store4})` }}></div>
 
    
    </SwiperSlide>
    <SwiperSlide>
        
        <div className="h-[14vw] w-[14vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${update3})` }}></div>
 
    
    </SwiperSlide>
     
        </Swiper>
          </div>
        </div>
      </div>
      <h2 className="text-[5vw] font-bold ml-4">Updates</h2>
      <div className="flex mt-4 ml-4">
        <Swiper
          className="mySwiperrr mr-2 ml-4"
          spaceBetween={10}
          slidesPerView={2.7}
          navigation
        >
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[30vw] w-[31vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${update4})` }}></div>
              <h2 className="px-[28%] text-[4vw]">Store</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[30vw] w-[31vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${update2})` }}></div>
              <h2 className="px-[28%] text-[4vw]">Store</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[30vw] w-[31vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${update3})` }}></div>
              <h2 className="px-[28%] text-[4vw]">Store</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[30vw] w-[31vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${update4})` }}></div>
              <h2 className="px-[28%] text-[4vw]">Store</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-6 ml-3 flex gap-3 flex-wrap w-[93vw]">
      <button
        className={`text-[3.4vw] focus:outline-none visited:outline-none active:outline-none category-button border border-black ${
          selectedCategory === 'vehicles' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'
        } px-4 py-2 rounded-3xl transition-colors duration-300 inline-flex items-center`}
        style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
        onClick={() => handleCategoryClick('vehicles')}
      >
        Electronics
      </button>

      <button
        className={`text-[3.4vw] focus:outline-none visited:outline-none active:outline-none category-button border border-black ${
          selectedCategory === 'housing' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'
        } px-4 rounded-3xl transition-colors duration-300 inline-flex items-center`}
        style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
        onClick={() => handleCategoryClick('housing')}
      >
        Clothings
      </button>

      {/* Repeat the same structure for the remaining buttons */}
      
      <button
        className={`text-[3.4vw] focus:outline-none visited:outline-none active:outline-none category-button border border-black ${
          selectedCategory === 'electronics' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'
        } px-4 rounded-3xl transition-colors duration-300 inline-flex items-center`}
        style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
        onClick={() => handleCategoryClick('electronics')}
      >
        Accessories
      </button>

      <button
        className={`text-[3.4vw] focus:outline-none visited:outline-none active:outline-none category-button border border-black ${
          selectedCategory === 'others' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'
        } px-4 py-2 rounded-3xl transition-colors duration-300 inline-flex items-center`}
        style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
        onClick={() => handleCategoryClick('others')}
      >
        Groceries
      </button>

      <button
        className={`text-[3.4vw] focus:outline-none visited:outline-none active:outline-none category-button border border-black ${
          selectedCategory === 'our_services' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'
        } px-4 py-2 rounded-3xl transition-colors duration-300 inline-flex items-center`}
        style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
        onClick={() => handleCategoryClick('our_services')}
      >
        Books
      </button>

      <button
        className={`text-[3.4vw] focus:outline-none visited:outline-none active:outline-none category-button border border-black ${
          selectedCategory === 'more' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'
        } px-4 py-2 rounded-3xl transition-colors duration-300 inline-flex items-center`}
        style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
        onClick={() => handleCategoryClick('more')}
      >
        More+
      </button>
      </div>
      {/* <img className="absolute right-0 mr-2 w-[7.5vw]" src={designImage} alt="" /> */}
      <h2 className="text-[5vw] font-bold ml-4 mt-10">Featured</h2>
      <div className='flex ml-4 mt-2'>
      <Swiper
      spaceBetween={10}
      slidesPerView={2.3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='mr-2 ml-4 mt-4'
    >
        <SwiperSlide>
          <Link to='/product'>
        <ThingCards marginTop="0" width="37vw" height="52vw" />
        </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/product'>
        <ThingCards marginTop="0" width="37vw" height="52vw" />
        </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/product'>
        <ThingCards marginTop="0" width="37vw" height="52vw" />
        </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/product'>
        <ThingCards marginTop="0" width="37vw" height="52vw" />
        </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/product'>
        <ThingCards marginTop="0" width="37vw" height="52vw" />
        </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/product'>
        <ThingCards marginTop="0" width="37vw" height="52vw" />
        </Link>
        </SwiperSlide>
    </Swiper>
    </div>
    <div className="flex mt-12 ml-4 mr-2 h-[70vw]">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 2000 }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className=' mr-2 '
      >
        <SwiperSlide>
        <div className='w-[44vw] h-[] flex flex-col'>
          <div className='w-full h-[43vw] rounded-lg bg-green-300 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${Rectangle2488Image})`}}></div>
          <div className="w-full h-[32vw] mt-2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2486Image})` }}></div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[39vw] h-[] swiper-slide bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url(${Rectangle2484Image})` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[39vw] h-[] flex flex-col swiper-slide">
            <div className="w-full h-[60%] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2485Image})` }}></div>
            <div className="w-full h-[40%]  mt-2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2487Image})` }}></div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="w-[39vw] h-[42vw] flex flex-col swiper-slide">
            <div className="w-full h-[28vw] rounded-lg bg-red-400 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2488Image})` }}></div>
            <div className="w-full h-[48vw] mt-2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2486Image})` }}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[39vw] h-[42vw] swiper-slide bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2484Image})` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[39vw] h-[42vw] flex flex-col swiper-slide">
            <div className="w-full h-[60%] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2485Image})` }}></div>
            <div className="w-full h-[40%]  mt-2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2487Image})` }}></div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
    <div>
      <div className="flex justify-between mt-8">
        <h2 className="font-bold text-[5vw] ml-4">Featured Store</h2>
       <Link to='/viewallstores'><p className="text-[3vw] mt-3 mr-4 ">View All</p></Link> 
      </div>
      <div className="flex mt-6 ml-4">
        <Swiper
          className="mySwiperrr mr-2 ml-4"
          spaceBetween={10}
          slidesPerView={4}
          navigation
        >
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${store1})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Store</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${store2})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Store</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${store3})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Store</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${store4})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Store</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${store1})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Nahata</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${store2})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Store</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${store3})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Store</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <h2 className="text-[5vw] font-bold ml-4 mt-10 ">Category</h2>
      
      <div className="flex justify-center">
        <div className="h-[78vw] w-[95vw] mt-6">
          <div className="flex gap-4">
            <div className="w-[50%] mb-28">
              <Link to= '/clothingcategory'>
              <div className="flex flex-col w-full h-[60vw] bg-[#F5F5F5] rounded-lg">
                <div className="w-full bg-slate-200 h-[45vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${clothing})` }}></div>
                <h2 className="px-[30%] text-[4vw] py-[10%] font-bold">Clothings</h2>
              </div>
              </Link>
              <Link to='/electronicscategory'>
              <div className="flex flex-col w-full h-[60vw] bg-[#F5F5F5] mt-12 rounded-lg">
                <div className="w-full bg-slate-200 h-[45vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${electronics})` }}></div>
                <h2 className="px-[28%] text-[4vw] py-[10%] font-bold">Electronics</h2>
              </div>
              </Link>
              <Link to='/grocerycategory'>
              <div className="flex flex-col w-full h-[60vw] bg-[#F5F5F5] mt-12 rounded-lg">
                <div className="w-full bg-slate-200 h-[45vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${grocery})` }}></div>
                <h2 className="px-[33%] text-[4vw] py-[10%] font-bold">Grocery</h2>

              </div>
              </Link>
            </div>
            
            <div className="w-[50%] mb-28">
              <Link to='/accessoriescategory'>
              <div className="flex flex-col w-full h-[60vw] bg-[rgb(245,245,245)] rounded-lg">
                <div className="w-full bg-slate-200 h-[45vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${accessories})` }}></div>
                <h2 className="px-[29%] text-[4vw] py-[10%] font-bold ">Accessories</h2>
              </div>
              </Link>
              <Link to='/bookscategory'>
              <div className="flex flex-col w-full h-[60vw] bg-[#F5F5F5] mt-12 rounded-lg">
                <div className="w-full bg-slate-200 h-[45vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${books})` }}></div>
                <h2 className="px-[36%] text-[4vw] py-[10%] font-bold">Books</h2>
              </div>
              </Link>
              <Link to='/morecategory'>
              <div className="flex flex-col w-full h-[60vw] bg-[#F5F5F5] mt-12 rounded-lg">
                <div className="w-full bg-slate-200 h-[45vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${more})` }}></div>
                <h2 className="px-[39%] text-[4vw] py-[10%] font-bold">More</h2>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Navbar color="white" color2= "#2D332F" color3= "#2D332F" color4= "#2D332F"/>
      </section>
      </div>
    </>
  );
}

export default Store;
