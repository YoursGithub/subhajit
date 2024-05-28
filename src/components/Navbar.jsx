import React from 'react'
import HomeIcon from '../images/images2/mobile icons/home.png';
import CatalogIcon from '../images/images2/mobile icons/catalog.png';
import GalleryIcon from '../images/images2/mobile icons/gallery.png';
import CommunityIcon from '../images/images2/mobile icons/community.png';
import { Link } from 'react-router-dom';

function Navbar({color,color2,color3,color4}) {
  return (
    <>
    <div className="fixed bottom-4 left-0 right-0 flex mx-auto mb-1 bg-[#2D332F] rounded-full text-xl p-2 w-[350px] text-white justify-around items-center z-50">
        <Link to="/" style={{backgroundColor: color}} className="icon p-4 rounded-full w-14 h-14 flex items-center justify-center">
          <img src={HomeIcon} alt="" className="w-8" />
        </Link>
        <Link to="/community" style={{backgroundColor: color2}} className="icon flex items-center justify-center  rounded-full p-4 w-14 h-14">
          <img src={CommunityIcon} alt="" className="w-8" />
        </Link>
        <Link to="/gallery" style={{backgroundColor: color3}} className="icon flex items-center justify-center  rounded-full p-4 w-14 h-14">
          <img src={GalleryIcon} alt="" className="w-8" />
        </Link>
        <Link to="/catalog" style={{backgroundColor: color4}} className="icon flex items-center justify-center rounded-full p-4 w-14 h-14">
          <img src={CatalogIcon} alt="" className="w-8" />
        </Link>
      </div>
      </>
  )
}

export default Navbar
