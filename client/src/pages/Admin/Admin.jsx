import React, { useEffect } from "react";
import { useFetch } from "../../utils/customFetch";
import { ContentWrapper, SectionTitle, StatItem } from "../../components";
import {
  FaSuitcaseRolling,
  FaCalendarCheck,
  FaTruckMoving,
  FaMedal,
  FaImage,
} from "react-icons/fa";
import "./admin.scss";

const Admin = () => {
  const { data, loading, error } = useFetch("/user/admin");

  return (
    <div className="admin">
      <ContentWrapper>
        <SectionTitle text="Admin" />
        <div className="admin-main">
          <StatItem
            icon={<FaSuitcaseRolling />}
            text="current users"
            count={data?.users}
            color="#e9b949"
            bg="#fcefc7"
            route="all-users"
          />
          <StatItem
            icon={<FaCalendarCheck />}
            text="total products"
            count={data?.products}
            color="#647acb"
            bg="#e0e8f9"
            route="/dashboard/products"
          />
          <StatItem
            icon={<FaTruckMoving />}
            text="total orders"
            count={data?.orders}
            color="#e65ffb"
            bg="#fadaff"
            route="/dashboard/order"
          />
          <StatItem
            icon={<FaImage />}
            text="add product"
            count={<FaMedal size={24} style={{ display: "block" }} />}
            color="#017b44"
            bg="#42feaa"
            route="add-product"
          />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Admin;
