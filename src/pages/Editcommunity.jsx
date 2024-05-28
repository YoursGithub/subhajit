<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import image1 from '../images/image 1.svg';
import vector1 from '../images/Vector (1).svg';
import vector2 from '../images/Vector (2).svg';
import movieEdit from '../images/movie_edit (1).svg';
import { Link } from 'react-router-dom';
import './style.css';
import { doc, getDoc, setDoc, updateDoc, runTransaction } from "firebase/firestore";
import { db } from '../../firebase'; // Assuming you have a db instance exported from your firebase setup
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

import { storage } from '../../firebase';
import { ref, uploadBytes } from 'firebase/storage';

function Editcommunity() {
    const storeID = 'Store-0001';
     const [imagePreviews, setImagePreviews] = useState([]); // Changed to an array
    const [imagePreview1, setimagePreview1] = useState(vector1);
    const [productLink, setProductLink] = useState(''); // New state for product link
    const [description, setDescription] = useState('');
    const maxLength = 700;

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxLength) {
            setDescription(inputValue);
        }
    };
    const handleProductLinkChange = (event) => {
        setProductLink(event.target.value);
    };

    useEffect(() => {
        console.log(imagePreviews);
    }, [imagePreviews]); // This effect runs whenever `imagePreviews` changes//FOR TESTING ONLY


    const handleImageUpload1 = (event) => {
        const files = event.target.files;
        setImagePreviews(Array.from(files)); // Directly set the File objects to state
    };


    const handleAddPost = async () => {
        if(imagePreviews.length === 0){
            alert('Please select at least one file to upload');
            return;
        }
    
        // Reference to the counter document
        const counterRef = doc(db, "Store", storeID, "CommunityPost", "counter");
    
        // Transaction to safely increment the counter
        const newPostID = await runTransaction(db, async (transaction) => {
            const counterDoc = await transaction.get(counterRef);
            if (!counterDoc.exists()) {
                // If the counter document does not exist, create it with an initial value of 1
                transaction.set(counterRef, { lastPostID: 1 });
                return 1;
            } else {
                // Increment the counter and update the document
                const newPostID = counterDoc.data().lastPostID + 1;
                transaction.update(counterRef, { lastPostID: newPostID });
                return newPostID;
            }
        });
    
        // Create a document reference with the specified newPostID as the document ID
        const postRef = doc(db, "Store", storeID, "CommunityPost", newPostID.toString());
    
        // Use setDoc to write the document data, including the PostID as a field
        await setDoc(postRef, {
            PostID: newPostID, // Store the PostID within the document
            description: description,
            productLink: productLink,
        });
    
        // Upload images
        for (let i = 0; i < imagePreviews.length; i++) {
            const image = imagePreviews[i];
            const storageRef = ref(storage, `${storeID}/community-post/${newPostID}/${image.name}`);
            await uploadBytes(storageRef, image);
            console.log(`File ${i + 1} uploaded successfully`);
        }
    };

    return (
        <section className="lg:hidden">
            <div className="flex justify-between mt-6">
                <h2 className="font-extrabold text-[5vw] ml-4 mt-4">COMMUNITY POST<span className="text-red-500"> &bull;</span></h2>
                <div className="w-[12.7vw] h-[12.7vw] bg-[#F5F5F5] rounded-full flex-shrink-0 flex justify-center items-center mr-4 ">
                    <img className="w-[2.5vw] mr-[4.1px]" src={image1} alt="" />
                </div>
            </div>
            <div>
                <div className='flex items-center gap-3'>
                    <h2 className="font-extrabold text-[5vw] mt-16 ml-3">Add Images</h2>
                    <h2 className='mt-[16.4%] text-[3.5vw]'>(optional)</h2>
                    </div>
                    {imagePreviews && (
                        <div className="image-previews">
                            {imagePreviews.map((preview, index) => (
                                <img key={index} src={preview} alt={`Preview ${index}`} style={{ width: '100px', height: '100px' }} />
                            ))}
                        </div>
                        )}
                    <div className="flex ml-4 items-center mt-6 gap-3">
                        <div className="w-[25vw] h-[25vw] border-2 border-dashed flex justify-center items-center rounded-2xl border-[#848484]">
                            <label htmlFor="imageUpload1" className="cursor-pointer">
                            <img id="imagePreview1" src={imagePreview1} alt="" className="w-[11vw]" />
                            <input id="imageUpload1" type="file"  multiple accept="image/*" className="hidden" onChange={handleImageUpload1} />
                        </label>
                        </div>
                        <p className="text-[3.2vw]">(Add more than one image of the product)</p>
                    </div>
                    <h2 className="font-extrabold text-[5vw] mt-7 ml-3">Caption</h2>
            <div className="flex justify-center">
                <div className="w-[93vw] h-[34vw] mt-6 border-2 border-dashed  rounded-2xl border-[#848484] flex flex-col ">
                    <h2 className="font-bold ml-3 mt-1 text-[3.7vw] text-[#545454]">Description</h2>
                    <div className="flex gap-2 items-center">
                        <img className="ml-4 mt-[-14%] w-[6vw]" src={movieEdit} alt="" />
                        <textarea style={{paddingRight : "30px"}} className="mt-2 text-[4vw] w-[93vw] h-[21vw] focus:outline-none" type="text" placeholder="Write your caption" 
                           value={description}
                           onChange={handleChange}/>
                    </div>
                </div>
            </div>
            <p className="ml-[82%] mt-1 text-[3.6vw]">({description.length}/{maxLength})</p>
            <div className='flex items-center gap-3'>
            <h2 className='font-extrabold text-[5vw]  ml-3'>Product Link</h2>
            <h2 className='text-[3.5vw] mt-[0.7%]'>(optional)</h2>
            </div>
            <div className='px-3 py-5 flex items-center gap-2 w-[93vw] ml-3 mt-5 rounded-2xl h-[10vw] border-[1px] border-[#B7B7B7]'>
                <h2 className='text-[#737373] font-bold'>Link:</h2>
                <input onChange={handleProductLinkChange} type="text" className='focus:outline-none text-[4vw] w-[91vw]'/>
            </div>
            </div>
            <AlertDialog>
                <AlertDialogTrigger>
            <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
                                <button onClick={handleAddPost} className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                                    Edit
                                </button>
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
        </section>
    );
}

