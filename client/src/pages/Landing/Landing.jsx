import React from "react";
import { useNavigate } from "react-router-dom";
import landingImg from "../../assets/landing.svg";
// import logo from "../../assets/logo.svg";
import { ContentWrapper } from "../../components";
import "./landing.scss";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <ContentWrapper>
      <div className="logo">
        <span>E</span>
      </div>
      <div className="landing-container">
        <div className="landing-content">
          <div className="landing-title">
            Ecommerce <span>store</span>
          </div>
          <p>
            A good furniture store is like a haven for both style enthusiasts
            and practical homemakers alike. It's a place where quality
            craftsmanship meets aesthetic appeal, offering a diverse range of
            furniture pieces to suit various tastes and preferences. From sleek
            modern designs to timeless classics, a good furniture store curates
            its collection with attention to detail and functionality
          </p>
          <div className="btns">
            <div
              className="btn hover register-link"
              onClick={() => navigate("/register")}
            >
              Register
            </div>
            <div className="btn hover" onClick={() => navigate("/login")}>
              Login
            </div>
          </div>
        </div>
        <img src={landingImg} alt="" className="landingImg" />
      </div>
    </ContentWrapper>
  );
};

export default Landing;
