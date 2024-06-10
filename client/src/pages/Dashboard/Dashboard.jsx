import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Newsletter } from "../../components";
import { customFetch } from "../../utils/customFetch";
import { getUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiUser();
  }, []);

  const fetchApiUser = async () => {
    try {
      const { data } = await customFetch("/user/current-user");
      dispatch(getUser(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Dashboard;
