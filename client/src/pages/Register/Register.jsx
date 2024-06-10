import React from "react";
import "../Login/login.scss";
import { FormInput } from "../../components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../../utils/customFetch";

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/register", data);
      toast.success(`${response?.data.msg}`);
      return navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data.msg);
      return error;
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-content">
        <div className="form-title">Register</div>
        <FormInput
          label="name"
          type="name"
          name="name"
          placeholder="enter your name"
        />
        <FormInput
          label="email"
          type="email"
          name="email"
          placeholder="enter your email"
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          placeholder="enter your password"
        />
        <FormInput
          label="location"
          type="location"
          name="location"
          placeholder="enter your location"
        />
        <button className=" btn form-btn hover" type="submit">
          Register
        </button>

        <div className="form-bottom">
          Already a member?
          <div className="register" onClick={() => navigate("/login")}>
            Login
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