export default Editcommunity;

=======
import React, { useState, useEffect } from 'react';
import image1 from '../images/image 1.svg';
import vector1 from '../images/Vector (1).svg';
import vector2 from '../images/Vector (2).svg';
import movieEdit from '../images/movie_edit (1).svg';
import { Link } from 'react-router-dom';
import './style.css';
import { doc, getDoc, setDoc, updateDoc, runTransaction } from "firebase/firestore";
import { db } from '../../firebase'; // Assuming you have a db instance exported from your firebase setup
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

import { storage } from '../../firebase';
import { ref, uploadBytes } from 'firebase/storage';

function Editcommunity() {
    const storeID = 'Store-0001';
     const [imagePreviews, setImagePreviews] = useState([]); // Changed to an array
    const [imagePreview1, setimagePreview1] = useState(vector1);
    const [productLink, setProductLink] = useState(''); // New state for product link
    const [description, setDescription] = useState('');
    const maxLength = 700;

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxLength) {
            setDescription(inputValue);
        }
    };
    const handleProductLinkChange = (event) => {
        setProductLink(event.target.value);
    };

    useEffect(() => {
        console.log(imagePreviews);
    }, [imagePreviews]); // This effect runs whenever `imagePreviews` changes//FOR TESTING ONLY


    const handleImageUpload1 = (event) => {
        const files = event.target.files;
        setImagePreviews(Array.from(files)); // Directly set the File objects to state
    };


    const handleAddPost = async () => {
        if(imagePreviews.length === 0){
            alert('Please select at least one file to upload');
            return;
        }
    
        // Reference to the counter document
        const counterRef = doc(db, "Store", storeID, "CommunityPost", "counter");
    
        // Transaction to safely increment the counter
        const newPostID = await runTransaction(db, async (transaction) => {
            const counterDoc = await transaction.get(counterRef);
            if (!counterDoc.exists()) {
                // If the counter document does not exist, create it with an initial value of 1
                transaction.set(counterRef, { lastPostID: 1 });
                return 1;
            } else {
                // Increment the counter and update the document
                const newPostID = counterDoc.data().lastPostID + 1;
                transaction.update(counterRef, { lastPostID: newPostID });
                return newPostID;
            }
        });
    
        // Create a document reference with the specified newPostID as the document ID
        const postRef = doc(db, "Store", storeID, "CommunityPost", newPostID.toString());
    
        // Use setDoc to write the document data, including the PostID as a field
        await setDoc(postRef, {
            StoreName: 'Watch Party',
            StoreOwnerName: 'Kunal Deb',
            StoreID: storeID,
            PostID: newPostID, // Store the PostID within the document
            description: description,
            productLink: productLink,
        });
    
        // Upload images
        for (let i = 0; i < imagePreviews.length; i++) {
            const image = imagePreviews[i];
            const storageRef = ref(storage, `${storeID}/community-post/${newPostID}/${image.name}`);
            await uploadBytes(storageRef, image);
            console.log(`File ${i + 1} uploaded successfully`);
        }
    };

    return (
        <section className="lg:hidden">
            <div className="flex justify-between mt-6">
                <h2 className="font-extrabold text-[5vw] ml-4 mt-4">COMMUNITY POST<span className="text-red-500"> &bull;</span></h2>
                <div className="w-[12.7vw] h-[12.7vw] bg-[#F5F5F5] rounded-full flex-shrink-0 flex justify-center items-center mr-4 ">
                    <img className="w-[2.5vw] mr-[4.1px]" src={image1} alt="" />
                </div>
            </div>
            <div>
                <div className='flex items-center gap-3'>
                    <h2 className="font-extrabold text-[5vw] mt-16 ml-3">Add Images</h2>
                    <h2 className='mt-[16.4%] text-[3.5vw]'>(optional)</h2>
                    </div>
                    {imagePreviews && (
                        <div className="image-previews">
                            {imagePreviews.map((preview, index) => (
                                <img key={index} src={preview} alt={`Preview ${index}`} style={{ width: '100px', height: '100px' }} />
                            ))}
                        </div>
                        )}
                    <div className="flex ml-4 items-center mt-6 gap-3">
                        <div className="w-[25vw] h-[25vw] border-2 border-dashed flex justify-center items-center rounded-2xl border-[#848484]">
                            <label htmlFor="imageUpload1" className="cursor-pointer">
                            <img id="imagePreview1" src={imagePreview1} alt="" className="w-[11vw]" />
                            <input id="imageUpload1" type="file"  multiple accept="image/*" className="hidden" onChange={handleImageUpload1} />
                        </label>
                        </div>
                        <p className="text-[3.2vw]">(Add more than one image of the product)</p>
                    </div>
                    <h2 className="font-extrabold text-[5vw] mt-7 ml-3">Caption</h2>
            <div className="flex justify-center">
                <div className="w-[93vw] h-[34vw] mt-6 border-2 border-dashed  rounded-2xl border-[#848484] flex flex-col ">
                    <h2 className="font-bold ml-3 mt-1 text-[3.7vw] text-[#545454]">Description</h2>
                    <div className="flex gap-2 items-center">
                        <img className="ml-4 mt-[-14%] w-[6vw]" src={movieEdit} alt="" />
                        <textarea style={{paddingRight : "30px"}} className="mt-2 text-[4vw] w-[93vw] h-[21vw] focus:outline-none" type="text" placeholder="Write your caption" 
                           value={description}
                           onChange={handleChange}/>
                    </div>
                </div>
            </div>
            <p className="ml-[82%] mt-1 text-[3.6vw]">({description.length}/{maxLength})</p>
            <div className='flex items-center gap-3'>
            <h2 className='font-extrabold text-[5vw]  ml-3'>Product Link</h2>
            <h2 className='text-[3.5vw] mt-[0.7%]'>(optional)</h2>
            </div>
            <div className='px-3 py-5 flex items-center gap-2 w-[93vw] ml-3 mt-5 rounded-2xl h-[10vw] border-[1px] border-[#B7B7B7]'>
                <h2 className='text-[#737373] font-bold'>Link:</h2>
                <input onChange={handleProductLinkChange} type="text" className='focus:outline-none text-[4vw] w-[91vw]'/>
            </div>
            </div>
            <AlertDialog>
                <AlertDialogTrigger>
            <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
                                <button onClick={handleAddPost} className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                                    Edit
                                </button>
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
        </section>
    );
}

export default Editcommunity;

>>>>>>> ed5b998a6e830c094745f3276fbd1c54de38080c
