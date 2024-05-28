import React, { useState } from 'react';
import deleteicon from '../images/Vector (26).svg'
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
import { DialogTrigger } from '@radix-ui/react-dialog';

function Checkoutcardsdelete() {
    const [quantity, setQuantity] = useState(1);
    const [isVisible, setIsVisible] = useState(true);

    const incrementQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const decrementQuantity = () => {
      if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
      }
    };
    const handleDelete = () => {
        setIsVisible(false);
    };
  
  return (
    <>
    {isVisible && (
    <div className='flex justify-center'>
     <div className='bg-[#ffffff] w-[93vw] mt-6 rounded-3xl shadow-md relative'>
          <div className='flex justify-between items-center mb-3'>
            <div className='flex justify-between items-center gap-4'>
                <div className='ml-4 mt-6 w-[27vw] h-[31vw] bg-green-200 rounded-md'></div>
                <div className='flex flex-col mt-7'>
                    <h2 className='font-bold text-[3.8vw]'>Nikon Camera</h2>
                    <button className='px-8 py-1 absolute text-[3vw] border-[1px] border-[#D0D0D0] mt-7 '>XS</button>
                    <div className='flex justify-between gap-3 items-center mt-12'>
                        <div className='flex gap-1'>
                        <h2 className='font-bold text-[5vw]'>₹</h2>
                        <h2 className='font-bold text-[5vw]'>200</h2>
                        </div>
                        <h2 className='font-bold text-[2.8vw] text-red-600 mt-1'>40% Discount</h2>
                    
                    </div>

                        <h2 className='font-bold text-[3.2vw] opacity-50 line-through '>M.R.P ₹700</h2>

                </div>
            </div>
            <div className='flex flex-col mr-3 gap-1 items-center'>
                <h2 className='font-bold text-[2.4vw]'>QUANTITY</h2>
                <div className='flex justify-around border-2 gap-5 px-2 py-[0.43vw] items-center'>
                    <h2 className='minus text-[3.6vw] font-bold' onClick={decrementQuantity}>-</h2>
                    <h2 className='hee text-[3vw] font-bold'>{quantity}</h2>
                    <h2 className='plus text-[3.6vw] font-bold'
                     onClick={incrementQuantity}>+</h2>
                </div>
            </div>
          </div>
          <AlertDialog>
           <AlertDialogTrigger>
          <img className='absolute ml-[89%] w-[5vw] mt-[-10%] ' src={deleteicon} alt=""  />
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
      <AlertDialogAction className="rounded-3xl" onClick={handleDelete} >Continue</AlertDialogAction>
    </AlertDialogFooter>
                        </AlertDialogContent>
          </AlertDialog>
        </div>
        </div>
          )}
    </>
  )
}

export default Checkoutcardsdelete
