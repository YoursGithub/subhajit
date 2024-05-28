import React, { useState, useEffect } from 'react';
import movieEditIcon from '../images/movie_edit.svg';
import movieeditdesktop from '../images/movie_edit (2).svg'
import profileImage from '../images/kate-trysh-Dnkr_lmdKi8-unsplash 1.png';
import iosshare from '../images/ios_share (1).svg'
import Navbar from '../components/Navbar';
import profilepic from '../images/05ebdc349a885d1104456e5d51b082b7.jpeg'
import './Heart.css';
import post1 from '../images/kate-trysh-Dnkr_lmdKi8-unsplash 1.png'
import post2 from '../images/Rectangle 2269.png'
<<<<<<< HEAD
import Communitypostcard from '@/components/Communitypostcard.jsx';
import { Link } from 'react-router-dom';
import Desktopheader from '@/components/Desktopheader';
import Desktopfooter from '@/components/Desktopfooter';
import menudesktop from '../images/menu icon.png'
import Communitypostdesktop from '@/components/Communitypostdesktop';
=======
import Communitypostcard from '../components/Communitypostcard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase";
>>>>>>> ed5b998a6e830c094745f3276fbd1c54de38080c

function Community() {

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const storeCollectionRef = collection(db, "Store");
      const storeQuerySnapshot = await getDocs(storeCollectionRef);
      const combinedPosts = [];

      for (const storeDoc of storeQuerySnapshot.docs) {
        const postCollectionRef = collection(db, "Store", storeDoc.id, "CommunityPost");
        const postQuerySnapshot = await getDocs(postCollectionRef);
        postQuerySnapshot.forEach((postDoc) => {
          combinedPosts.push({
            ...postDoc.data(),
            storeId: storeDoc.id,
          });
        });
      }

      setPosts(combinedPosts);
    };

    fetchPosts();
  }, []);

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
    <section className='lg:hidden'>
    <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-8">

            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">COMMUNITY</h2>
                <div className="rounded-full bg-red-500 w-[1vh] h-[1vh]  mt-1"></div>
            </div>
        <Link to='/communitypost'>
        <div className="rounded-full bg-black w-[10vw] h-[10vw] flex justify-center items-center mt-[-5vw] absolute left-[87%]">
            <img className='w-[5vw]' src={movieEditIcon} alt="" />              
        </div>
        </Link>
                </div>
    </div>
<<<<<<< HEAD
    <div className=" mt-[25%] mb-32">
    <Communitypostcard 
        profilePicSrc={profilepic} // Provide the path to the profile picture
        profileImgSrc={post1} // Provide the path to the profile image
        name="Kunal Deb" // Provide the name
      />
   <Communitypostcard 
        profilePicSrc={profilepic} // Provide the path to the profile picture
        profileImgSrc={post2} // Provide the path to the profile image
        name="Barnik Deb" // Provide the name
      />
=======
    <div className=" mt-[29%] mb-32">
      {posts.length > 0 ? (
            posts.map((post, index) => (
              <Communitypostcard key={index} post={post} />
            ))
          ) : (
            <p>No posts available</p>
          )}
>>>>>>> ed5b998a6e830c094745f3276fbd1c54de38080c
    </div>
    
    <Navbar color="#2D332F" color2= "white" color3= "#2D332F" color4= "#2D332F"/>
    </section>
    <section className='lg:block hidden'>
    <div className="flex items-center mt-3">
            <div className=" ml-5 2xl:mt-5 relative cursor-pointer">
                <img src={menudesktop} alt="" class="w-32"/>
                <p className="absolute top-2 left-6 text-white ">Menu</p>
            </div>

            <div className="ml-auto mt-3 font-bold mr-10 text-[25px]">
                <h3>COMMUNITY</h3>
            </div>
        </div>
        <div className="flex mt-10 containers px-7">
            <div className="flex items-center">
                <div className='w-[80px] h-[80px] rounded-lg bg-red-200'></div>
                <div>
                  <div className='flex flex-col '>
                <h3 className="ml-5  font-bold text-[25px]">Jain Brothers <span className="text-green-600">&bull;</span></h3>
                <p className="text-[12px] ml-8 text-[#4F4F4F]">jainbrothers.tnennt.store</p>
                </div>
                </div>
            </div>

            <div className="w-[60px] h-[60px] bg-[#F3F3F3] rounded-full flex justify-center items-center mt-5 ml-auto mr-8">
                <img src={movieeditdesktop} alt="" className="w-[25px] h-[25px]"/>
            </div>
        </div>
        <div className='justify-center flex mt-6'>
          <div className='w-[96vw] h-[475px] flex flex-col gap-10 py-5 overflow-y-scroll'>
           <Communitypostdesktop/>
           <Communitypostdesktop/>
          </div>
        </div>
       <Desktopfooter/>
    </section>
    </>
  )
}

export default Community
