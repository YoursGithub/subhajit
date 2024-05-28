import React, { useState, useEffect } from 'react';
import slideshowOne from '../images/LOADING PAGE/SLIDESHOW ONE.png';
import slideshowTwo from '../images/LOADING PAGE/SLIDESHOW TWO.png';
import slideshowThree from '../images/LOADING PAGE/SLIDESHOW THREE.png';
import slideshow from './Slideshow.js';
import '../Auth/Auth.css';

function Slideshow() {

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        slideshow(); 
    }, []);;

  return (
    <div className="slideshow-container">
            <div className={slideIndex === 0 ? "mySlides fade" : "mySlides fade hidden"}>
                <img src={slideshowOne} alt="Slide 1" className="mt-44 ml-[-120px] 2xl:ml-[-160px]" />
            </div>
            <div className={slideIndex === 1 ? "mySlides fade" : "mySlides fade hidden"}>
                <img src={slideshowTwo} alt="Slide 2" className="mt-[-120px] 2xl:mt-[-140px]" />
            </div>
            <div className={slideIndex === 2 ? "mySlides fade" : "mySlides fade hidden"}>
                <img src={slideshowThree} alt="Slide 3" className="mt-[150px] ml-[-50px] 2xl:ml-[-60px]" />
            </div>
            {/* <div className="mySlides fade containers1">
                <img src="./Images/LOADING PAGE/SLIDESHOW FOUR.png" alt="Slide 4" className="mt-[150px]" />
            </div> */}
        </div>
  )
}

export default Slideshow
