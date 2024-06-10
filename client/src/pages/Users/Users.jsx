import React from "react";
import { SectionTitle, TableOrder } from "../../components";
import "../Order/order.scss";
import { useFetch } from "../../utils/customFetch";

const Order = () => {
  const { data, loading, error } = useFetch("/user/admin/all-users");
  console.log(data);

  return (
    <div className="order">
      <SectionTitle text="All Users" />
      <TableOrder
        data={data?.users}
        name="Name"
        location="Location"
        cost="Email"
        date="CreatedAt"
      />
    </div>
  );
};

export default Order;
