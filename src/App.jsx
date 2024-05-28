import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Analytics = lazy(() => import('./pages/Analytics'));
const Storeprofile = lazy(() => import('./pages/Storeprofile'));
const Storeprofileview = lazy(() => import('./pages/Storeprofileview'));
const Userprofile = lazy(() => import('./pages/Userprofile'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Productdelivery = lazy(() => import('./pages/Productdelivery'));
const DeliveryStatus = lazy(() => import('./pages/Deliveryfromme'));
const DeliveryToMe = lazy(() => import('./pages/Deliverytome'));
const ElectronicsPage = lazy(() => import('./pages/Electronics'));
const ServicesPage = lazy(() => import('./pages/Ourservices'));
const PickupDetailsPage = lazy(() => import('./pages/Pickupdetails'));
const PickupTimePage = lazy(() => import('./pages/Pickuptime'));
const ShipmentDetailsPage = lazy(() => import('./pages/Shipment'));
const VerifyDetailsPage = lazy(() => import('./pages/Verification'));

const MiddlemanGroup = lazy(() => import('./pages/Galleryins'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Gallerymiddle = lazy(() => import('./pages/Gallerymiddle'));
const Store = lazy(() => import('./pages/Store'));
const RegistrationPage = lazy(() => import('./pages/Registration'));
const SelectEmailPage = lazy(() => import('./pages/Storeemail'));
const SelectStoreDomainPage = lazy(() => import('./pages/Storedomain'));
const SelectStoreLocation = lazy(() => import('./pages/Storelocation'));
const SelectStoreName = lazy(() => import('./pages/Storename'));
const StorePayment = lazy(() => import('./pages/Storepayment'));
const StoreUPI = lazy(() => import('./pages/Storeupi'));
const Otpverify = lazy(() => import('./pages/Otpverify'));
const SelectCategory = lazy(() => import('./pages/Selectcategory'));
const Highlights = lazy(() => import('./pages/Highlights'));
const CreateProductPage = lazy(() => import('./pages/Createpage'));
const CreateProductPage2 = lazy(() => import('./pages/Createcategory'));
const SelectDefaultOptional = lazy(() => import('./pages/Defaultoptional'));
const AddPriceToOptionals = lazy(() => import('./pages/Addprice'));
const Community = lazy(() => import('./pages/Community'));
const Communitypost = lazy(() => import('./pages/Createcommunity'));


const UploadDocuments = lazy(() => import('./Auth/Aadhar'));
const LocationPage = lazy(() => import('./Auth/Location'));
const Name = lazy(() => import('./Auth/Name'));
const ProfilePictureadded = lazy(() => import('./Auth/Profilepictureadded'));
const AddProfilePicture = lazy(() => import('./Auth/Profilepicture'));
const ResetPassword = lazy(() => import('./Auth/Resetpass'));
const SignIn = lazy(() => import('./Auth/Signin'));
const Signup = lazy(() => import('./Auth/Signup'));
const Verify = lazy(() => import('./Auth/Verify'));
const Createpass = lazy(() => import('./Auth/Createpass'));
const Passport = lazy(() => import('./Auth/Passport'));


// const OptionalsVolume = lazy(() => import('./pages/Optionalsvolume'));
const Optionalsweight = lazy(() => import('./pages/Optionalsweight'));
const Optionalsbakery = lazy(() => import('./pages/Optionalsbakery'));
const Optionalssize = lazy(() => import('./pages/Optionalssize'));
const Optionalsstorage = lazy(() => import('./pages/Optionalstorage'));
const Optionalfootwear = lazy(() => import('./pages/Optionalfootwear'));



const Notification = lazy(() => import('./pages/Notification'));
const Storenotification = lazy(() => import('./pages/Storenotification'));
const Orderandpays = lazy(() => import('./pages/Orderandpays'));
const Payments = lazy(() => import('./pages/Payments'));
const Ongoingorders = lazy(() => import('./pages/Ongoingorders'));
const Deliveredorders = lazy(() => import('./pages/Deliveredorders'));
const Cancelledorders = lazy(() => import('./pages/Cancelledorders'));
const Couponprice = lazy(() => import('./pages/Couponprice'));

const Couponpercent = lazy(() => import('./pages/Couponpercent'));
const CreateCoupon = lazy(() => import('./pages/Createcoupon'));
const Details = lazy(() => import('./pages/Details'));
const Checkoutaddress = lazy(() => import('./pages/Checkoutaddress'));
const Checkoutinfo = lazy(() => import('./pages/Checkoutinfo'));
const Checkoutmain1 = lazy(() => import('./pages/Checkoutmain1'));
const Checkoutmain2 = lazy(() => import('./pages/Checkoutmain2'));
const Receiptsuccess = lazy(() => import('./pages/Receiptsuccess'));
const Productpage = lazy(() => import('./pages/Productpage'));
const Purchases = lazy(() => import('./pages/Purchases'));
const Couponcreated = lazy(() => import('./pages/Couponcreated'));
const Storeregistrationstarting = lazy(() => import('./pages/Storeregistrationstarting'));
const Settingslocation = lazy(() => import('./pages/Settingslocation'));
const Settingsupi = lazy(() => import('./pages/Settingsupi'));
const MyCommunity = lazy(() => import('./pages/Mycommunity'));
const Editcommunity = lazy(() => import('./pages/Editcommunity'));
const Storesettings = lazy(() => import('./pages/Storesettings'));
const Checkoutfinal = lazy(() => import('./pages/Checkoutfinal'));
const CreateProductedit = lazy(() => import('./pages/Createpageedit'));
const Viewallproducts = lazy(() => import('./pages/Viewallproducts'));
const Categoryview = lazy(() => import('./pages/Categoryview'));
const Electronicscategory = lazy(() => import('./pages/Electronicscategory'));
const Accessoriescategory = lazy(() => import('./pages/Accessoriescategory'));
const Clothingcategory = lazy(() => import('./pages/Clothingcategory'));
const Bookscategory = lazy(() => import('./pages/Bookscategory'));
const Morecategory = lazy(() => import('./pages/Morecategory'));
const Grocerycategory = lazy(() => import('./pages/Grocerycategory'));
const WishlistPage = lazy(() => import('./pages/Wishlist'));
const Premium = lazy(() => import('./pages/Premium'));
const Viewallstores = lazy(() => import('./pages/Viewallstores'));
// const Trackorder = lazy(() => import('./pages/Trackorder'));

function App() {
  return (
    <div className='App'>
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

    

          <Route path='/analytics' element={<Analytics/>}/>
          <Route path='/storeprofile' element={<Storeprofile/>}/>
          <Route path='/storeprofileview' element={<Storeprofileview/>}/>
          <Route path='/userprofile' element={<Userprofile/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/deliverproduct' element={<Productdelivery/>}/>
          <Route path='/deliveryfromme' element={<DeliveryStatus/>}/>
          <Route path='/deliverytome' element={<DeliveryToMe/>}/>
          <Route path='/electronics' element={<ElectronicsPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/pickupdetails' element={<PickupDetailsPage/>}/>
          <Route path='/pickuptime' element={<PickupTimePage/>}/>
          <Route path='/shipment' element={<ShipmentDetailsPage/>}/>
          <Route path='/verification' element={<VerifyDetailsPage/>}/>
          <Route path='/galleryins' element={<MiddlemanGroup/>}/>

          <Route path='/' element={<Store/>}/>
          
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/gallerymiddle' element={<Gallerymiddle/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
          <Route path='/storeemail' element={<SelectEmailPage/>}/>
          <Route path='/storedomain' element={<SelectStoreDomainPage/>}/>
          <Route path='/storelocation' element={<SelectStoreLocation/>}/>
          <Route path='/storename' element={<SelectStoreName/>}/>
          <Route path='/storepayment' element={<StorePayment/>}/>
          <Route path='/storeupi' element={<StoreUPI/>}/>
          <Route path='/otpverify' element={<Otpverify/>}/>
          <Route path='/selectcategory' element={<SelectCategory/>}/>
          <Route path='/highlights' element={<Highlights/>}/>
          
          <Route path='/createpage' element={<CreateProductPage/>}/>

          <Route path='/createcategory' element={<CreateProductPage2/>}/>
          <Route path='/defaultoptional' element={<SelectDefaultOptional/>}/>
          <Route path='/addprice' element={<AddPriceToOptionals/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/communitypost' element={<Communitypost/>}/>
          <Route path='/aadhardetails' element={<UploadDocuments/>}/>
          <Route path='/location' element={<LocationPage/>}/>
          <Route path='/name' element={<Name/>}/>
          <Route path='/profilepictureadded' element={<ProfilePictureadded/>}/>
          <Route path='/addprofilepicture' element={<AddProfilePicture/>}/>
          <Route path='/resetpass' element={<ResetPassword/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/createpass' element={<Createpass/>}/>
          <Route path='/passport' element={<Passport/>}/>

          {/* <Route path='/optionalvolume' element={<OptionalsVolume/>}/> */}
          <Route path='/optionalgrocery' element={<Optionalsweight/>}/>
          <Route path='/optionalbakery' element={<Optionalsbakery/>}/>
          <Route path='/optionalclothing' element={<Optionalssize/>}/>
          <Route path='/optionalelectronics' element={<Optionalsstorage/>}/>
          <Route path='/optionalfootwear' element={<Optionalfootwear/>}/>
          

          <Route path='/notification' element={<Notification/>}/>

          <Route path='/storenotification' element={<Storenotification/>}/>
          <Route path='/orderandpays' element={<Orderandpays/>}/>
          <Route path='/payments' element={<Payments/>}/>
          <Route path='/ongoingorders' element={<Ongoingorders/>}/>
          <Route path='/deliveredorders' element={<Deliveredorders/>}/>
          <Route path='/cancelledorders' element={<Cancelledorders/>}/>
          <Route path='/couponprice' element={<Couponprice/>}/>
          <Route path='/couponpercent' element={<Couponpercent/>}/>
          <Route path='/createcoupon' element={<CreateCoupon/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/checkoutaddress' element={<Checkoutaddress/>}/>
          <Route path='/checkoutinfo' element={<Checkoutinfo/>}/>
          <Route path='/checkoutmain1' element={<Checkoutmain1/>}/>
          <Route path='/checkoutmain2' element={<Checkoutmain2/>}/>
          <Route path='/receiptsuccess' element={<Receiptsuccess/>}/>
          <Route path='/product' element={<Productpage/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
          <Route path='/couponcreated' element={<Couponcreated/>}/>
          <Route path='/storestarting' element={<Storeregistrationstarting/>}/>
          <Route path='/settingslocation' element={<Settingslocation/>}/>
          <Route path='/settingsupi' element={<Settingsupi/>}/>
          <Route path='/mycommunity' element={<MyCommunity/>}/>
          <Route path='/editcommunity' element={<Editcommunity/>}/>
          <Route path='/storesettings' element={<Storesettings/>}/>
          <Route path='/checkoutfinal' element={<Checkoutfinal/>}/>
          <Route path='/createproductedit' element={<CreateProductedit/>}/>
          <Route path='/viewallproducts' element={<Viewallproducts/>}/>
          <Route path='/categoryview' element={<Categoryview/>}/>
          <Route path='/electronicscategory' element={<Electronicscategory/>}/>
          <Route path='/clothingcategory' element={<Clothingcategory/>}/>
          <Route path='/morecategory' element={<Morecategory/>}/>
          <Route path='/grocerycategory' element={<Grocerycategory/>}/>
          <Route path='/accessoriescategory' element={<Accessoriescategory/>}/>
          <Route path='/bookscategory' element={<Bookscategory/>}/>
          <Route path='/wishlist' element={<WishlistPage/>}/>
          <Route path='/premium' element={<Premium/>}/>
          <Route path='/viewallstores' element={<Viewallstores/>}/>
          {/* <Route path='/trackorder' element={<Trackorder/>}/> */}
        </Routes>

        </Suspense>
      </Router>
    </div>
  )
}

export default App
