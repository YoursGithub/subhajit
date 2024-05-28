import React, { useEffect, useState } from 'react';
import './style.css';

function Kutta() {

  const [buttonStyle, setButtonStyle] = useState({
    // Initial button styles
    position: 'absolute',
    left: '65%',
    // Add other non-responsive styles here
  });

  useEffect(() => {
    const handleResize = () => {
      // Update button styles based on screen width
      if (window.innerWidth >= 799) {
        setButtonStyle(prevStyle => ({
          ...prevStyle,
          left: '72%'
        }));
      } else if (window.innerWidth >= 750) {
        setButtonStyle(prevStyle => ({
          ...prevStyle,
          left: '72%'
        }));
      } else {
        setButtonStyle(prevStyle => ({
          ...prevStyle,
          left: '65%'
        }));
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [windowmar, setWindowmar] = useState({
    // Default marginTop
    marginTop: '56%'
  });

  useEffect(() => {
    const handleResize = () => {
      // Define styles for different window widths
      if (window.innerWidth >= 799) {
        setWindowmar({
          marginTop: '36%'
        });
      } else if (window.innerWidth >= 750) {
        setWindowmar({
          marginTop: '36%'
        });
      } else {
        // Default styles for smaller screens
        setWindowmar({
          marginTop: '56%'
        });
      }
    };

    // Call the function once to set the initial style
    handleResize();

    // Add event listener for subsequent window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [selectedOption, setSelectedOption] = useState('Today');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setMenuOpen(false);
  };

  return (
    <>
      <section className="lg:hidden" style={windowmar}>
        <div className="fixed bg-[#fff] z-60 kutta">
          <div className="flex justify-between items-center px-3 mt-6">
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">ANALYTICS</h2>
                <div className="rounded-full bg-green-500 w-[1vh] h-[1vh]  mt-1"></div>
              </div>
              <p className="font-bold opacity-50 text-[3vw]">See Your Business Insights & Store Metrics</p>
            </div>
            <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
              <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708" />
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center mt-12">
            <div className="dropdown ml-4 ">
              <div className="select border-[1px] border-[#AFAFAF] rounded-xl font-bold" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="selected">{selectedOption}</span>
                <div className={`caret ${menuOpen ? 'caret-rotate' : ''}`}>
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="15.9091" y1="1.63956" x2="7.7021" y2="9.84654" stroke="#272727" strokeWidth="2.4608" />
                    <line x1="0.870025" y1="1.26865" x2="7.83034" y2="8.22896" stroke="#272727" strokeWidth="2.4608" />
                  </svg>
                </div>
              </div>
              <ul className={`menu font-bold ${menuOpen ? 'menu-open' : ''}`}>
                <li className={selectedOption === 'Today' ? 'active' : ''} onClick={() => handleOptionSelect('Today')}>Today</li>
                <li className={selectedOption === 'Yesterday' ? 'active' : ''} onClick={() => handleOptionSelect('Yesterday')}>Yesterday</li>
                <li className={selectedOption === 'Last Month' ? 'active' : ''} onClick={() => handleOptionSelect('Last Month')}>Last Month</li>
                <li className={selectedOption === 'Last Year' ? 'active' : ''} onClick={() => handleOptionSelect('Last Year')}>Last Year</li>
              </ul>
            </div>

            <button style={buttonStyle} className="printdata font-semibold px-6 py-2 bg-[#131312] text-white text-[4vw] rounded-lg absolute left-[65%] ">Print Data</button>

          </div>
          <div className="flex justify-center">
  <div style={windowmar} className="mainwindow w-[95vw] border-[1px] border-[#AFAFAF] mt-[56%] rounded-xl p-3 ">
    <div className="flex flex-col gap-4 ml-2">
      <h3 className="font-bold text-[4.5vw]">Total Customers</h3>
      <div className="flex items-center gap-2">
        <h3 className="font-bold text-[9vw] text-[#094446]">760</h3>
        <p className="mt-2 font-bold opacity-50 text-[3vw]">customers engaged to your store.</p>
      </div>
    </div>
  </div>
  
</div>
<div className="flex justify-center">
  <div className="w-[95vw]  border-[1px] border-[#AFAFAF] mt-4 rounded-xl p-3">
    <h2 className="font-bold text-[4.5vw]">Top Ordered item</h2>
    <div className="flex justify-between">
      <div className="flex flex-col gap-7 mt-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold opacity-60 text-[4vw]">Product Lifetime Sell</h3>
          <div className="flex gap-2 items-center">
            <h3 className="font-bold text-[6vw] text-[#094446]">100</h3>
            <p className="mt-2 font-bold opacity-50 text-[3vw]">pieces sold</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold opacity-60 text-[4vw]">Contributing About</h3>
          <div className="flex gap-2 items-center">
            <h3 className="font-bold text-[6vw] text-[#094446]">0.00%</h3>
            <p className="mt-2 font-bold opacity-50 text-[3vw]">of the store Sales</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 mt-[-6%] mr-3">
        <div className="w-[30vw] h-[35vw] bg-green-200 rounded-md"></div>
        <h3 className="font-bold text-[3vw]">Canon xyz Camera</h3>
      </div>
    </div>
  </div>
</div>
<div className="flex justify-center">
  <div className="w-[95vw]  border-[1px] border-[#AFAFAF] mt-4 rounded-xl p-3">
    <div className="flex justify-between">
      <div className="flex flex-col gap-7 ml-2">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold opacity-60 text-[4.4vw]">Total Store Visitors</h3>
          <h3 className="font-bold text-[8vw] text-[#094446]">800K</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold opacity-60 text-[4.4vw]">Conversion Rate</h3>
          <h3 className="font-bold text-[8vw] text-[#094446]">0.00%</h3>
        </div>
      </div>
      <div className="flex flex-col gap-7 mr-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold opacity-60 text-[4.4vw]">New Store Visitors</h3>
          <h3 className="font-bold text-[8vw] text-[#094446]">10K</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold opacity-60 text-[4.4vw]">Conversion Rate From New Visitors</h3>
          <h3 className="font-bold text-[8vw] text-[#094446]">0.00%</h3>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex justify-center">
  <div className="w-[95vw] border-[1px] border-[#AFAFAF] mt-4 rounded-xl p-3 ">
    <div className="flex flex-col gap-4 ml-2">
      <h3 className="font-bold text-[4.5vw]">Average order value</h3>
      <div className="flex items-center gap-2">
        <h3 className="font-bold text-[9vw] text-[#094446]">₹ 760</h3>
        <p className="font-bold opacity-50 text-[3vw]">is the average item price that your customer purchases</p>
      </div>
    </div>
  </div>
  
</div>
<div className="flex justify-center">
  <div className="w-[95vw] border-[1px] border-[#AFAFAF] mt-4 rounded-xl p-3 ">
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-7 ">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold opacity-60 text-[4.4vw]">Revenue From Store</h3>
          <h3 className="font-bold text-[8vw] text-[#094446]">800K</h3>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <h3 className="font-semibold opacity-60 text-[4.4vw]">Tax Amount</h3>
             <p className="font-bold opacity-40 text-[3vw]">Platform tax, GST, Middleman</p>
          </div>
          <h3 className="font-bold text-[8vw] text-[#094446]">40K</h3>
        </div>
      </div>
      <div className="flex flex-col gap-7 mt-4">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold opacity-60 text-[4.4vw]">Net Profit From Store</h3>
          <h3 className="font-bold text-[8vw] text-[#094446]">760K</h3>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <h3 className="font-semibold opacity-60 text-[4.4vw]">Store Performance</h3>
             <p className="font-bold opacity-40 text-[3vw]">Compared to last month</p>
          </div>
          <div className="flex flex-col">
          <h3 className="font-bold text-[8vw] text-[#094446]">+0.00%</h3>
          <p className="font-bold opacity-40 text-[2.4vw]">Difference compared to last month</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex justify-center">
  <div className="w-[95vw] border-[1px] border-[#AFAFAF] mt-4 rounded-xl p-3">
    <div className="flex justify-between px-2">
      <div className="flex flex-col gap-5">
        <h3 className="font-bold text-[4.5vw]">Gender</h3>
        <div className="flex flex-col gap-2">
          <p className="text-[4vw] font-bold" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Male : <span className="font-bold text-[5vw]" style={{ color: '#094446' }}>0.00%</span></p>
          <p className="text-[4vw] font-bold" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Female : <span className="font-bold text-[5vw]" style={{ color: '#094446' }}>0.00%</span></p>
          <p className="text-[4vw] font-bold" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Others : <span className="font-bold text-[5vw]" style={{ color: '#094446' }}>0.00%</span></p>
        </div>        
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="font-bold text-[4.5vw]">Age Group</h3>
        <div className="flex flex-col gap-2">
          <p className="text-[4vw] font-bold" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>18 - 24 : <span className="font-bold text-[5vw]" style={{ color: '#094446' }}>0.00%</span></p>
          <p className="text-[4vw] font-bold" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>25 - 35 : <span className="font-bold text-[5vw]" style={{ color: '#094446' }}>0.00%</span></p>
          <p className="text-[4vw] font-bold" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>36 - 50 : <span className="font-bold text-[5vw]" style={{ color: '#094446' }}>0.00%</span></p>
        </div>        
      </div>
    </div>
  </div>
</div>
<div className="flex justify-center mb-12">
  <div className="w-[95vw] border-[1px] border-[#AFAFAF] mt-4 rounded-xl p-3">
    <div className="flex justify-between items-center px-2">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <h3 className="font-bold text-[4.3vw]">Confirmed Orders</h3>
          <p className="font-bold opacity-40 text-[2.4vw]">Total confirmed orders from your store</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-[4.3vw]">Cancelled Orders</h3>
          <p className="font-bold opacity-40 text-[2.4vw]">Total cancelled orders from your store</p>
        </div>
      </div>
      <div className="flex gap-7 items-center mt-1">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h3 className="font-bold text-[4vw] text-[#094446]">400</h3>
            <p className="font-bold opacity-40 text-[2.4vw]">Number</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[4vw] text-[#094446]">80</h3>
            <p className="font-bold opacity-40 text-[2.4vw]">Number</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h3 className="font-bold text-[4vw] text-[#094446]">₹ 400k</h3>
            <p className="font-bold opacity-40 text-[2.4vw]">Number</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[4vw] text-[#094446]">₹ 90k</h3>
            <p className="font-bold opacity-40 text-[2.4vw]">Number</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Your other content goes here */}
    </>
  );

};

export default Kutta;
