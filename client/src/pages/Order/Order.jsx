import React from "react";
import { SectionTitle, TableOrder } from "../../components";
import "./order.scss";
import { useFetch } from "../../utils/customFetch";

const Order = () => {
  const { data, loading, error } = useFetch("/order");

  return (
    <div className="order">
      <SectionTitle text="All Orders" />
      <TableOrder
        data={data?.allOrders}
        name="Name"
        location="Location"
        cost="Cost"
        date="CreatedAt"
      />
    </div>
  );
};

export default Order;
