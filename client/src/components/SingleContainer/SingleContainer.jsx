import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Single from "./Single.jsx";
import "./singleContainer.scss"

const SingleContainer = ({ data, loading, error }) => {
  return (
    <ContentWrapper>
      {loading === false && !error  ? (
        <Single {...data} />
       ) : ( 
         <div className="height"></div>   
      )}
    </ContentWrapper>
  );
};

export default SingleContainer;