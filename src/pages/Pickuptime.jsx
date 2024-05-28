import React,{useState} from 'react';
import './style.css';
import bigIllustration from '../images/images2/mobile icons/big illustration.png';
import smallIllustration from '../images/images2/mobile icons/small illustrtion.png';
import logo from '../images/images2/desktop icons/logo.png';
import backOption from '../images/images2/mobile icons/BACK OPTION.png';
import { Link } from 'react-router-dom';
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

function PickupTimePage() {
    const [dateLabelVisible, setDateLabelVisible] = useState(false);

    const hideLabel = () => {
        setDateLabelVisible(false);
    };
    
        return (
            <>
         <div className='forscroll'>
                <section className='lg:hidden'>
                    <div>
                        <nav>
                            <div className="flex p-5">
                                <div className="mt-1">
                                    <Link to="index.html" className="flex items-center text-white">
                                        <img src={logo} alt="Your Logo" className="mt-5 w-10" />
                                    </Link>
                                </div>
                                <div className="ml-auto mt-5 md:mt-5 pr-3 sm:pr-2">
                                    <img src={backOption} alt="" className="w-10" />
                                </div>
                            </div>
                        </nav>

                        <section className="md:hidden">
                            <div className="w-full h-64" style={{ backgroundImage: `url(${bigIllustration})`, backgroundSize: 'cover', padding: '20px' }}>
                                <div className="flex">
                                    <div className="mt-1">
                                        <h1 className="text-3xl font-gotham-black font-bold p-7" style={{ color: 'black' }}>When Do You Want Your Item To Be Picked Up</h1>
                                    </div>
                                </div>
                                <div className="ml-[-370px] mt-[-50px] h-72 relative" style={{ backgroundImage: `url(${smallIllustration})`, backgroundSize: 'cover', backgroundPosition: 'left' }}>
                                    <div className="flex flex-col items-center space-y-4 mt-20 justify-center ml-96">
                                        <div className="relative">
                                            {dateLabelVisible && <span id="date-label" className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">Enter date:</span>}
                                            <input id="date-input" type="date" placeholder="DD/MM/YYYY" className="border rounded-md py-2 px-2 focus:outline-none" onChange={() => setDateLabelVisible(false)} />
                                        </div>
                                        <div className="relative">
                                            <input type="time" defaultValue="12:00" className="border rounded-md py-2 px-4 pr-10 focus:outline-none" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-center text-[#9C9C9C] mt-[-130px] p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. eiusmod tempor incididunt ut labore et do.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                                </div>
                                <div className="flex items-center ml-7 mt-7 mb-32">
                                    <input type="checkbox" id="agree" className="form-checkbox accent-[#094446] h-5 w-5" />
                                    <label htmlFor="agree" className="ml-2">I agree with the <span className="text-green-900">Terms and conditions</span></label>
                                </div>
                                <AlertDialog>
                                <AlertDialogTrigger>
                                <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
                                    <div className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                                        Set Pickup Date and Time
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
      
      <AlertDialogAction className="rounded-3xl">
      <Link to='/'>Continue
      </Link></AlertDialogAction>
      
    </AlertDialogFooter>
                        </AlertDialogContent>
                                
                                </AlertDialog>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
        );
    }


export default PickupTimePage;
