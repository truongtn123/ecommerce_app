import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Item from "./Item";
import "./itemContainer.scss";

const ItemContainer = ({ data, loading, error }) => {
  return (
    <>
      {!loading ? (
        <ContentWrapper>
          <div className="cartItems">
            {data?.reverse().map((item) => {
              return <Item {...item} key={item._id} />;
            })}
          </div>
        </ContentWrapper>
      ) : (
        <div className="height"></div>
      )}
    </>
  );
};

export default ItemContainer;
