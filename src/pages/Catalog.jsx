import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'; 
import notification from '../images/notfication00.png';
import vector from '../images/Vector2.png';
import cart from '../images/add_shopping_cart.png';
import vector2 from '../images/Vector 3.png'
import pattern from '../images/Rectangle 2324.svg';
import Navbar from '../components/Navbar';
import diamond from '../images/Vector (27).svg'

function Catalog() {

    

  return (
    <>
    <div className='forscroll'>
    <section className="md:hidden">
       <div className="w-full h-[12vh] flex p-[20px] justify-between">
        <div className="flex justify-center items-center gap-2">
            <h2 className="text-2xl font-bold">CATALOG</h2>
            <div className="bg-yellow-400 h-[1vh] w-[1vh] rounded-full"></div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img className="w-[21px]" src={notification} alt=""/>
          <div className="bg-slate-300 h-[7vh] w-[7vh] rounded-full"></div>
        </div>
       </div>
       <div className="flex justify-center">
       <div className="bg-slate-400 h-[30vh] w-[93vw] mt-4 rounded-lg"></div>
      </div>
      <div className=" flex justify-between p-[13px] mt-6 gap-2">
        <Link to='/wishlist'>
        <div className="bg-yellow-200  h-auto md:h-[17vh] w-[45vw] md:w-[44vw] rounded-lg p-[13px] bg-no-repeat bg-cover " style={{ backgroundImage: `url(${pattern})` }}>
            <h2 className="font-bold text-[5.4vw] md:text-2xl">Wishlist</h2>
            <p className="leading-2 text-[2.5vw] md:text-xs">See all your saved products<br/>here</p>
            <img className="w-7 ml-[80%] mt-4" src={vector} alt=""/>
        </div>
        </Link>
        <Link to='/purchases'> 
        <div className="bg-red-200 h-auto md:h-[17vh] w-[45vw] md:w-[44vw] rounded-lg p-[13px] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${pattern})` }}>
            <h2 className="font-bold text-[5.4vw] md:text-2xl">My Purchases</h2>
            <p className="leading-2 text-[2.5vw] md:text-xs">See all your currently purchased items </p>
            <img className="w-7 ml-[80%] mt-4" src={cart} alt=""/>
        </div>
        </Link> 
      </div>
      <div className="flex justify-between p-[13px] gap-2 mb-32">
        <Link to='/premium'>
        <div className="bg-violet-200 h-auto md:h-[17vh] w-[45vw] md:w-[44vw] rounded-lg p-[13px] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${pattern})` }}>
            <h2 className="font-bold text-[5.4vw] md:text-2xl">Premium</h2>
            <p className="leading-2 text-[2.5vw] md:text-xs mt-1">Unlock features with our<br/>premium services</p>
            <img className="w-7 ml-[80%] mt-4" src={diamond} alt=""/>
        </div> 
        </Link>
        <div className="bg-green-200 h-auto md:h-[17vh] w-[45vw] md:w-[44vw] rounded-lg p-[13px] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${pattern})` }}>
            <h2 className="font-bold text-[5.4vw] md:text-2xl">Coming Soon...</h2>
            <p className="leading-2 text-[2.5vw] md:text-xs">Let Team Tnennt. Cook</p>
        </div>        
      </div>
      <Navbar color="#2D332F" color2= "#2D332F" color3= "#2D332F" color4= "white"/>
    </section>
    </div>
    </>
  )
}

export default Catalog
