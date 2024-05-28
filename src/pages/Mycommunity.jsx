import React, { useState, useEffect } from 'react';
import movieEditIcon from '../images/movie_edit.svg';
import profileImage from '../images/kate-trysh-Dnkr_lmdKi8-unsplash 1.png';
import iosshare from '../images/ios_share (1).svg'
import Navbar from '../components/Navbar';
import threedots from '../images/image 2.svg';
import edit from '../images/Vector (23).svg';
import deleteicon from '../images/Vector (24).svg';
import profilepic from '../images/05ebdc349a885d1104456e5d51b082b7.jpeg'
import post1 from '../images/kate-trysh-Dnkr_lmdKi8-unsplash 1.png'
import post2 from '../images/Rectangle 2269.png'
import './Heart.css';
import { db } from "../../firebase";
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
import Mycommunitycard from '@/components/Mycommunitycard';
import { collection, getDocs } from 'firebase/firestore';



function MyCommunity() {

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

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const storeCollectionRef = collection(db, "Store");
      const storeQuerySnapshot = await getDocs(storeCollectionRef);
      const combinedPosts = [];

      storeQuerySnapshot.forEach(async (storeDoc) => {
        const postCollectionRef = collection(db, "Store", storeDoc.id, "community post");
        const postQuerySnapshot = await getDocs(postCollectionRef);
        postQuerySnapshot.forEach((postDoc) => {
          combinedPosts.push({
           ...postDoc.data(),
            storeId: storeDoc.id,
          });
        });
      });

      setPosts(combinedPosts);
    };

    fetchPosts();
  }, []);


  return (
    <>
    <section className='lg:hidden'>
     <div className="fixed bg-white z-40 w-full top-0">
      <div className="flex justify-between p-3 mt-2">
       <div className='flex justify-center w-[22vw] h-[16vw] border-2 rounded-xl'>
        <div className='flex flex-col items-center mt-[1.3vw]'>
            <h2 className='font-bold text-[5.4vw]'>17</h2>
            <h2 className='font-bold text-[3.5vw] opacity-60 mt-[-13%]'>Posts</h2>
        </div>
       </div>
        <div className="w-[6vh] h-[6vh] rounded-full bg-[#F5F5F5] flex justify-center items-center mt-2 mr-2 p-3">
        <svg width="60%" height="60%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        
        </div>
      </div>
        
      
    </div>
    <div className=" mt-[29%] mb-32">
    {posts.map((post, index) => (
                  <MyCommunity key={index}  post={post} />
                ))}
    </div>
    

    </section>
    </>
  )
}

export default MyCommunity
