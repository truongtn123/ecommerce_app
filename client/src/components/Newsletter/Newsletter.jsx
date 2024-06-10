import React from 'react';
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./newsletter.scss";

const Newsletter = () => {
    return (
            <div className="newsletter-section">
        <ContentWrapper>
                <div className="newsletter-content">
                    <div className="title">Newsletter</div>
                    <div className="title-text">
                        Sign up for latest updates and offers
                    </div>
                    <div className="text-form">
                        <input type="text" placeholder="Text here..." />
                        <button>Subscribe</button>
                    </div>
                    <div className="text">
                        Will be used in accordance with our Privacy Policy
                    </div>
                    <div className="social-icons">
                        <div className="icon">
                            <FaLinkedinIn />
                        </div>
                        <div className="icon">
                            <FaFacebookF />
                        </div>
                        <div className="icon">
                            <FaTwitter />
                        </div>
                        <div className="icon">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
        </ContentWrapper>
            </div>
    )
}

export default Newsletter
