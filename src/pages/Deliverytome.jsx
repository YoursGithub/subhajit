import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import your custom CSS file
import logo from '../images/images2/desktop icons/logo.png'; // Import logo image
import backIcon from '../images/images2/mobile icons/BACK OPTION.png'; // Import back icon image
import deliveryIcon from '../images/images2/mobile icons/delivery.png'; // Import delivery icon image
import confirmedIcon from '../images/images2/mobile icons/confirmed.png'; // Import confirmed icon image
import cancelIcon from '../images/images2/mobile icons/cancel.png'; // Import cancel icon image

const DeliveryToMe = () => {
  const [deliveries] = useState([
    {
      date: '23 July, 2023',
      name: 'Pratham Mazumdar',
      id: '9099877',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quae in, repellendus modi sit autem!',
      status: 'Delivered',
    },
    {
      date: '23 July, 2023',
      name: 'Tanmoy Chakraborty',
      id: '9099877',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dignissimos.',
      status: 'Delivered',
    },
    {
      date: '23 July, 2023',
      name: 'Soumyadeep Ghose',
      id: '9099877',
      description: 'MSI GF75 Thin laptop',
      status: 'Cancelled',
    },
  ]);

  return (
    <>
    <div className='forscroll'>
    <section className="md:hidden">
      <div className="flex m-3">
        <div className="mt-1">
          <Link href="index.html" className="flex items-center text-white">
            <img src={logo} alt="Your Logo" className="mt-5 w-10" />
          </Link>
        </div>
        <div className="ml-auto mt-5 md:mt-5 pr-3 sm:pr-2">
          <img src={backIcon} alt="" className="w-10" />
        </div>
      </div>

      <div className="p-10 ml-5 mt-14 rounded-2xl mr-40 py-6 bg-[#EFEFEF]" style={{ width: '230px', overflow: 'hidden' }}>
        <h2 className="font-black text-2xl font-gotham-black mr-5 ml-[-25px]">
          Delivery <br /> to me<span className="text-red-500"> &bull;</span>
        </h2>
        <p className="text-[#6B6B6B] mt-4 ml-[-25px]">See all the deliveries you have received </p>
      </div>

    
      <div className="mt-10">
        {deliveries.map((delivery, index) => (
          <div key={index} className="border border-[#8F8F8F] p-10 m-5 rounded-lg relative">
            <div className="flex">
              <div className="flex-wrap">
                <div className="mt-[-21px] text-[13px]">
                  <p className="ml-[-28px] font-bold">{delivery.date}</p>
                  <h2 className="text-[#094446] ml-[-28px] text-[16px] font-gotham-black font-extrabold">{delivery.name}</h2>
                  <p className="ml-[-28px] text-[15px] mt-1">Delivery ID: <span className="text-[#A5A5A5] text-[13px]">{delivery.id}</span></p>
                  <div className="ml-[-28px] mt-10 flex">
                    <h4 className="text-[17px]">{delivery.description}</h4>
                  </div>
                </div>
                <div className="absolute top-5 right-3">
                  <p className="font-extrabold text-[12px]">ESTIMATED DELIVERY TIME</p>
                  <div className="flex">
                    <img src={deliveryIcon} alt="" className="w-9 h-9 ml-6 mt-2" />
                    <div>
                      <p className="text-[12px] ml-2 mt-1">July 7, 2023</p>
                      <p className="text-[12px] ml-2 mt-1">09:00 - 09:30 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-12 right-3">
              <div className="flex">
                <img src={delivery.status === 'Delivered' ? confirmedIcon : cancelIcon} alt="" className="w-7 h-7 ml-2 mt-12" />
                <p className="ml-2 mt-12">{delivery.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    </>
  );
};

export default DeliveryToMe;
