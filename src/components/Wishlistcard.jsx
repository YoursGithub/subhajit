import React,{useState} from 'react'
import '@/pages/style.css'

function Wishlistcard({showCheckbox, productValue, onCheckboxChange }) {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCheckboxChange(!isChecked, productValue); 
  };
  return (
    <>
    <div className="flex px-4 py-5 gap-[5vw] p-[20px] justify-between">
      <div className="relative">
        <div className="h-[45vw] w-[37vw] bg-red-400 rounded-lg"></div>
        <div className="absolute top-0 right-0">
          <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-1 right-1  flex justify-center items-center">
            <div className="heart-container" title="Like">
      
              <input type="checkbox" className="checkbox w-[1vw]" id="Give-It-An-Id"/>
          
              <div className="svg-container">
                <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="10,10 20,20"></polygon>
                  <polygon points="10,50 20,50"></polygon>
                  <polygon points="20,80 30,70"></polygon>
                  <polygon points="90,10 80,20"></polygon>
                  <polygon points="90,50 80,50"></polygon>
                  <polygon points="80,80 70,70"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-semibold text-[4vw]">Shyamaprasad Road Karimganj</p>
        <div>
          <p className="font-bold text-[5vw]">₹ {productValue}</p>
          <div className="flex justify-between">
            <div className="flex gap-1 my-5">
              <button className="px-3 py-1 text-[3.8vw] font-semibold rounded-full" style={{ border: '1px solid rgb(0, 0, 0)' }}>Remove</button>
              <button className="px-3 py-1 rounded-full  text-white font-semibold text-[3.8vw]" style={{ backgroundColor: '#343434' }}>Rent now</button>
            </div> 
            <div className="flex items-center" style={{ color: '#094446' }}>
            {showCheckbox && (
              <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox accent-[#094446] h-5 w-5"
            />
            )}
                
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Wishlistcard
