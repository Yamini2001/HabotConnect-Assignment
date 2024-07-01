// HowItWorks.js

import React from 'react';
import './HowItWorks.css';
import { BsCheckCircleFill } from "react-icons/bs";
import {FaHandshake ,FaPencilAlt,FaSearch,FaFileAlt} from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { PiPencilSimple } from "react-icons/pi";
import { RiNewspaperFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { LuPlusCircle } from "react-icons/lu";

const HowItWorks = () => {
    return (
        <div className="how-it-works">
            <h2>How it works?</h2>
            <p>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with <br/>potential buyers, and build successful business relationships, sharing valuable feedback.</p>
            <div className="card-container">
                <div className="card">
                <div className="custom-icon">
                    <IoPersonSharp className="person-icon" />
                    <LuPlusCircle className='plus-icon'/>
                    </div>
                    <p>Select Your Role with <br/>Sign Up</p>
                </div>
                <div className="card">
                <div className="custom-icon">
                <BsCheckCircleFill className="tick-icon1" />
                <FaFileAlt className="card-icon2" />
                    </div>
                    <p>Buyers Post Your <br/>Requirements</p>
                </div>
                <div className="card">
                <div className="custom-icon">
                    <RiNewspaperFill className='paper-icon'/>
                    <FaSearch className="search-icon" />
                    </div>
                    <p>Review, Select, and <br/>Contact the Best Suppliers</p>
                </div>
                <div className="card">
                    <div className="custom-icon">
                        <PiPencilSimple className="pencil-icon" />
                        <CgNotes className="card-icon" />
                    </div>
                    <p>Suppliers Complete your<br /> Profile and Get Notified for <br />opportunities</p>
                </div>
                <div className="card">
                    <div className="custom-icon">
                    <BiSolidNotepad className="card-icon1" />
                    <FaPencilAlt className="pencil-icon" />
                    </div>
                    <p>Contact Buyers and Share <br/>your Quote for the Service</p>
                </div>
                <div className="card">
                    <div className="custom-icon">
                        <BsCheckCircleFill className="tick-icon" />
                        <FaHandshake className="card-icon handshake-icon" />
                    </div>
                    <p>Both Parties Can Connect<br/> and Make Business, Leave a <br/>Feedback</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
