import React,{useState} from 'react'
import movieEditIcon from '../images/movie_edit.svg';
import profileImage from '../images/kate-trysh-Dnkr_lmdKi8-unsplash 1.png';
import iosshare from '../images/ios_share (1).svg'
import Navbar from '../components/Navbar';
import profilepic from '../images/05ebdc349a885d1104456e5d51b082b7.jpeg'
import threedots from '../images/image 2.svg';
import edit from '../images/Vector (23).svg';
import deleteicon from '../images/Vector (24).svg';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button"

function Mycommunitycard({ profilePicSrc, profileImgSrc, name }) {
    
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
    <div className='flex justify-center mb-5'>
    <div className="w-[93vw] flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="w-[5vh] h-[5vh] rounded-full bg-[#343434] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${profilePicSrc})`}}></div>
            <h2 className="font-bold text-[5vw] mt-2">{name}</h2>
          </div>
          <div>
          <Drawer>
            <DrawerTrigger>
          <div className="w-10 h-10 mt-3 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                    <img src={threedots} alt="" className="w-5" />
                </div>
                </DrawerTrigger>
                <DrawerContent className="h-[60vw]">
                    <div className='mt-10'>
                      <div className='flex justify-between px-20'>
                        <DrawerClose>
                        <div className='flex flex-col items-center gap-2'>
                          <div className='w-[20vw] h-[20vw] flex justify-center items-center bg-black rounded-full'>
                            <img className='w-[6vw]' src={edit} alt="" />
                          </div>
                          <h2 className='font-bold text-[4vw] opacity-55'>Edit</h2>
                        </div>
                        </DrawerClose>
      
                        <AlertDialog>
                        <AlertDialogTrigger>
                          <div>
                        <div className='flex flex-col items-center gap-2'>
                          <div className='w-[20vw] h-[20vw] flex justify-center items-center bg-black rounded-full'>
                            <img className='w-[6vw]' src={deleteicon} alt="" />
                          </div>
                          <h2 className='font-bold text-[4vw] opacity-55'>Delete</h2>
                        </div>
                        </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="w-[90vw] rounded-3xl">
                        <AlertDialogHeader>
               <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className="rounded-3xl">Cancel</AlertDialogCancel>
      <AlertDialogAction className="rounded-3xl">Continue</AlertDialogAction>
    </AlertDialogFooter>
                        </AlertDialogContent>
                        </AlertDialog>
            
                      </div>
                    </div>
                </DrawerContent>
                </Drawer>
                </div>
        </div>
        <div className="flex justify-center mt-4 px-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-slate-400 w-[99%] h-[62vw] rounded-sm mt-4 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${profileImgSrc})` }}>
          </div>
        </div>
        <div className='flex justify-between mb-4'>
         <div className='flex gap-2'>
                <div className='flex gap-3 border-2 border-[#BEBEBE]  rounded-3xl px-4 py-1  ml-2 items-center'>
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
    <p className="font-bold opacity-70 text-[4vw]" >{likeCount}</p>
                </div>
                <div className="p-4 h-[4.4vh] border-2 border-[#BEBEBE] rounded-3xl flex justify-center items-center">
                <a href="https://uiverse.io/" target="_blank" rel="noopener noreferrer" className="text-[3.5vw] text-[#989797]">link: https://uiverse.io/</a>


               </div>
         
            </div>
            
            
        <img className='w-[4vw] mt-[-2%] mr-1' src={iosshare} alt="" />
            
        </div>
      </div>
      </div>
    </>
  )
}

export default Mycommunitycard
