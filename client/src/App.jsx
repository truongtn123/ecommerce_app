import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Error,
  Home,
  Landing,
  Register,
  Login,
  HomeLayout,
  Dashboard,
  Profile,
  Products,
  SingleProduct,
  Cart,
  About,
  Order,
  EditProfile,
  Admin,
  Users,
  AddProduct,
  EditProduct,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <HomeLayout />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "order",
            element: <Order />,
          },
          {
            path: "products/:id",
            element: <SingleProduct />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "edit-profile",
            element: <EditProfile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "admin/all-users",
            element: <Users />,
          },
          {
            path: "admin/add-product",
            element: <AddProduct />,
          },
          {
            path: "admin/edit-product/:id",
            element: <EditProduct />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
