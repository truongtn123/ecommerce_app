import React from "react";
import { useNavigate } from "react-router-dom";

import BannerImg from "../../../assets/banner-img.png";
import { ContentWrapper } from "../../../components";
import "./banner.scss";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-banner">
      <ContentWrapper>
        <div className="content">
          <div className="text-content">
            <h1>SALES</h1>
            <p>
              Convallis interdum purus adipiscing dis parturient posuere ac a
              quam a eleifend montes parturient posuere curae tempor
            </p>
            <div className="btn-banners">
              <div
                className="btn-banner hover"
                onClick={() => navigate("about")}
              >
                Read More
              </div>
              <div
                className="btn-banner v2 hover"
                onClick={() => navigate("products")}
              >
                Shop Now
              </div>
            </div>
          </div>
          <img src={BannerImg} alt="" />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Banner;
