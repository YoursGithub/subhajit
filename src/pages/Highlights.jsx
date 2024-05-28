import React from 'react';
import Stories from 'react-insta-stories';
import './highlights.css'; // Import regular CSS file
import cross from '../images/cross (2).png';

function Highlights() {

    const story = [{
        customComponent: (
            <div>
                <img className='' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg" alt="Local Profile" />
            </div>
        ),
        header: {
            heading: 'Jain Brothers',
            subheading: 'Posted 5 mins ago',
            profileImage: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg'
        },
        
        className: 'my-custom-class'
    }];

    return (
        <>
            <Stories
                stories={story}
                defaultInterval={15000}
                width="100vw"
                height="100vh"
                />
            <img className='cross' src={cross} alt="" />
            <button className='save-button'>Save</button>
        </>
    );
}

export default Highlights;
