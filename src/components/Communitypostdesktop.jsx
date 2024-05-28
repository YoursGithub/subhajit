import React,{useState} from 'react'
import '@/pages/style.css';
import cliplink from '../images/attach_file_add (1).svg';
import iosshare from '../images/ios_share (1).svg'

function Communitypostdesktop() {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
  
    const toggleLike = () => {
      if (!liked) {
        setLiked(true);
        setLikeCount(likeCount + 1);
      } else {
        setLiked(false);
        setLikeCount(likeCount - 1);
      }
    };
  return (
    <>
    <div className='flex justify-center'>
    <div className='flex gap-[36px]'>
        <div className='bg-green-200 w-[42vw] h-[25vw]'> </div>
            <div className='flex flex-col mt-3'>
                <div className='flex gap-[230px] items-center'>
                <div className='flex gap-4 items-center'>
                    <div className='w-[70px] h-[70px] bg-yellow-300 rounded-lg'></div>
                    <h2 className='text-[20px] font-bold'>Kunal Deb</h2>
                </div>
                <h2 className='text-[17px] font-bold opacity-60'>8h ago</h2>
                </div>
                <p className='mt-7 text-[18px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore <br/> magna aliqua.</p>
            
                <div className='flex gap-2 mt-36'>
                <div className='flex gap-3 border-[1px] border-[#BEBEBE]  rounded-3xl px-4 py-1  ml-2 items-center'>
                <div className="con-like">
      <input
          className="like w-2"
          type="checkbox"
          title="like"
          checked={liked}
          onChange={toggleLike}
      />
      <div className="checkmark">
        {liked ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
          <path fill="#FF0000" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
        </svg>
        
        ):(
          <svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 24 24">
  <path fill="none" stroke="#FF0000" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
</svg>
        )}
       
      </div>
    </div>
    <p className="font-bold opacity-70 text-[18px]" >{likeCount}</p>
                </div>
                <div className=' px-3 py-2 w-[278px] bg-[#EDEDED] rounded-3xl flex gap-2'>
                    <img className='w-[14px]' src={cliplink} alt="" />
                    <h2 className='text-[16px] '>safshgrshfhdfvbhthhfhkfgd</h2>
                </div>
                <img className='w-[20px] mt-[-2%] ml-[70px]' src={iosshare} alt="" />
                </div>
            </div>
       
    </div>
    </div>
    </>
  )
}

export default Communitypostdesktop
