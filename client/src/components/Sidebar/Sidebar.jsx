import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlinePostAdd, MdAdminPanelSettings } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { LuBarChart4 } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import "./sidebar.scss";
import { useSelector } from "react-redux";

const sidebarLinks = [
  {
    id: 0,
    dir: "",
    text: "Home",
  },
  {
    id: 1,
    dir: "about",
    text: "About",
  },
  {
    id: 2,
    dir: "products",
    text: "Products",
  },
  {
    id: 3,
    dir: "order",
    text: "Order",
  },
];

const Sidebar = ({ setSidebar, active, setActive }) => {
  const navigate = useNavigate();

  const navigateHandler = (dir, id) => {
    navigate(`${dir}`);
    setSidebar(false);
    setActive(id);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-opac-layer"></div>
      <div className="sidebar-content">
        <FaTimes onClick={() => setSidebar(false)} className="close" />
        <ul>
          {sidebarLinks.map((link) => {
            return (
              <li
                key={link.id}
                onClick={() => {
                  navigateHandler(`${link.dir}`, link.id);
                }}
                className={`${active === link.id ? "active" : ""}`}
              >
                <span>{link.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
