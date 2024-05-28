import React,{useState} from 'react';
import backIcon from '../images/images3/back.png';
import earthIcon from '../images/Vector (25).svg';
import deleteIcon from '../images/Vector (24).svg';
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

function Storesettings() {
    const [ProductType, setProductType] = useState('Product Type');
    const [menuOpen, setMenuOpen] = useState(true);

    const handleProductType = (option) => {
        setProductType(option);
        setMenuOpen(false);
    };
  return (
    <>
    <div className='forscroll'>
    <section className="lg:hidden">
      <div className="sticky z-50 top-0 bg-white w-full">
        <div className="flex">
          <div className="mt-7 ml-6">
            <h3 className="text-2xl font-bold">SETTINGS&nbsp; <span className="text-green-500">&bull;</span></h3>
            <p className="text-[#9C9C9C]">Store Settings</p>
          </div>

          <div className="ml-auto mt-8 mr-7">
            <img src={backIcon} alt="" className="w-9" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
         <div className='w-[20vw] h-[20vw] rounded-lg bg-red-200'></div>
          <p className="text-[#757575] mt-3">Change Logo</p>
          <div className="flex gap-2 mt-1">
            <img src={earthIcon} alt="" className="w-4 h-4 mt-1" />
            <a href="" className="text-[#094446]">jainbrothers.tnennt.store</a>
          </div>
        </div>

      </div>

      <div className="flex flex-col ml-5 mt-12 ">
        <label htmlFor="inputField" className="mb-2 font-extrabold text-lg">Store Name</label>
        <input type="text" id="inputField" placeholder="Jain Brothers" className="border border-dotted border-[#848484] rounded-md mr-5 px-2 py-3 outline-none" />
      </div>

      <div class="flex ml-5 mt-5 gap-5 mr-5">
      <div class="flex flex-col flex-grow">
      <label for="inputField1" class="mb-2 font-extrabold text-lg">Category</label>
      <div className="dropdown" >
                        <div className="select border-[1px] border-[#AFAFAF] rounded-3xl font-bold " onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="selected">{ProductType}</span>
                            <div className={`caret ${menuOpen ? 'caret-rotate' : ''}`}>
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="15.9091" y1="1.63956" x2="7.7021" y2="9.84654" stroke="#272727" strokeWidth="2.4608"/>
                    <line x1="0.870025" y1="1.26865" x2="7.83034" y2="8.22896" stroke="#272727" strokeWidth="2.4608"/>
                    </svg> 
                            </div>
                        </div>
                        <ul className={`menu font-bold ${menuOpen ? 'menu-open1' : ''}`} style={{width:'85vw', marginLeft:'21vw'}}>
                            <div className='flex gap-3'>
                                <div>
                            <li className={ProductType === 'Clothing' ? 'active' : ''} onClick={() => handleProductType('Clothing')}>Clothing</li>
                            <li className={ProductType === 'Grocery' ? 'active' : ''} onClick={() => handleProductType('Grocery')}>Grocery</li>
                            <li className={ProductType === 'Electronics' ? 'active' : ''} onClick={() => handleProductType('Electronics')}>Electronics</li>
                            <li className={ProductType === 'Restaurant' ? 'active' : ''} onClick={() => handleProductType('Restaurant')}>Restaurant</li>
                            <li className={ProductType === 'Book Store' ? 'active' : ''} onClick={() => handleProductType('Book Store')}>Book Store</li>
                            <li className={ProductType === 'Bakery' ? 'active' : ''} onClick={() => handleProductType('Bakery')}>Bakery</li>
                  
                            </div>
                            <div>
                            <li className={ProductType === 'Beauty Apparel' ? 'active' : ''} onClick={() => handleProductType('Beauty Apparel')}>Beauty Apparel</li>
                            <li className={ProductType === 'Cafe' ? 'active' : ''} onClick={() => handleProductType('Cafe')}>Cafe</li>
                            <li className={ProductType === 'Florist' ? 'active' : ''} onClick={() => handleProductType('Florist')}>Florist</li>
                            <li className={ProductType === 'Footwear' ? 'active' : ''} onClick={() => handleProductType('Footwear')}>Footwear</li>
                            <li className={ProductType === 'Accessories' ? 'active' : ''} onClick={() => handleProductType('Accessories')}>Accessories</li>
                            
                            </div>
                            <div>
                            <li className={ProductType === 'Stationary' ? 'active' : ''} onClick={() => handleProductType('Stationary')}>Stationary</li>
                            <li className={ProductType === 'Eyewear' ? 'active' : ''} onClick={() => handleProductType('Eyewear')}>Eyewear</li>
                            <li className={ProductType === 'Watch' ? 'active' : ''} onClick={() => handleProductType('Watch')}>Watch</li>
                            <li className={ProductType === 'Musical Instrument' ? 'active' : ''} onClick={() => handleProductType('Musical Instrument')}>Musical Instrument</li>
                            <li className={ProductType === 'Sports' ? 'active' : ''} onClick={() => handleProductType('Sports')}>Sports</li>
                            </div>
                            </div>
                        </ul>
                    </div>
                    </div>
                    <div class="flex flex-col flex-grow">
            <label for="inputField2" class="mb-2 font-extrabold text-lg">Phone Number</label>
            <input type="text" id="inputField2" placeholder="7874837483" class="border border-dotted border-[#848484] rounded-md px-2 py-3 w-full outline-none"/>
        </div>
        </div>
         <div>
      

      <div className="flex flex-col ml-5 mt-6">
        <label htmlFor="inputEmail" className="mb-2 font-extrabold text-lg">Email</label>
        <input type="text" id="inputEmail" placeholder="Enter your Email" className="border border-dotted border-t-2 border-[#848484] rounded-md mr-5 px-2 py-3 outline-none" />
      </div>

      <div className="flex flex-col ml-5 mt-6">
        <label htmlFor="inputLocation" className="mb-2 font-extrabold text-lg">Store Location</label>
        <div className="relative" style={{ marginRight: '20px' }}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img src={earthIcon} alt="Icon" className="h-6" />
          </span>
          <input type="text" id="inputLocation" placeholder="Enter your store location" className="border border-dotted border-t-2 border-[#848484] rounded-md px-2 w-full py-3 outline-none pl-12" />
        </div>
      </div>

      <div className="flex flex-col ml-5 mt-6">
        <label htmlFor="inputUPI" className="mb-2 font-extrabold text-lg">UPI ID</label>
        <input type="text" id="inputUPI" placeholder="Enter your UPI Id" className="border border-dotted border-t-2 border-[#848484] rounded-md mr-5 px-2 py-3 outline-none" />
      </div>
    </div>

      <div className="flex mt-6 ml-5 gap-3 mb-28 items-center">
        <div className="w-[12vw] h-[12vw] flex items-center bg-black justify-center rounded-full">
          <img className='w-[40%]' src={deleteIcon} alt="" />
        </div>
        <p className="text-[3.9vw]">Delete Store</p>
      </div>
      <AlertDialog>
        <AlertDialogTrigger>
      <div className="fixed left-0 right-0 flex justify-center items-center bottom-3">
        <div className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
          Done
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
    </section>
    </div>
    </>
  );
}

export default Storesettings;
