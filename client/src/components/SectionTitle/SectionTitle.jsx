import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import "./sectionTitle.scss";

const SectionTitle = ({ text }) => {
  return (
    <ContentWrapper>
      <div className="sectionHeading">{text}</div>
    </ContentWrapper>
  );
};

export default SectionTitle;
