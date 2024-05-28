import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ratingIcon from '../images/Vector (17).svg';
import shareIcon from '../images/ios_share (2).svg';
import mapIcon from '../images/images2/mobile icons/map.png';
import storeIcon from '../images/add_shopping_cart (1).svg'
import logo from '../images/images2/desktop icons/logo.png';
import flags from '../images/Vector (19).svg';
import greenflag from '../images/Vector (20).svg';
import redflag from '../images/Vector (21).svg';
import whatsapp from '../images/whatsapp.svg';
import threedots from '../images/image 2.svg';
import questionmark from '../images/Frame 372.svg';
import link from '../images/attach_file_add.svg';
import fb from '../images/facebook.svg';
import signal from '../images/signal.svg';
import instagram from '../images/instagram.svg';
import telegram from '../images/telegram.svg';
import twitter from '../images/Vector (28).svg';
import more from '../images/Frame 509.svg'
import camera from '../images/Rectangle 2267.svg';
import xyzstore from '../images/damian-barczak-U9E423m3Hd8-unsplash.jpg'
import { Link } from 'react-router-dom';
import './style.css';

import 'swiper/css';
import ThingCards from '../components/StaticThingCards.jsx';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer.jsx";
import { db } from "../../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import {  ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from '../../firebase';


function Productpage() {
      // State to track whether the full description is visible
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { id } = useParams();

  const parts = id.split('-');

  const productID = id;

  const storeID = parts[0] + '-' + parts[1];

  // Function to handle click event on "See full description" link
  const handleShowMore = () => {
    // Update the state to show the full description
    setShowFullDescription(true);
  };
  const [reviewText, setReviewText] = useState('');
  const [product, setProduct] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState(5);
    const [showAll, setShowAll] = useState(false);

    const toggleShowMore = () => {
        setShowAll(!showAll); // Toggle the state to show/hide additional reviews
    };

  const handleReviewInput = (event) => {
    setReviewText(event.target.value);
  };

  const fetch = async() =>{
    console.log("fetching-->");
     const docRef = doc(db,"Store",storeID,"Products",id);
     const docSnap = await getDoc(docRef);
     if (docSnap.exists()) { 
      setProduct(docSnap.data());
      console.log("Document data:", product);
     }
  };

  useEffect(()=>{
    fetch();
  },[]);

  useEffect(() => {
    const fetchImages = async () => {
      console.log("fetching images -->")
      try {
        const storageRef = ref(storage, `${storeID}/products/${productID}`);
        const result = await listAll(storageRef);
        const urls = await Promise.all(result.items.map(itemRef => getDownloadURL(itemRef)));
        setImageUrls(urls);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchImages();
    console.log(imageUrls);
  }, []);

  const displayReview = () => {
    const text = reviewText.trim();
    if (text) {
      const newReview = {
        text,
        author: 'Kunal Deb',
      };
      setReviews([...reviews, newReview]);
      setReviewText('');
    }
  };

  const showMoreReviews = () => {
    setDisplayedReviews(reviews.length);
  };

  const seeLessReviews = () => {
    setDisplayedReviews(reviews.length);
  };
<<<<<<< HEAD
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };
=======

  
>>>>>>> ed5b998a6e830c094745f3276fbd1c54de38080c
  return (
   <>
   <div className='forscroll'>
    <section className='lg:hidden'>
    <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-6">
                <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">PRODUCT</h2>
                <button onClick={fetch}>TEST</button>
                <div className="rounded-full bg-red-500 w-[1vh] h-[1vh] "></div>
            </div>
            
        </div>
        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                </div>
                <div className='mt-[23%]'>
                <Swiper
              className="mySwiper mr-2 ml-4"
              spaceBetween={10}
              slidesPerView={1}
              centeredSlides={true}
            >
              {imageUrls.map((url, index) => (      
                <SwiperSlide key={index}>
                  <div className='flex justify-center'>
                    <div className='h-[65vw] w-[90vw] bg-red-400 flex justify-center items-center  bg-cover bg-center bg-no-repeat'>
                      <img src={url} alt="product images" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
        <div className="flex justify-between items-center mt-6">
            <div className="flex gap-2 ml-4 items-center ">
                <div className="w-8 h-8  bg-[#616363] rounded-full flex-shrink-0 bg-cover bg-center bg-no-repeat"    style={{ backgroundImage: `url(${xyzstore})` }}></div>
                <p className="font-semibold text-[#9C9C9C] flex-shrink-0">XYZ Store</p>
            </div>

            <div className="flex ml-20 gap-3 mt-[-3px] justify-end right-0">
              <Drawer>
                <DrawerTrigger>
            <div className="w-10 h-10 mt-3 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                    <img src={threedots} alt="" className="w-5" />
                </div>
                <DrawerContent className="h-[50vw]">
                   <div className='flex justify-center'>
                    <DrawerClose>
                    <div className='flex flex-col items-center'>
                    <div className='mt-9 items-center flex justify-center h-[16vw] w-[16vw] bg-black rounded-full'>
                      <img className='w-[7vw]' src={questionmark} alt="" />
                    </div>
                    <h2 className='font-bold text-[4.2vw] opacity-75'>Report</h2>
                    </div>
                    </DrawerClose>
                   </div>
                </DrawerContent>
                </DrawerTrigger>
                </Drawer>
            <Drawer>
               <DrawerTrigger><div className="w-10 h-10 mt-3 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                    <img src={ratingIcon} alt="" className="w-5" />
                </div></DrawerTrigger> 
                

             <DrawerContent className="h-[70vw]">
                <div className=' mt-5 flex justify-between items-center px-5'>
                  <h2 className='font-bold text-[3.9vw]'>Add Your Rating</h2>
                  <div className='flex gap-3 items-center'>
                    <div className='bg-[#F5F5F5] flex justify-center items-center w-[8vw] h-[8vw] rounded-full'>
                      <img className='w-[4vw]' src={flags} alt="" />
                    </div>
                    <h2 className='font-bold text-[4.1vw] text-[#094446]'>900</h2>
                  </div>
                </div>
                
                <div className='mt-9 px-14 flex justify-between items-center'>
         
                  <div className='flex flex-col items-center'>
                    <DrawerClose>
                  <div className='green justify-center items-center flex bg-[#F5F5F5] w-[20vw] h-[20vw] rounded-full'>
                       <img className='w-[10vw]' src={greenflag} alt="" />
                  </div>
                  </DrawerClose>
                  <h2 className='font-bold text-[5vw] opacity-80'>100</h2>
                  </div>
                  <div className='flex flex-col items-center'>
                    <DrawerClose>
                  <div className='red justify-center items-center flex bg-[#F5F5F5] w-[20vw] h-[20vw] rounded-full'>
                       <img className='w-[10vw]' src={redflag} alt="" />
                  </div>
                  </DrawerClose>
                  <h2 className='font-bold text-[5vw] opacity-80'>800</h2>
                  </div>
                
  
                </div>
 

   
       
           </DrawerContent>
              </Drawer>

              
          <Drawer>
            <DrawerTrigger>
                <div className="w-10 h-10 mt-3 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                    <img src={shareIcon} alt="" className="w-4" />
                </div>
                </DrawerTrigger>
                <DrawerContent className = "h-[70vw]">
                   <div className='mt-8 justify-between flex px-9'>
                   <div className="flex flex-col justify-center items-center">
                <div className="py-3 px-4 border border-black rounded-full">
                    <img className="w-[6vw]" src={link} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Copy Link</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-4 border border-black rounded-full">
                    <img className="w-[7vw]" src={instagram} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Instagram</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-4 border border-black rounded-full">
                    <img className="w-[7vw]" src={fb} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Facebook</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-4 border border-black rounded-full">
                    <img className="w-[7vw]" src={signal} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Signal</p>
            </div>
                   </div>
                   <div className='mt-4 justify-between flex px-9'>
                   <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-4 border border-black rounded-full">
                    <img className="w-[7vw]" src={telegram} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Telegram</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-4 border border-black rounded-full">
                    <img className="w-[7vw]" src={whatsapp} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Whatsapp</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-4 border border-black rounded-full">
                    <img className="w-[7vw]" src={twitter} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>Twitter</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="py-4 px-4 border border-black rounded-full">
                    <img className="w-[7vw]" src={more} alt=""/>
                </div>
                <p className='text-[3vw] font-medium mt-1'>More</p>
            </div>
                   </div>
                </DrawerContent>
                </Drawer>

                <div className="w-10 h-10 mt-3 mr-3 bg-[#F5F5F5] rounded-full flex justify-center items-center">
           
                    <div className="heart-container" title="Like">
                        <input type="checkbox" className="checkbox" id="Give-It-An-Id" />
                        <div className="svg-container ">
                            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" stroke="#BEBEBE"></path>
                            </svg>
                            
                            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
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
        </div>
        <div className="mt-7 ml-6">
      <h2 className="font-black text-lg">{product.ProductName}</h2>
      {/* <p className="text-[#9C9C9C]">Assam, Karimganj, Shyamaprasad Road- house no.3</p> */}
      <div className='flex flex-wrap mt-7 gap-2 w-full '>
        <button className={`border-2 px-9 text-[3.6vw] py-1 flex-shrink-0 ${activeButton === 1 ? 'bg-[#094446] text-white' : ''}`}
        onClick={() => handleClick(1)}>XS</button>
        <button className={`border-2 px-9 text-[3.6vw] py-1 flex-shrink-0 ${activeButton === 2 ? 'bg-[#094446] text-white' : ''}`}
        onClick={() => handleClick(2)}>S</button>
        <button className={`border-2 px-9 text-[3.6vw] py-1 flex-shrink-0 ${activeButton === 3 ? 'bg-[#094446] text-white' : ''}`}
        onClick={() => handleClick(3)}>M</button>
        <button className={`border-2 px-9 text-[3.6vw] py-1 flex-shrink-0 ${activeButton === 4 ? 'bg-[#094446] text-white' : ''}`}
        onClick={() => handleClick(4)}>L</button>
        <button className={`border-2 px-9 text-[3.6vw] py-1 flex-shrink-0 ${activeButton === 5 ? 'bg-[#094446] text-white' : ''}`}
        onClick={() => handleClick(5)}>XL</button>
        <button className={`border-2 px-9 text-[3.6vw] py-1 flex-shrink-0 ${activeButton === 6 ? 'bg-[#094446] text-white' : ''}`}
        onClick={() => handleClick(6)}>XXL</button>

      </div>
      
      <div className="flex  mt-7 gap-4">
        {/* <img src={mapIcon} alt="" className="w-20" /> */}
        <div className="w-full bg-[#F5F5F5] p-4 py-2 rounded-xl flex justify-between mr-4 items-center">
          <div>
            <div className="flex">
              <h2 className="text-2xl font-extrabold mt-2">&#x20b9; {product.ProductPrice}</h2>
              <p className="text-red-600 font-black ml-2 mt-4">{product.ProductDiscount}% Discount</p>
            </div>
            <p className="text-[#A9A9A9] font-extrabold mt- ml-5 text-md line-through">
              MRP ₹{product.ProductMrpPrice}
            </p>
          </div>
          <Link to='/checkoutaddress'>
          <div className="bg-[#094446] p-2 py-2 w-14 h-14 mt-1 rounded-lg ml-12 flex justify-center items-center">
            <img src={storeIcon} alt="" className="w-7" />
          </div>
          </Link>
        </div>
      </div>
    </div>
    <div className="ml-6 mt-7">
      <h2 className="text-2xl font-extrabold font-gotham-black">Description <span className="text-red-600"> &bull;</span></h2>
      <p className={`mt-4 mr-4 text-[14px] ${showFullDescription ? '' : 'overflow-hidden line-clamp-3'}`}>
        {product.ProductDescription}
      </p>
      {!showFullDescription && (
        <p className="mt-2">
          <a href="#" className="text-[#094446] mt-[-5px]" onClick={handleShowMore}>See full description</a>
        </p>
      )}
    </div>
    <div className="mt-14 ml-6">
      <h2 className="text-2xl font-extrabold font-gotham-black">Related Products<span className="text-green-600"> &bull;</span></h2>
    </div>
    <div className='flex ml-5'>
    <Swiper
          className="mySwiper mr-2 ml-4 mt-7"
          spaceBetween={10}
          slidesPerView={2.2}
         
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
        <div className="ml-6 mt-9">
      <h2 className="text-2xl font-gotham-black font-extrabold">Reviews <span className="text-red-600"> &bull;</span></h2>
    </div>
    <div className="m-4">
      <div className="mt-7 p-3 relative">
        <input
          type="text"
          placeholder="Add your review"
          className="border border-black p-4 mb-4 w-full outline-none rounded-xl text-[18px]"
          style={{ paddingLeft: '50px' }}
          value={reviewText}
          onChange={handleReviewInput}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              displayReview();
            }
          }}
        />
        <div className="w-12 h-12 rounded-full absolute top-[-11px] left-[-10px] mt-7 ml-6 flex items-center justify-center">
          <img src={logo} alt="" className="w-6" />
        </div>
      </div>

        {reviews.slice(0, displayedReviews).map((review, index) => (
          <div
            key={index}
            className={`review-item transform transition-all duration-500 px-4 delay-100 hover:translate-x- mt-2`}
            
          >
            <div className="flex gap-2 mb-3">
              <div className="w-8 h-8 mt-3 bg-[#616363] rounded-full"></div>
              <p className=" font-semibold text-[#9C9C9C] mt-5">{review.author}</p>
            </div>
            <p className="break-all">{review.text}</p>
          </div>
        ))}

{reviews.length > 5 && (
                <button onClick={toggleShowMore} className="mt-4">
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            )}
    </div>
    </section>
   </div>
   </>
  )
}

export default Productpage
