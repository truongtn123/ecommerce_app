import React from "react";
import "./statItem.scss";
import { useNavigate } from "react-router-dom";
const StatItem = ({ count, text, icon, color, bg, route }) => {
  const navigate = useNavigate();
  return (
    <div className="statItem" onClick={() => navigate(route)}>
      <div className="stat-main">
        <div className="stat-count">{count}</div>
        <div
          className="stat-icon"
          style={{ backgroundColor: bg, color: color }}
        >
          {icon}
        </div>
      </div>
      <div className="stat-content">{text}</div>
    </div>
  );
};

export default StatItem;
