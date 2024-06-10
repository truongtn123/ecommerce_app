import React from "react";
import { BsCartXFill } from "react-icons/bs";
import { SectionTitle, ContentWrapper } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import CartItems from "./CartItems";
import { customFetch } from "../../utils/customFetch";
import { toast } from "react-toastify";
import { clearCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((store) => store.cart);
  const { numItemsInCart, cartTotal, shipping, tax, orderTotal } = cart;

  const { user } = useSelector((store) => store.user?.user);
  const order = { ...cart, location: user?.location, name: user?.name };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await customFetch.post("/order", order);
      toast.success(`${response?.data.msg}`);
      dispatch(clearCart());
      return navigate("/dashboard/order");
    } catch (error) {
      toast.error(error?.response?.data.msg);
      return error;
    }
  };

  return (
    <div className="cartContainer">
      <SectionTitle text="cart" />
      <ContentWrapper>
        <div className="cartContent">
          {numItemsInCart ? (
            <CartItems />
          ) : (
            <div className="empty">
              <BsCartXFill />
              <div className="empty-title">Your cart is empty.</div>
            </div>
          )}
          <form className="cart-footer" onSubmit={onSubmit}>
            <div className="cart-footer-content">
              <div className="cost">
                Total: <span>${(cartTotal / 100).toFixed(2)}</span>
              </div>
              <div className="cost">
                Ship: <span>${(shipping / 100).toFixed(2)}</span>
              </div>
              <div className="cost">
                Tax: <span>${(tax / 100).toFixed(2)}</span>
              </div>
              <div className="cost">
                Order Total: <span>${(orderTotal / 100).toFixed(2)}</span>
              </div>
              <button type="submit" className="btn">
                Order Now
              </button>
            </div>
          </form>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Cart;
