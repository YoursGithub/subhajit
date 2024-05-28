import React from 'react'
import camera from '../images/Rectangle 2267.svg';
import '../pages/style.css';

function Featuredthingcard({ marginTop, width, height }) {
  const cardStyle = {
    marginTop: marginTop,
    width: width,
    height: height,
};
  return (
    <>
    <div className="bg-[#F5F5F5]  flex flex-col rounded-lg " style={cardStyle}>
                    <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative"
                      style={{ backgroundImage: `url(${camera})` }}>
                       <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2 flex justify-center items-center">
          <svg width="13" height="3" viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.800781" y1="1.05859" x2="15.8008" y2="1.05859" stroke="#FF0000" strokeWidth="2" />
          </svg>
        </div>
        </div>
                    <div className="flex flex-col gap-4 ml-2">
                      <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
                      <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
                    </div>
                  </div>
    </>
  )
}

export default Featuredthingcard
