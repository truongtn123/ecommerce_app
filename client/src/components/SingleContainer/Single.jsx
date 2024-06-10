import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus, FaLocationArrow } from "react-icons/fa";
import { addItem } from "../../redux/cartSlice";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Single = ({ _id, colors, description, image, location, name, price }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate();
  const [productColor, setProductColor] = useState(colors[0]);

  const handleAmount = (add) => {
    if (add === "add") {
      setAmount((a) => a + 1);
    } else {
      if (amount === 1) {
        return;
      } else {
        setAmount((a) => a - 1);
      }
    }
  };

  const cartProduct = {
    cartID: _id + productColor,
    image: image,
    name: name,
    price: price,
    color: productColor,
    amount,
  };
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
    setAmount(1);
  };

  const { user } = useSelector((store) => store?.user?.user);

  return (
    <div className="singleProduct">
      <div className="singleProduct-content">
        <div className="singleProduct-img">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <div className="name">{name}</div>
          <div className="desc">{description}</div>
          <div className="colors">
            {colors?.map((color) => {
              return (
                <div
                  className={`color ${color === productColor ? "v2" : ""}`}
                  key={color}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></div>
              );
            })}
          </div>
          <div className="price">
            Price:
            <span>${price / 100}</span>
          </div>
          <div className="price">
            <FaLocationArrow size={13} />
            <span>{location}</span>
          </div>
          <div className="btn-cart">
            <div className="change-btn">
              <span onClick={() => handleAmount("minus")}>-</span>
              <span>{amount}</span>
              <span onClick={() => handleAmount("add")}>+</span>
            </div>
            <button onClick={addToCart}>
              <FaCartPlus size={20} />
              ADD TO CART
            </button>
          </div>

          {user?.role === "admin" && (
            <div
              className="pd-edit"
              onClick={() => navigate(`/dashboard/admin/edit-product/${_id}`)}
            >
              <span>Edit Product</span>
              <FaAngleRight />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Single;
