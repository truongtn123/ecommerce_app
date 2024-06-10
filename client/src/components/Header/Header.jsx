import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import DarkTheme from "../DarkTheme/DarkTheme";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";

import "./header.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { numItemsInCart } = useSelector((store) => store.cart);

  const [sidebar, setSidebar] = useState(false);
  const [active, setActive] = useState(0);

  const navigate = useNavigate();
  const { user } = useSelector((store) => store?.user?.user);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigateHandler = (type) => {
    navigate(`${type}`);
  };

  return (
    <>
      <div className="header">
        <ContentWrapper>
          <div className="left">
            <FaBars onClick={() => setSidebar(true)} />
            {user?.role === "admin" ? (
              <span onClick={() => navigate("/dashboard/admin")}>Admin</span>
            ) : (
              ""
            )}
          </div>
          <div className="logo-header">
            Dev<span>Store</span>
          </div>
          <div className="menuIcons">
            <DarkTheme />
            <div className="cart-icon">
              <FaShoppingCart onClick={() => navigateHandler("cart")} />
              <span>{numItemsInCart}</span>
            </div>
            {user?.avatar ? (
              <img
                src={user?.avatar}
                onClick={() => navigateHandler("profile")}
              />
            ) : (
              <FaUserCircle onClick={() => navigateHandler("profile")} />
            )}
          </div>
        </ContentWrapper>
      </div>
      {sidebar && (
        <Sidebar
          setSidebar={setSidebar}
          active={active}
          setActive={setActive}
        />
      )}
    </>
  );
};

export default Header;
