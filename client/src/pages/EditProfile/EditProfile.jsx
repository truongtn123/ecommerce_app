import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentWrapper, SectionTitle } from "../../components";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../components";
import "./editProfile.scss";
import { customFetch } from "../../utils/customFetch";
import { toast } from "react-toastify";
import { getUser } from "../../redux/userSlice";

const EditProfile = () => {
  const { user } = useSelector((store) => store?.user?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await customFetch.patch("/user/update-user", formData);
      toast.success("Profile updated successfully");
      const { data } = await customFetch.get("/user/current-user");
      dispatch(getUser(data));
      return navigate("/dashboard/profile");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

  return (
    <ContentWrapper>
      <div className="edit-pf">
        <SectionTitle text="edit profile" />
        <div className="edit-pf-content">
          <form
            onSubmit={onSubmit}
            encType="multipart/form-data"
            className="edit-pf-text"
          >
            <label className="edit-pd-top" htmlFor="avatar">
              Select an image:
            </label>
            <input type="file" id="avatar" name="avatar" accept="image/*" />
            <FormInput
              label="name"
              type="text"
              name="name"
              defaultValue={user?.name}
            />
            <FormInput
              label="email"
              type="email"
              name="email"
              defaultValue={user?.email}
            />
            <FormInput
              label="location"
              type="text"
              name="location"
              defaultValue={user?.location}
            />

            <button className="btn form-btn hover" type="submit">
              Submit
            </button>

            <div
              className="pf-edit"
              onClick={() => navigate("/dashboard/profile")}
            >
              <FaAngleLeft />
              <span>Back</span>
            </div>
          </form>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default EditProfile;
