import React from "react";
import { FormInput } from "../../components";
import { redirect, useNavigate } from "react-router-dom";
import "./login.scss";
import { customFetch } from "../../utils/customFetch";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/login", data);
      toast.success(`${response?.data.msg}`);
      return navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data.msg);
      return error;
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-content">
        <div className="form-title">Login</div>
        <FormInput
          label="email"
          type="email"
          name="email"
          defaultValue="truong@gmail.com"
          placeholder="enter your email"
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          defaultValue="123123123"
          placeholder="enter your password"
        />
        <button className="btn form-btn hover" type="submit">
          Login
        </button>

        <div className="form-bottom">
          Not a member yet?
          <div className="register " onClick={() => navigate("/register")}>
            Rgister
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
