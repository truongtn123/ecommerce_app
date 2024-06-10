import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import dayjs from "dayjs";
import "./tableOrder.scss";

const TableOrder = ({ data, name, location, cost, date }) => {
  console.log(typeof cost);
  return (
    <ContentWrapper>
      <div className="order-content">
        <div className="order-total">Total Orders: {data?.length}</div>
        <div className="order-title">
          <div className="order-name">{name}</div>
          <div className="order-name">{location}</div>
          <div className="order-name">{cost}</div>
          <div className="order-name">{date}</div>
        </div>

        <div className="order-information">
          {data?.reverse().map((order) => {
            return (
              <div className="order-infos" key={order._id}>
                <div className="order-info">{order.name}</div>
                <div className="order-info">{order.location}</div>
                <div className="order-info email">
                  {cost === "Cost"
                    ? `${(order.orderTotal / 100).toFixed(2)}`
                    : `${order.email}`}
                </div>
                <div className="order-info">
                  {dayjs(order.createdAt).format("h:mm a MMM D, YYYY")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default TableOrder;
