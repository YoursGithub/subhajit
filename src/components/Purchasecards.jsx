import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function Purchasecards() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => setLiked(!liked);
  return (
  <>
  <div className="flex px-4 py-5 gap-[5vw] p-[20px] justify-between">
            <div className="relative">
            <div class="h-[45vw] w-[35vw] bg-red-200 rounded-lg"></div>
                <div className="absolute top-0 right-0">
                    <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-1 right-1 flex justify-center items-center">
                        <div className="heart-container" title="Like" onClick={toggleLike}>
                            <input type="checkbox" className="checkbox w-[1vw]" id="Give-It-An-Id" checked={liked} onChange={toggleLike} />
                            <div className="svg-container">
                                {liked ? (
                                    <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <p className="font-semibold text-[4vw]">Shyamaprasad Road Karimganj</p>
                <div>
                    <p className="font-bold text-[5vw]">₹ 5000</p>
                    <div>
                        <div className="flex gap-1 mt-6">
                            <Link to='/details'>
                            <button className="px-3 py-1 text-[3.5vw] font-semibold rounded-full" style={{ border: '1px solid black' }}>Details</button>
                            </Link>
                            <button className="px-3 py-1 rounded-full text-white font-semibold text-[3.5vw]" style={{ backgroundColor: '#343434' }}>Track Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
  )
}

export default Purchasecards
