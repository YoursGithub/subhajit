import React from 'react'
import './style.css'; 
import backoption from '../images/back.png';
import person from '../images/person.svg';
import forward from '../images/forward.svg';
import globe from '../images/Vector (4).svg';
import circle1 from '../images/Frame 372.svg';
import circle2 from '../images/Vector (6).svg';
import circle3 from '../images/Vector (7).svg';
import circle4 from '../images/add_shopping_cart.svg';
import circle5 from '../images/time-past (1).svg';
import circle6 from '../images/Vector (8).svg';
import circle7 from '../images/Vector (9).svg';
import circle8 from '../images/Vector (10).svg';
import profilepic from '../images/Subhajit.jpg'
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
import Desktopheader from '@/components/Desktopheader';
import Desktopfooter from '@/components/Desktopfooter';


function Userprofile() {
  return (
    
      <>
      <div className='forscroll'>
      <section className="lg:hidden">
    
    <div className="flex justify-center">
        <div className="w-[93vw] rounded-3xl h-[40vw] mt-4 bg-[#2D332F]">
            <img className="w-[10vw] ml-[83%] mt-6" src={backoption} alt=""/>
            <div className="flex gap-4 ml-4 mt-[-5%] ">
                <div className="rounded-full w-[7vh] h-[7vh] bg-green-200 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${profilepic})`}}></div>
                <div className="flex flex-col mt-[-1%]">
                    <div className="flex items-center gap-3">
                    <h2 className="text-white font-bold text-[7vw]">Kunal Deb</h2>
                    <div className="rounded-full bg-green-500 w-[1vh] h-[1vh]  mt-1"></div>
                </div>
                <div className="flex gap-3">
                <img className="w-[1.5vh]" src={person} alt=""/>
                <p className="text-white opacity-50 text-[3.5vw]">kunal_deb009</p>
            </div>
                </div>
            </div>
            
        </div>

    </div>
    <div className="flex justify-center items-center">
        <div className="w-[93vw]  bg-[#EDEDED] mt-6 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-3 items-center">
                <div className="w-[16vw] h-[16vw] bg-[#094446] ml-4 mt-6 rounded-xl flex justify-center">
                    <img className="w-[8vw]" src={globe} alt=""/>
                </div>
                <div className="flex-col mt-4">
                    <h2 className="font-bold opacity-70">Shyamaprasad Road Ka...</h2>
                    <h3 className="font-bold text-[3vw] text-[#787878] mt-1"><span className="font-bold text-[#094446] text-[3.5vw]">Pincode:</span>  788711</h3>
                </div>
            </div>
                <img className="mr-4 mt-5 w-[11vw]" src={forward} alt=""/>
            </div>
        </div>
    </div>
    <div className="flex justify-center ">
      <div className="w-[93vw] mt-7 px-2">
        <div className="flex gap-6 items-center">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle1} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">Report Issue</p>
    </div>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle2} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">About</p>
    </div>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle3} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B] ">Send Feedback</p>
    </div>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle4} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">Purchase History</p>
    </div>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle5} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">Change Password & Email</p>
    </div>
    <AlertDialog>
    <AlertDialogTrigger>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle6} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">Delete Account</p>
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
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle7} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">Help</p>
    </div>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle8} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">Legal</p>
    </div>
      </div>
    </div>
   <AlertDialog>
    <AlertDialogTrigger>
    <button className=" bg-[#094446] font-bold text-white py-3 text-[3.7vw] px-4 rounded-xl ml-44 mb-4">Sign Out</button>
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
   <section className="hidden lg:block">
      <Desktopheader/>

      <div className="ml-32 mt-20 flex gap-36">
        <div className="sticky">
          <div className="bg-[#2D332F] mt-20 p-10 rounded-3xl w-[450px] flex">
            <div className='w-[60px] h-[60px] bg-green-200 rounded-full bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${profilepic})`}}></div>
            <div className="ml-6 text-white">
              <p className="font-extrabold text-2xl">Kunal Deb <span className="ml-2 text-green-500">&bull;</span></p>
              <div className="flex mt-3 gap-2">
                <img src={person} alt="Person icon" className="w-4 h-4" />
                <p className="text-xs mt-[2px] text-[#C5C5C5]">kunal_deb009</p>
              </div>
            </div>
          </div>

          <a href="#" className="p-2 w-72 mt-36 ml-16 rounded-full py-4 bg-[#094446] text-lg text-center block">
            <div>
              <p className="text-white">Sign Out</p>
            </div>
          </a>
        </div>

        <div>
          <div className="bg-[#EDEDED] mt-20 p-8 rounded-3xl w-[650px] flex gap-6">
            <div className="bg-[#094446] w-14 h-14 rounded-lg flex items-center justify-center">
              <img src={globe} alt="Earth icon" className="w-6" />
            </div>

            <div>
              <p className="font-extrabold text-xl text-[#4A4F4C]">Shyama Prasad Road, Karimganj</p>
              <p><span className="text-[#094446]">Pincode :</span> 788711</p>
            </div>

            <a href="#" className="ml-auto mt-2">
              <img src={forward} alt="Frame icon" className="w-10" />
            </a>
          </div>

          <div className="flex border p-10 w-[650px] h-[300px] mt-5 rounded-xl gap-28 text-[16px] shadow-xl">
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="bg-[#2B2B2B] w-10 h-10 items-center justify-center flex rounded-full">
                  <img src={circle1} alt="Report icon" />
                </div>
                <p className="font-extrabold text-[#9B9B9B] mt-2">Report Issue</p>
              </div>

              <div className="flex gap-5">
                <div className="bg-[#2B2B2B] w-10 h-10 items-center justify-center flex rounded-full">
                  <img src={circle2} alt="Face icon" />
                </div>
                <p className="font-extrabold text-[#9B9B9B] mt-2">About</p>
              </div>

              <div className="flex gap-5">
                <div className="bg-[#2B2B2B] w-10 h-10 items-center justify-center flex rounded-full">
                  <img src={circle3} alt="Feedback icon" />
                </div>
                <p className="font-extrabold text-[#9B9B9B] mt-2">Send Feedback</p>
              </div>

              <div className="flex gap-5">
                <div className="bg-[#2B2B2B] w-10 h-10 items-center justify-center flex rounded-full">
                  <img src={circle4} alt="Cart icon" />
                </div>
                <p className="font-extrabold text-[#9B9B9B] mt-2">Purchase History</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="bg-[#2B2B2B] w-10 h-10 items-center justify-center flex rounded-full">
                  <img src={circle5} alt="Clock icon" />
                </div>
                <p className="font-extrabold text-[#9B9B9B] mt-2">Change Password & Email</p>
              </div>

              <div className="flex gap-5">
                <div className="bg-[#2B2B2B] w-10 h-10 items-center justify-center flex rounded-full">
                  <img src={circle6} alt="Dustbin icon" />
                </div>
                <p className="font-extrabold text-[#9B9B9B] mt-2">Delete Account</p>
              </div>

              <div className="flex gap-5">
                <div className="bg-[#2B2B2B] w-10 h-10 items-center justify-center flex rounded-full">
                  <img src={circle7} alt="Help icon" />
                </div>
                <p className="font-extrabold text-[#9B9B9B] mt-2">Help</p>
              </div>

              <div className="flex gap-5">
                <div className="bg-[#2B2B2B] w-10 h-10 items-center justify-center flex rounded-full">
                  <img src={circle8} alt="Legal icon" />
                </div>
                <p className="font-extrabold text-[#9B9B9B] mt-2">Legal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Desktopfooter/>
    </section>
   </div>
      </>
    
  )
}

export default Userprofile
