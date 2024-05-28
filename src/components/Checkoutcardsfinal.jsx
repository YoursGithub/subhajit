import React, { useState } from 'react';

function Checkoutcardsfinal() {
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
    <div className='flex justify-center'>
     <div className='bg-[#ffffff] w-[93vw] mt-6 rounded-3xl shadow-md relative'>
     <div className='flex justify-between items-center mb-4'>
        <div className='flex justify-between items-center gap-4'>
                <div className='ml-4 mt-6 w-[27vw] h-[31vw] bg-green-200 rounded-md'></div>
                <div className='flex flex-col mt-7'>
                    <h2 className='font-bold text-[3.8vw]'>Nikon Camera</h2>
                    <button className='px-8 py-1 absolute text-[3vw] border-[1px] border-[#D0D0D0] mt-7 '>XS</button>
                    <div className='flex justify-between gap-[14vw] items-center mt-14'>
                        <div className='flex gap-1'>
                        <h2 className='font-bold text-[5.3vw]'>₹</h2>
                        <h2 className='font-bold text-[5.3vw]'>200</h2>
                        </div>
                        <div className='flex gap-1 mt-2'>
                        <h2 className='font-bold text-[3vw]'>Order ID:</h2>
                        <h2 className='font-bold text-[3vw] opacity-60'>9099878</h2>
                        </div>
                    
                    </div>
                    


                </div>
                <div className='absolute flex flex-col right-4 mb-3 gap-1 items-center'>
                <h2 className='font-bold text-[2.4vw]'>QUANTITY</h2>
                <div className='flex justify-center border-2 gap-5 px-7 py-[0.43vw] items-center'>

                    <h2 className='text-[3vw] font-bold'>1</h2>
                    
                </div>
              
            </div>
            </div>
            
          </div>
        </div>
        </div>
    </>
  )
}

export default Checkoutcardsfinal

