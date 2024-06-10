import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../../redux/cartSlice";

const CartItems = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} key={cartItem.cartID} />
      ))}
      <div className="clearCart ">
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </>
  );
};

export default CartItems;
