import React, { useEffect, useState, useRef } from 'react';
import backIcon from '../images/images3/back.png';
import frame401 from '../images/images3/Frame 401.png';
import frame402 from '../images/images3/Frame 402.png';
import frame403 from '../images/images3/Frame 403.png';
import frame405 from '../images/images3/Frame 405.png';
import frame407 from '../images/images3/Frame 407.png';
import frame404 from '../images/images3/Frame 404.png';
import frame406 from '../images/images3/Frame 406.png';
import frame408 from '../images/images3/Frame 408.png';
import deleteicon from '../images/Vector (26).svg'
import menudesktop from '../images/menu icon.png'
import backdesktop from '../images/back desktop.png'
import logo from '../images/Frame 397.png'
import './style.css'
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
import { db } from "../../firebase.js";
import { doc, setDoc, arrayUnion } from "firebase/firestore";
import Optionalsweight from './Optionalsweight.jsx';
import Optionalssize from './Optionalssize.jsx';
import Optionalsbakery from './Optionalsbakery.jsx';
import Optionalfootwear from './Optionalfootwear.jsx';
import Optionalsstorage from './Optionalstorage.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { render } from 'react-dom';



function CreateProductPage() {
    
    


const [ProductName, setProductName] = useState('')
const [Discount, setDiscount] = useState('')
const [ProductMrpPrice, setProductMrpPrice] = useState('')
const [ProductPrice, setProductPrice] = useState('')
const [ProductDesc, setProductDesc] = useState('')
const [ProductStockQuantity, setProductStockQuantity] = useState('')
const [showHello, setShowHello] = useState(false);
const [ProductType, setProductType] = useState('Product Type');
const [menuOpen, setMenuOpen] = useState(false);
const [Images, setImages] = useState([]);
const [selectedParcel, setSelectedParcel] = useState(null);

// const [optional,setOptional]=useState(false);
const [optional, setOptional] = useState(false);

useEffect(() => {
    const timerid = setTimeout(() => {
        console.log(ProductStockQuantity)
    }, 1000);
    return () => {
        clearTimeout(timerid)
    }
}, [ProductStockQuantity])


  const handleParcelSelect = (parcel) => {
    setSelectedParcel(parcel);
  };

 

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageData = e.target.result;
            const uniqueKey = Date.now();
            setImages(prevImages => [...prevImages, { id: uniqueKey, data: imageData }]);
        };
        reader.readAsDataURL(file);
    }
};

const handleDeleteImage = (id) => {
    setImages(prevImages => prevImages.filter(image => image.id !== id));
};


