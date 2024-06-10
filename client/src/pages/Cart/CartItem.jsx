import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { removeItem, decreaseItem, increaseItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartItem = ({ cartItem }) => {
  const { cartID, amount, image, price, name, color } = cartItem;
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const increaseItemInCart = () => {
    dispatch(increaseItem({ cartID }));
  };
  const decreaseItemInCart = () => {
    dispatch(decreaseItem({ cartID }));
  };

  const navigate = useNavigate();

  return (
    <div className="cartOrders">
      <div className="cartOder">
        <img src={image} alt="" />

        <div className="cart-content">
          <div className="title">{name}</div>
          <div className="colors">
            <div className="colors-text">color: </div>
            <div
              className="cartOrder-color"
              style={{ backgroundColor: color }}
            ></div>
          </div>
          <div className="cartOrder-price">${(price * amount) / 100}</div>

          <div className="cartOrder-change">
            <span onClick={decreaseItemInCart}>-</span>
            <span>{amount}</span>
            <span onClick={increaseItemInCart}>+</span>
          </div>
        </div>
      </div>

      <div className="cart-remove" onClick={removeItemFromCart}>
        <span className="btn">Remove</span>
      </div>
    </div>
  );
};

export default CartItem;
