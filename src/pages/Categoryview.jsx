import React from 'react'
import frame397 from '../images/images3/Frame 397.png';
import backIcon from '../images/images3/back.png';
import ThingCards from '@/components/ThingCards.jsx';

function Categoryview() {
  return (
    <>
    <div className='forscroll'>
    <div className="fixed bg-[#fff] z-60 tnennt">
    <div className="w-full flex px-4 mt-4 justify-between">
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={frame397} alt="" />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <a href=""><img className="w-12" src={backIcon} alt="" /></a>
                </div>
            </div>
            </div>
            <div className='flex w-[100vw] gap-4 flex-wrap mt-[25%] ml-4'>
                <ThingCards marginTop="6" width="34vw" height="52vw" />
                <ThingCards marginTop="6" width="34vw" height="52vw" />
                <ThingCards marginTop="6" width="34vw" height="52vw" />
                <ThingCards marginTop="6" width="34vw" height="52vw" />
    </div>
    </div>
   
    </>
  )
}

export default Categoryview
