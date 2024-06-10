import React from 'react';
import "./about.scss";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper"

const About = () => {
    return (
        <ContentWrapper>
            <div className="about">
                <div className="titles">
                    <div className="title a0">Welove</div>
                    <div className="title a1">
                        DevStore
                    </div >
                </div>
                <p >
                In today's digital age, establishing an e-commerce store has become a 
                cornerstone for businesses aiming to reach a broader audience and maximize 
                sales potential. However, creating a successful e-commerce platform requires more than
                 just setting up a website and listing products. It demands a strategic approach that
                  encompasses various elements, from website design to customer service. Let's delve into 
                  the key components of a thriving e-commerce store.
                </p>
                <p >
                The design of your e-commerce website plays a pivotal role in attracting and retaining customers. 
                A clutter-free layout, intuitive navigation, and visually appealing product displays are essential.
                 Optimize loading speeds to ensure a seamless browsing experience, as slow-loading pages can deter potential buyers.
                </p>
                <p >
                With the surge in mobile device usage, optimizing your e-commerce 
                site for mobile is non-negotiable. Ensure that your website is responsive across 
                different screen sizes and devices. Mobile-friendly design not only enhances user experience but
                 also boosts your site's search engine ranking,
                 as Google prioritizes mobile-friendly websites in search results.
                </p>
            </div>
        </ContentWrapper>
    )
}

export default About
