import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import notFound from "../../assets/notFound.svg";
import { ContentWrapper } from "../../components";
import "./error.scss";

const Error = () => {
  const navigate = useNavigate();

  const error = useRouteError();
  // console.log(error);
  if (error.status === 404) {
    return (
      <ContentWrapper>
        <div className="err-container">
          <img src={notFound} alt="" />
          <h2>Ohh! page not found</h2>
          <p>we can't seem to find the page you are looking for</p>
          <div onClick={() => navigate("/")} className="back">
            Back home
          </div>
        </div>
      </ContentWrapper>
    );
  }
  return (
    <ContentWrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </ContentWrapper>
  );
};

export default Error;
