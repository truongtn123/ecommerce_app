import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

const Item = ({ _id, name, description, image, price, location }) => {
  const navigate = useNavigate();
  return (
    <div className="cartItem" onClick={() => navigate(`${_id}`)}>
      <div className="cartImg">
        <img src={image} alt="" />
      </div>
      <div className="cartContent">
        <div className="cartTitle">{name}</div>
        <div className="cartPrice">${price / 100}</div>
        <div className="cartLocation">
          <div className="">
            <FaLocationArrow />
          </div>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
