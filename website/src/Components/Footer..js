// Footer.js

import React from 'react';
import './Footer.css';
import logo from '../images/Habot1.png'; // Adjust the path to your logo image
import { FaCopyright } from 'react-icons/fa';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// import { AiFillLinkedin, AiFillTwitterCircle, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer">
            <hr className="footer-line" />
            <div className="footer-content">
                <div className="footer-left">
                    <img src={logo} alt="Habot Logo" className="footer-logo" />
                    <div className="footer-text">
                        <div className="circle-icon1">
                            <FaCopyright className="copyright-icon" />
                        </div>
                        <span>R Singhania</span>
                    </div>
                </div>
                <div className="footer-section">
                           <h3>Company</h3>
                      <p>About</p>
                    <p>FAQ</p>
                </div>
                <div className="footer-section">
                      <h3>Terms</h3>
                <p>Data Privacy</p>
                <p>Terms</p>
                <p>Accessibility</p>
            </div>
               <div className="footer-section">
                   <h3>Related</h3>
          <p>
            Find Buyer
          </p>
          <p>Feedback</p>
        </div>
    <div className="footer-text1">
                        <div className="circle-icon">
                            <FaLinkedin className="social-icon" />
                        </div>
                        <div className="circle-icon">
                            <FaTwitter className="social-icon" />
                        </div>
                        <div className="circle-icon">
                            <FaFacebook className="social-icon" />
                        </div>
                        <div className="circle-icon">
                            <FaInstagram className="social-icon" />
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"></div>
         </div>
        
    );
};

export default Footer;
