import React, { useState } from 'react';

function Checkoutcardsdesktop() {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const decrementQuantity = () => {
      if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
      }
    };
  
  return (
    <>
     <div className='bg-[#ffffff] w-[28vw] rounded-3xl shadow-md relative h-[12vw]'>
          <div className='flex justify-between items-center mb-6 g'>
            <div className='flex justify-between items-center gap-4'>
                <div className='ml-4 mt-6 w-[9vw] h-[9vw] bg-green-200 rounded-md'></div>
                <div className='flex flex-col mt-7'>
                    <h2 className='font-bold text-[18px]'>Nikon Camera</h2>
                    <button className='px-8 py-1 absolute text-[10px] border-[1px] border-[#D0D0D0] mt-7 '>XS</button>
                    <div className='flex justify-between gap-3 items-center mt-12'>
                        <div className='flex gap-1'>
                        <h2 className='font-bold text-[22px]'>₹</h2>
                        <h2 className='font-bold text-[22px]'>200</h2>
                        </div>
                        <h2 className='font-bold text-[12px] text-red-600 mt-1'>40% Discount</h2>
                    
                    </div>

                        <h2 className='font-bold text-[17px] opacity-50 line-through '>M.R.P ₹700</h2>

                </div>
            </div>
            <div className='flex flex-col gap-1 items-center absolute ml-[80%]'>
                <h2 className='font-bold text-[12px]'>QUANTITY</h2>
                <div className='flex justify-around border-2 gap-5 px-2 py-[0.43vw] items-center'>
                    <h2 className='minus text-[11px] font-bold cursor-pointer' onClick={decrementQuantity}>-</h2>
                    <h2 className='hee text-[11px] font-bold'>{quantity}</h2>
                    <h2 className='plus text-[11px] font-bold cursor-pointer'
                     onClick={incrementQuantity}>+</h2>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Checkoutcardsdesktop