const handleProductType = (option) => {
    setProductType(option);
    setMenuOpen(false);
    setOptional({ url: `/optional${option.toLowerCase()}` });
};



 

    useEffect(()=>{

            if (ProductType === "Grocery" || ProductType === "Electronics" || ProductType === "Clothing" || ProductType === "Bakery" ||  ProductType === "Footwear" )
            {
                setOptional({ url: `/optional${ProductType.toLowerCase()}` });
            }
            else
            {
                setOptional(false);
            }
        
    },[ProductType]);

    
    
    return (
       
        <>
        {optional ? (
            <>
                {ProductType === "Clothing" && <Optionalssize/>}
                {ProductType === "Electronics" && <Optionalsstorage/>}
                {ProductType === "Footwear" && <Optionalfootwear/>}
                {ProductType === "Grocery" && <Optionalsweight/>}
                {ProductType === "Bakery" && <Optionalsbakery/>}
            </>
        ) : (
        <div className='forscroll'>
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between">
                <div className="flex justify-center items-center gap-2">
                    <h2 className="text-2xl font-black">ADD PRODUCT</h2>
                    <div className="bg-red-400 h-[1vh] w-[1vh] rounded-full"></div>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={backIcon} alt="" />
                </div>
            </div>

            <p className="mx-5 font-extrabold text-xl">Add Images</p>
            <div className="mx-5 my-4 flex flex-row gap-4 items-center ">
            {Images.length < 5 && (
                            <div className="p-4 border-dotted border-[2px] rounded-[15px] border-[#848484] ">
                                <label htmlFor="imageUpload1" className="cursor-pointer">
                                    <img src={frame401} alt="" className="w-[11vw]" />
                                    <input id="imageUpload1" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                                </label>
                            </div>
                        )}
                {Images.map((image) => (
                            <div key={image.id} className='border-[1px] rounded-[15px] border-[#848484] w-[14vw] h-[14vw] bg-cover bg-center bg-no-repeat flex justify-center items-center' style={{ backgroundImage: `url(${image.data})` }}>
                            <AlertDialog className="z-[99999]">
                                <AlertDialogTrigger>
                                <img className='w-[6vw]'  src={deleteicon}
                                    alt=""
                                     />
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
      <AlertDialogAction className="rounded-3xl" onClick={() => handleDeleteImage(image.id)} >Continue</AlertDialogAction>
    </AlertDialogFooter>
                        </AlertDialogContent>
                                    </AlertDialog>
                            </div>
                        ))}
            </div>

    <div className='justify-between items-center flex px-4 mt-7 mb-4'>
    <div className="dropdown ">
                        <div className="select border-[1px] border-[#AFAFAF] rounded-3xl font-bold " onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="selected">{ProductType}</span>
                            <div className={`caret ${menuOpen ? 'caret-rotate' : ''}`}>
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="15.9091" y1="1.63956" x2="7.7021" y2="9.84654" stroke="#272727" strokeWidth="2.4608"/>
                    <line x1="0.870025" y1="1.26865" x2="7.83034" y2="8.22896" stroke="#272727" strokeWidth="2.4608"/>
                    </svg> 
                            </div>
                        </div>
                        <ul className={`menu font-bold ${menuOpen ? 'menu-open1' : ''}`}>
                            <div className='flex justify-between gap-5'>
                                <div>
                            <li className={ProductType === 'Clothing' ? 'active' : ''} onClick={() => handleProductType('Clothing')}>Clothing</li>
                            <li className={ProductType === 'Grocery' ? 'active' : ''} onClick={() => handleProductType('Grocery')}>Grocery</li>
                            <li className={ProductType === 'Electronics' ? 'active' : ''} onClick={() => handleProductType('Electronics')}>Electronics</li>
                            <li className={ProductType === 'Restaurant' ? 'active' : ''} onClick={() => handleProductType('Restaurant')}>Restaurant</li>
                            <li className={ProductType === 'Book Store' ? 'active' : ''} onClick={() => handleProductType('Book Store')}>Book Store</li>
                            <li className={ProductType === 'Bakery' ? 'active' : ''} onClick={() => handleProductType('Bakery')}>Bakery</li>
                            <li className={ProductType === 'Beauty Apparel' ? 'active' : ''} onClick={() => handleProductType('Beauty Apparel')}>Beauty Apparel</li>
                            <li className={ProductType === 'Cafe' ? 'active' : ''} onClick={() => handleProductType('Cafe')}>Cafe</li>
                            </div>
                            <div className="vertical-line"></div>
                            <div>
                            <li className={ProductType === 'Florist' ? 'active' : ''} onClick={() => handleProductType('Florist')}>Florist</li>
                            <li className={ProductType === 'Footwear' ? 'active' : ''} onClick={() => handleProductType('Footwear')}>Footwear</li>
                            <li className={ProductType === 'Accessories' ? 'active' : ''} onClick={() => handleProductType('Accessories')}>Accessories</li>
                            <li className={ProductType === 'Stationary' ? 'active' : ''} onClick={() => handleProductType('Stationary')}>Stationary</li>
                            <li className={ProductType === 'Eyewear' ? 'active' : ''} onClick={() => handleProductType('Eyewear')}>Eyewear</li>
                            <li className={ProductType === 'Watch' ? 'active' : ''} onClick={() => handleProductType('Watch')}>Watch</li>
                            <li className={ProductType === 'Musical Instrument' ? 'active' : ''} onClick={() => handleProductType('Musical Instrument')}>Musical Instrument</li>
                            <li className={ProductType === 'Sports' ? 'active' : ''} onClick={() => handleProductType('Sports')}>Sports</li>
                            </div>
                            </div>
                        </ul>
                    </div>
                    <h2 className='text-[3.4vw]'>Enter your product type</h2>
    </div>

            <p className="mx-5 font-extrabold text-xl">Item Name</p>
            <div className="mx-5 my-3 px-4 py-3  border-dotted border-[2px] rounded-[15px] border-[#848484] flex justifu-right mb-[30px]">
                <input type="text" id="phone-input" className="text-[#636363] text-[13px] w-[100%] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#ffffff]" placeholder="Write your Product Name" onChange={(e) => setProductName(e.target.value)}/>
            </div>
            {optional ? false : (
                <div>

            <p className="mx-5 font-extrabold text-xl">Item Price</p>
            <p className="mx-5 text-[#636363] text-[12px]">(Fill any two slots and the third will be calculated automatically)</p>
            <div className="flex flex-row items-center justify-center gap-1 my-2">
                <div className="my-3 px-3 py-2  border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px]  flex-row gap-1">
                    <img className="h-5" src={frame403} alt="" />
                    <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000]  outline-none bg-[#ffffff]" maxLength="6" placeholder="Discount" onChange={(e) => setDiscount(e.target.value)}/>
                </div>
                <div className="my-3 px-3 py-2  border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px]  flex-row gap-1">
                    <img className="h-3" src={frame402} alt="" />
                    <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000]  outline-none bg-[#ffffff]" maxLength="6" placeholder="MRP Price" onChange={(e) => setProductMrpPrice(e.target.value)} />
                </div>
                <div className="my-3 px-3 py-2  border-dotted border-[2px] rounded-[10px] border-[#848484] flex mb-[30px]  flex-row gap-1 items-center justify-center">
                    <img className="h-5" src={frame405} alt="" />
                    <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000]  outline-none bg-[#ffffff]" maxLength="6" placeholder="Item Price" onChange={(e) => setProductPrice(e.target.value)} />
                </div>
            </div>
            </div>
            )}

 
            {/* Phone View */}
          

            <p className="mx-5 font-extrabold text-xl">Add Product Description and More</p>

<div className="mx-5 my-3 p-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex flex-col gap-1">
    <p className="text-[13px] font-extrabold text-[#636363]">Description</p>
    <div className="flex flex-row gap-1">
        <div>
            <img className="w-4 h-4 mt-1" src={frame408} alt="" />
        </div>
        <div>
            <textarea className="text-[#989898] w-[100%] text-[13px] font-bold border-0 border-[#000000]  outline-none bg-[#ffffff]" name="" maxLength="700" id="" cols="38" rows="4" placeholder="Write Your Caption" onChange={(e) => setProductDesc(e.target.value)}></textarea>
        </div>
    </div>
</div>
{optional ? false : (
<div>
<p className="mx-5 font-extrabold text-xl ">Product Stock Quantity</p>
  <div className='flex justify-between items-center px-5 mt-4'>
            <div className=" px-4 py-3  border-dotted border-[2px] rounded-[15px] border-[#848484] flex justifu-right ">
                <input type="number" id="phone-input" className="text-[#636363] text-[13px] w-[100%] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#ffffff]" placeholder="700" onChange={(e) => setProductStockQuantity(e.target.value)}/>
            </div>
            <p className='text-[3vw] ml-12'>(Add your total product stock quantity)</p>
            </div>
            </div>
)}
            {/* {optional && (
                <Link to={optional.url}>
            <p className="mx-5 font-extrabold text-xl mt-6">Item Optional</p>
            <p className="mx-5 text-[#636363] text-[12px]">(Use if your product has different size, weight & volume )</p>

           
       
            <div className=" mx-5 my-3 p-3 flex flex-row border border-[#094446] rounded-lg items-center gap-2 w-[37%]">
                
                <img className="w-6" src={frame407} alt="" />
                
                <p className="text-[#094446] text-[13px] font-bold">Add Optional</p>
            </div>
             </Link>
          ) } */}



<div className='justify-center flex mb-2 mt-7'>
                        <Link to={optional ? optional.url : '/'}>
                            <button className="text-[#ffffff] z-[999] text-[4vw] py-3 px-20 bg-[#000000] border rounded-full font-bold">
                                {optional ? 'Next' : 'List Item'}
                            </button>
                        </Link>
                    </div>
        </section>
        </div>
        )}
        <section className="hidden lg:block">
            <div className="w-[100vw] flex justify-between px-5 py-5 absolute top-0">
                <div className="flex items-center justify-center relative">
                    <img className="w-[10vw]" src={menudesktop} alt="" />
                    <p className="absolute text-[#ffffff] font-bold mr-[50px]">Menu</p>
                </div>
                <div className="flex items-center justify-center relative ">
                    <img className="w-[7vw]" src={backdesktop} alt="" />
                    <p className="absolute text-[#000] font-bold">Back</p>
                </div>
            </div>

            <div className="flex items-center h-[100vh]">
                <div className="w-[28%] flex flex-col justify-center items-center ">
                    <h2 className="text-[42px] mx-5 font-black mb-[20px]">ADD PRODUCT</h2>
                    <div className="dropdown relative" style={{ width: '200px' }}>
    <div className="select border-[1px] border-[#AFAFAF] rounded-3xl font-bold" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="selected">{ProductType}</span>
        <div className={`caret ${menuOpen ? 'caret-rotate' : ''}`}>
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.9091" y1="1.63956" x2="7.7021" y2="9.84654" stroke="#272727" strokeWidth="2.4608"/>
                <line x1="0.870025" y1="1.26865" x2="7.83034" y2="8.22896" stroke="#272727" strokeWidth="2.4608"/>
            </svg> 
        </div>
    </div>
    <ul className={`menu font-bold ${menuOpen ? 'menu-open1' : ''}`}>
                            <div className="flex">
                                <div>
                            <li className={ProductType === 'Clothing' ? 'active' : ''} onClick={() => handleProductType('Clothing')}>Clothing</li>
                            <li className={ProductType === 'Grocery' ? 'active' : ''} onClick={() => handleProductType('Grocery')}>Grocery</li>
                            <li className={ProductType === 'Electronics' ? 'active' : ''} onClick={() => handleProductType('Electronics')}>Electronics</li>
                            <li className={ProductType === 'Restaurant' ? 'active' : ''} onClick={() => handleProductType('Restaurant')}>Restaurant</li>
                            <li className={ProductType === 'Book Store' ? 'active' : ''} onClick={() => handleProductType('Book Store')}>Book Store</li>
                            <li className={ProductType === 'Bakery' ? 'active' : ''} onClick={() => handleProductType('Bakery')}>Bakery</li>
                            <li className={ProductType === 'Beauty Apparel' ? 'active' : ''} onClick={() => handleProductType('Beauty Apparel')}>Beauty Apparel</li>
                            <li className={ProductType === 'Cafe' ? 'active' : ''} onClick={() => handleProductType('Cafe')}>Cafe</li>
                            </div>
                            <div className="vertical-line"></div>
                            <div>
                            <li className={ProductType === 'Florist' ? 'active' : ''} onClick={() => handleProductType('Florist')}>Florist</li>
                            <li className={ProductType === 'Footwear' ? 'active' : ''} onClick={() => handleProductType('Footwear')}>Footwear</li>
                            <li className={ProductType === 'Accessories' ? 'active' : ''} onClick={() => handleProductType('Accessories')}>Accessories</li>
                            <li className={ProductType === 'Stationary' ? 'active' : ''} onClick={() => handleProductType('Stationary')}>Stationary</li>
                            <li className={ProductType === 'Eyewear' ? 'active' : ''} onClick={() => handleProductType('Eyewear')}>Eyewear</li>
                            <li className={ProductType === 'Watch' ? 'active' : ''} onClick={() => handleProductType('Watch')}>Watch</li>
                            <li className={ProductType === 'Musical Instrument' ? 'active' : ''} onClick={() => handleProductType('Musical Instrument')}>Musical Instrument</li>
                            <li className={ProductType === 'Sports' ? 'active' : ''} onClick={() => handleProductType('Sports')}>Sports</li>
                            </div>
                            </div>
                        </ul>
</div>

                    
                    <a className="mx-5 w-[66%] mt-[73%]" href="/create-2.html">
                        <button className="text-[#ffffff] text-[18px] w-[100%] py-3 bg-[#000000] border rounded-full font-bold">List Item</button>
                    </a>
                </div>

                <div className="w-36%">
                <p className="mx-5 font-extrabold text-[25px]">Add Images</p>
            <div className="mx-5 my-4 flex flex-row gap-4 items-center mb-[50px]">
            {Images.length < 5 && (
                <div className="p-4  border-dotted border-[2px] rounded-[15px] border-[#848484]">
                    <label htmlFor="imageUpload1" className="cursor-pointer">
                                    <img src={frame401} alt="" className="w-8" />
                                    <input id="imageUpload1" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                                </label>
                </div>
            )}
              {Images.map((image) => (
                            <div key={image.id} className='border-[1px] rounded-[15px] border-[#848484] w-[4vw] h-[4vw] bg-cover bg-center bg-no-repeat flex justify-center items-center' style={{ backgroundImage: `url(${image.data})` }}>
                            <AlertDialog className="z-[99999]">
                                <AlertDialogTrigger>
                                <img className='w-3'  src={deleteicon}
                                    alt=""
                                     />
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
      <AlertDialogAction className="rounded-3xl" onClick={() => handleDeleteImage(image.id)} >Continue</AlertDialogAction>
    </AlertDialogFooter>
                        </AlertDialogContent>
                                    </AlertDialog>
                            </div>
                        ))}
            </div>

            <p className="mx-5 font-extrabold text-[25px]">Item Name</p>
            <div className="mx-5 my-3 px-4 py-3  border-dotted border-[2px] rounded-[15px] border-[#848484] flex justify-right mb-[30px]">
                <input type="text" id="phone-input" className="text-[#636363] text-[15px] w-[100%] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#ffffff]" placeholder="Write your Product Name" onChange={(e) => setProductName(e.target.value)}/>
            </div>

            <p className="mx-5 font-extrabold text-[25px]">Item Price</p>
            <p className="mx-5 text-[#636363] text-[15px]">(Fill any two slots and the third will be calculated automatically)</p>

            <div className="flex flex-row justify-center gap-1 my-2">
                <div className="my-3 px-3 py-2  border-dotted border-[2px] rounded-[10px] border-[#848484]  justify-right mb-[30px] flex flex-row gap-1">
                    <img className="h-7" src={frame403} alt="" />
                    <input type="text" id="phone-input" className="text-[#989898] w-[80px] text-[12px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="Discount" onChange={(e) => setDiscount(e.target.value)}/>
                </div>
                <div className="my-3 px-3 py-3  border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px]  flex-row gap-1">
                    <img className="h-5" src={frame402} alt="" />
                    <input type="text" id="phone-input" className="text-[#989898] w-[80px] text-[12px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="MRP Price" onChange={(e) => setProductMrpPrice(e.target.value)}/>
                </div>
                <div className="my-3 px-3 py-2  border-dotted border-[2px] rounded-[10px] border-[#848484]  mb-[30px] flex flex-row gap-1 items-center justify-center">
                    <img className="h-7" src={frame405} alt="" />
                    <input type="text" id="phone-input" className="text-[#989898] w-[80px] text-[12px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="Item Price"  onChange={(e) => setProductPrice(e.target.value)}/>
                </div>
            </div>
                </div>

                <div className="w-37% mx-10">
                <p className="mx-5 font-extrabold text-[25px]">Item Optional</p> 
                {showHello ? (     
            <div className="flex mx-5 items-center gap-2">
                <div className="my-3 p-3 flex border border-[#094446] rounded-lg items-center w-[35%] gap-2 ">
                    <a href="">
                        <img className="w-[30px]" src={frame407} alt="" />
                    </a>
                    <p className="text-[#094446] text-[15px] font-bold">Add Optional</p>
                </div> 
                <p className="text-[#636363] text-[15px] w-[44%]">(Use if your product has different size, weight & volume )</p>
            </div>
                ) : (
                     <div className="flex flex-row items-center mb-[30px]">
                    <div className="mx-5 my-3 p-3 flex flex-row border border-[#ffffff] bg-[#094446] rounded-lg items-center gap-2 w-[37%] ">
                        <img className="w-6" src={frame406} alt=""/>
                        <p className="text-[#ffffff] text-[13px] font-bold">View Optional</p>
                    </div>
                    <img className="w-6 cursor-pointer" src={frame404} alt="" onClick={() => setShowHello(true)} />
                </div> 
                )}
            <p className="mx-5 font-extrabold text-[25px] mt-[20px]">Add Product Description and More</p>
            <div className="mx-5 my-3 p-2  border-dotted w-[80%] border-[2px] rounded-[10px] border-[#848484] flex flex-col gap-1">
                <p className="text-[15px] font-extrabold text-[#636363]">Description</p>
                <div className="flex flex-row gap-2">
                    <div>
                        <img className="w-[20px] h-[20px] mt-1" src={frame408} alt="" />
                    </div>
                    <div>
                        <textarea className="text-[#989898] w-[100%] text-[15px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" name="" maxLength="700" id="" cols="38" rows="4" placeholder='Write Your Caption' onChange={(e) => setProductDesc(e.target.value)}></textarea>
                    </div>
                </div>
            </div>
            
            <p className="mx-5 font-extrabold text-[25px]">Product Stock Quantity</p>
            <div className='flex mt-3 items-center gap-4'>
            <div className="mx-5 px-4 py-3  border-dotted border-[2px] rounded-[15px] border-[#848484] flex justify-right ">
                <input type="text" id="phone-input" className="text-[#636363] text-[15px] w-[100%] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#ffffff]" placeholder="700" onChange={(e) => setProductStockQuantity(e.target.value)}/>
            </div>
            <p className='text-[12px]'>(Add your total product stock quantity)</p>
            </div>
                </div>
                
                
            </div>
            
            

            <div className="absolute bottom-[10px] flex justify-center items-center">
                <p className="mx-5 text-[12px]">©2024 Tnennt All rights reserved.</p>
                <img width="30px" className="absolute left-[49vw]" src={logo} alt="" />
            </div>
        </section>
        </>
    );
}

export default CreateProductPage;
