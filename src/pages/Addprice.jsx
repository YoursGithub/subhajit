import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import back from '../images/images3/back.png';
import menudesktop from '../images/menu icon.png'
import backdesktop from '../images/back desktop.png'
import frame397 from '../images/images3/Frame 397.png';
import frame404 from '../images/images3/Frame 404.png';
import frame402 from '../images/images3/Frame 402.png';
import frame403 from '../images/images3/Frame 403.png';
import frame405 from '../images/images3/Frame 405.png';
import frame407 from '../images/images3/Frame 407.png';
import OptionalsContext from '../context/OptionalContext';
import { db } from "../../firebase.js";
import { doc, setDoc, arrayUnion, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function AddPriceToOptionals() {
    const storeID = "Store-0001";
    const productID = "Store-0001-Product-0001";
    const { selectedOptions, setSelectedOptions, productType } = useContext(OptionalsContext);
    const [optionDetails, setOptionDetails] = useState([]);
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState({});

    const updateOptionDetail = (index, detailType, value) => {
        setOptionDetails(prevDetails => {
            const newDetails = [...prevDetails];
            if (!newDetails[index]) {
                newDetails[index] = { discount: '', mrp: '', itemPrice: '' };
            }
            newDetails[index][detailType] = value;
            return newDetails;
        });
    };

    const toggleDetails = (index) => {
        setShowDetails(prevState => ({
           ...prevState,
            [index]:!prevState[index]
        }));
    };

    const removePound = (index) => {
        setSelectedOptions(prevOptions => prevOptions.filter((_, i) => i!== index));
    };

    const sendData = async (e) => {
        e.preventDefault();
        console.log("Pushing Data ---->")
        try {
            const docRef = doc(db, "Store", storeID, "Products", productID, "Optionals", productType);
            const optionsWithDetails = selectedOptions.map((option, index) => ({
                option,
               ...optionDetails[index]
            }));
            await setDoc(docRef, {
                Optionals: optionsWithDetails,
            });
            console.log('Data Pushed Succesfully <----');
            navigate("/createPage");
        } catch (error) {
            console.log("Error while sending data to firebase: ", error);
        }
    };

    return (
        <>
        <section className="lg:hidden">
            <button onClick={()=>{console.log(selectedOptions)}}>TEST</button>
            <div className="w-full h-[12vh] flex p-[20px] justify-between">
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={frame397} alt="" />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <Link to="/createpage"><img className="w-12" src={back} alt="" /></Link>
                </div>
            </div>

            <p className="mx-5 font-extrabold text-[5.5vw]">Add Price To Your Optionals</p>
            <p className="mx-5 text-[#636363] text-[3.5vw] pb-3">All the optional will have the default pricing entered while adding product. </p>

            <div className="mx-5 my-3 p-3 flex flex-row border border-[#094446] border-dotted rounded-lg items-center gap-2 w-[37%] mb-[30px]">
                <img className="w-6" src={frame407} alt="" />
                <p className="text-[#094446] text-[13px] font-bold">Add Optional</p>
            </div>

            <div className="flex justify-center items-center ">
                <hr className="w-[95%]" style={{ borderTop: '1.5px dashed #848484' }} />
            </div>

    

            {selectedOptions.map((option, index) => (
                <div key={index}>
                    <div className="flex justify-between mx-5 my-5">
                        <p className="text-[4vw] text-[#094446] font-bold">{option}</p>
                        <div className="flex justify-center items-center gap-9">
                            <button className="px-5 py-1 bg-[#094446] text-[3.5vw] text-white border rounded-lg font-bold" onClick={() => toggleDetails(index)}>
                                {showDetails[index]? 'Hide' : 'Price'}
                            </button>
                            <img className="w-6 h-7" src={frame404} alt="" onClick={() => removePound(index)} />
                        </div>
                    </div>
<<<<<<< HEAD
                    {pound.showDetails && (
                        <div>
                        <div className="flex flex-row items-center justify-center gap-1 my-2" id={`myDIV${pound.id}`}>
                            <div className="my-3 px-3 py-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px] flex-row gap-1">
                                <img className="h-5" src={frame403} alt="" />
                                <input type="text" id="phone-input" className="text-[#989898] w-[80px]
                                text-[11px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="Discount" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
                            </div>
                            <div className="my-3 px-3 py-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px] flex-row gap-1">
                                <img className="h-3" src={frame402} alt="" />
                                <input type="text" id="phone-input" className="text-[#989898] w-[80px] text-[11px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="MRP Price" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
                            </div>
                            <div className="my-3 px-3 py-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex mb-[30px] flex-row gap-1 items-center justify-center">
                                <img className="h-5" src={frame405} alt="" />
                                <input type="text" id="phone-input" className="text-[#989898] w-[80px]
                                 text-[11px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="Item Price" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
=======
                    {showDetails[index] && (
                        <div className="flex flex-row items-center justify-center gap-1 my-2">
                            <div className="my-3 px-3 py-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px] flex-row gap-1">
                                <img className="h-5" src={frame403} alt="" />
                                <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="Discount" onChange={(e) => updateOptionDetail(index, 'discount', e.target.value)} onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
                            </div>
                            <div className="my-3 px-3 py-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px] flex-row gap-1">
                                <img className="h-3" src={frame402} alt="" />
                                <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="MRP Price" onChange={(e) => updateOptionDetail(index, 'mrp', e.target.value)} onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
                            </div>
                            <div className="my-3 px-3 py-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex mb-[30px] flex-row gap-1 items-center justify-center">
                                <img className="h-5" src={frame405} alt="" />
                                <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="Item Price" onChange={(e) => updateOptionDetail(index, 'itemPrice', e.target.value)} onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
>>>>>>> ed5b998a6e830c094745f3276fbd1c54de38080c
                            </div>
                        </div>
                       
                        <p className="mx-5 font-extrabold text-xl ">Product Stock Quantity</p>
                        <div className='flex justify-between items-center px-5 mt-4'>
                                  <div className=" px-4 py-3  border-dotted border-[2px] rounded-[15px] border-[#848484] flex justifu-right ">
                                      <input type="number" id="phone-input" className="text-[#636363] text-[13px] w-[100%] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#ffffff]" placeholder="700" onChange={(e) => setProductStockQuantity(e.target.value)}/>
                                  </div>
                                  <p className='text-[3vw] ml-12'>(Add your total product stock quantity)</p>
                                  </div>
                                  <div className='flex justify-center'>
                                    <hr className='mt-6 w-[90vw]'/>
                                  </div>
                                  </div>
                    )}
                </div>
            ))}
<Link to='/createpage'>
<button className="text-[#ffffff] text-[4vw] py-3 px-20 bg-[#000000]  rounded-full font-bold fixed bottom-4 left-[23%]" onClick={sendData}>
        Confirm
    </button>
    </Link>
        </section>
         <section className="hidden lg:block">

         <div className="w-full flex justify-between px-5 py-5 absolute top-0">
             <div className="flex items-center justify-center relative">
                 <img className="w-[10vw]" src={menudesktop} alt="" />
                 <p className="absolute text-[#ffffff] font-bold mr-[50px]">Menu</p>
             </div>
             <div className="flex items-center justify-center relative">
                 <img className="w-[7vw]" src={backdesktop} alt="" />
                 <p className="absolute text-[#000] font-bold">Back</p>
             </div>
         </div>

         <div className="flex justify-center items-center h-screen">

             <div className="w-[55%]">

                 <div className="flex justify-between mx-5 my-5 w-[50%]">
                     <div>
                         <p className="text-[18px] font-extrabold">1.5 Pounds</p>
                         <p className="text-[15px] text-[#646464] font-bold">Default Optional</p>
                     </div>
                     <button className="px-5 py-2 bg-[#343434] text-[18px] text-white border rounded-lg font-bold">Change</button>
                 </div>

                 <p className="mx-5 font-extrabold text-[30px] mt-[40px]">Add Price To Your Optionals</p>
                 <p className="mx-5 text-[#636363] text-[20px] pb-3 w-[80%]">All the optional will have the default pricing entered while adding product. </p>

                 <div className="mx-5 mt-[15px]">
                     <button className="px-[90px] py-4 bg-[#343434] text-[15px] text-white font-bold border rounded-full">Confirm</button>
                 </div>

             </div>

             <div className="w-[45%] mx-5">
                 <div className="mx-5 my-3 p-3 flex flex-row border border-[#094446] border-dotted rounded-lg items-center gap-2 w-[37%] mb-[30px]">
                     <img className="w-6" src={frame407} alt="" />
                     <p className="text-[#000] text-[15px] font-bold">Add Optional</p>
                 </div>

                 {selectedOptions.map((option, index) => (
                <div key={index}>
                    <div className="flex justify-between mx-5 my-5">
                        <p className="text-[4vw] text-[#094446] font-bold">{option}</p>
                        <div className="flex justify-center items-center gap-9">
                            <button className="px-5 py-1 bg-[#094446] text-[3.5vw] text-white border rounded-lg font-bold" onClick={() => toggleDetails(index)}>
                                {showDetails[index]? 'Hide' : 'Price'}
                            </button>
                            <img className="w-6 h-7" src={frame404} alt="" onClick={() => removePound(index)} />
                        </div>
                    </div>
                    {showDetails[index] && (
                        <div className="flex flex-row items-center justify-center gap-1 my-2">
                            <div className="my-3 px-3 py-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px] flex-row gap-1">
                                <img className="h-5" src={frame403} alt="" />
                                <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="Discount" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
                            </div>
                            <div className="my-3 px-3 py-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px] flex-row gap-1">
                                <img className="h-3" src={frame402} alt="" />
                                <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="MRP Price" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
                            </div>
                            <div className="my-3 px-3 py-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex mb-[30px] flex-row gap-1 items-center justify-center">
                                <img className="h-5" src={frame405} alt="" />
                                <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="Item Price" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
                            </div>
                        </div>
                    )}
                </div>
            ))}

             </div>

         </div>

         <div className="absolute bottom-[10px] flex justify-center items-center">
             <p className="mx-5 text-[12px]">©2024 Tnennt All rights reserved.</p>
             <img width="30px" className="absolute left-[49vw]" src={frame397} alt="" />
         </div>

     </section>
     </>
    );
}

export default AddPriceToOptionals;