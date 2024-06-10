import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import "./footer.scss";
import ContentWrapper from '../ContentWrapper/ContentWrapper';

const Footer = () => {
    return (
        
        <div className="footer">
                <ContentWrapper>
                <div className="footer-content">
                    <div className="column">
                        <div className="title">About</div>
                        <p>
                        The design of your e-commerce website plays a pivotal role in
                         attracting and retaining customers. A clutter-free layout,
                          intuitive navigation, and visually appealing product displays 
                          are essential.Optimize loading speeds to ensure a seamless browsing experience
                        </p>
                    </div>
                    <div className="column">
                        <div className="title">Contact</div>
                        <div className="text">
                            <FaLocationArrow />
                            <p>
                                Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha,
                                Kerala, 688006
                            </p>
                        </div>
                        <div className="text">
                            <FaMobileAlt />
                            <p>Phone: 0471 272 0261</p>
                        </div>
                        <div className="text">
                            <FaEnvelope />
                            <p >Email: store@jsdev.com</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="title">Categories</div>
                        <span className="text">Smart Watches</span>
                        <span className="text">Bluetooth Speakers</span>
                        <span className="text">Wireless Earbuds</span>
                        <span className="text">Home Theatre</span>
                        <span className="text">Projectors</span>
                    </div>
                    <div className="column">
                        <div className="title">Pages</div>
                        <span className="text">Home</span>
                        <span className="text">About</span>
                        <span className="text">Privacy Policy</span>
                        <span className="text">Returns</span>
                        <span className="text">Terms & Conditions</span>
                        <span className="text">Contact Us</span>
                    </div>
                </div>
        </ContentWrapper>
            </div>
    )
}

export default Footer

