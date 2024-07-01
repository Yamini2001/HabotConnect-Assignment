import React, { useState } from 'react';
import './Home.css';
import { FaBusinessTime, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import backgroundImage from '../images/building1.png'; // Adjust path to your background image
import { useAuth0 } from '@auth0/auth0-react';
import { GoArrowRight } from "react-icons/go";
import HowItWorks from './HowItWorks';
import Footer from './Footer.';


const Home = () => {
    const { loginWithRedirect } = useAuth0();
    const [activeTab, setActiveTab] = useState('buyer');

    const handleTabClick = (tab) => {
        setActiveTab(tab); // Set the active tab based on the parameter ('buyer' or 'supplier')
    };

    return (
        <div className="home-container">
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="overlay">
                <h1>Are You a Supplier?</h1>
                <h2>Explore Matching Opportunities</h2>
                <div className="search-container">
                    <div className="search-bar">
                        <FaBusinessTime className="icon" />
                        <input type="text" placeholder="Search your required service here" />
                    </div>
                    <div className="search-bar">
                        <FaMapMarkerAlt className="icon" />
                        <input type="text" placeholder="Search your required location here" />
                    </div>
                    <button className="search-button">Search</button>
                </div>
                <div className="buyer-info">
                    <span>Are you a buyer?</span>
                    <a href="#post-requirements" className="post-link">Click here if you are looking to post a requirement</a>
                </div>
            </div>
            <div className="info-section">
                <h2>Ready to dive into HABOT?</h2>
                <p>
                    Signing up with HABOT opens the door to a world of new opportunities <br /> and potential for business growth.
                    Gain access to a vibrant community<br /> of like-minded individuals, unlock valuable resources, and take the
                    first step <br />towards realizing your entrepreneurial dreams.
                </p>
            </div>
            <div className="button-container">
                <div className="column">
                    <button className="button">Abu Dhabi</button>
                    <button className="button">Sharjah & Ajman</button>
                    <button className="button">Ras AI Khaimah</button>
                </div>
                <div className="column">
                    <button className="button">Dubai</button>
                    <button className="button">Fujairah</button>
                    <button className="button">Umm AI Quwain</button>
                </div>
            </div>
            <button className="signup-button" onClick={() => loginWithRedirect()}>
                Sign up Today! <GoArrowRight className="icon" />
            </button>
            <div className="additional-box">
                <div className="video-container">
                    <iframe
                        width="600"
                        height="380"
                        src="https://www.youtube.com/embed/IZLp-TZyDkQ"
                        title="Embedded Video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="additional-content">
    <div className="tab-container1">
        <div className={`tab ${activeTab === 'buyer' ? 'active' : ''}`} onClick={() => handleTabClick('buyer')}>
            <h2>Buyer</h2>
            {activeTab === 'buyer' && <div className="orange-underline3"></div>}
        </div>
        <div className={`tab ${activeTab === 'supplier' ? 'active' : ''}`} onClick={() => handleTabClick('supplier')}>
            <h2>Supplier</h2>
            {activeTab === 'supplier' && <div className="orange-underline3"></div>}
        </div>
    </div>
    {activeTab === 'buyer' && (
        <div>
            <div className="tick-icon-text">
                <div className="green-circle">
                    <FaCheck className="green-icon" />
                </div>
                <p>Post your requirements</p>
            </div>
            <div className="tick-icon-text">
                <div className="green-circle">
                    <FaCheck className="green-icon" />
                </div>
                <p>Sit back for multiple suppliers to contact you.</p>
            </div>
            <div className="tick-icon-text">
                <div className="green-circle">
                    <FaCheck className="green-icon" />
                </div>
                <p>Choose among the suppliers based on the ratings and reviews.</p>
            </div>
        </div>
    )}
    {activeTab === 'supplier' && (
        <div>
            <div className="tick-icon-text">
                <div className="green-circle">
                    <FaCheck className="green-icon" />
                </div>
                <p>Complete your profile and get verified.</p>
            </div>
            <div className="tick-icon-text">
                <div className="green-circle">
                    <FaCheck className="green-icon" />
                </div>
                <p>Choose service tags and get notified about each opportunity.</p>
            </div>
            <div className="tick-icon-text">
                <div className="green-circle">
                    <FaCheck className="green-icon" />
                </div>
                <p>Contact buyers, and expand your business.</p>
            </div>
        </div>
    )}
</div>
            </div>
            <div className="supplier-box">
                <div className="text-container">
                    <p>Let Suppliers Find You</p>
                    <div className="orange-underline2"></div>
                </div>
                <button className="get-verified-button">Get Verified</button>
            </div>
            <HowItWorks/>
            <Footer/>
        </div>
    );
};

export default Home;
