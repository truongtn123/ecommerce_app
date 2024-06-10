import React from "react";
import { useSelector } from "react-redux";
import { ContentWrapper, SectionTitle } from "../../components";
import { FaUserCircle } from "react-icons/fa";
import "./profile.scss";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { customFetch } from "../../utils/customFetch";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useSelector((store) => store?.user?.user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate("/");
    await customFetch("/auth/logout");
    toast.success("Logout successfully");
  };

  return (
    <ContentWrapper>
      <div className="profile">
        <SectionTitle text="profile" />
        <div className="pf-content">
          <div className="pf-text">
            {user?.avatar ? (
              <div className="pf-img">
                <img src={user?.avatar} />
              </div>
            ) : (
              <FaUserCircle className="circle-user" />
            )}
            <div className="pf-text2">
              <div className="pf-name">
                Name:
                <span>{user?.name}</span>
              </div>
              <div className="pf-name">
                Email:
                <span>{user?.email}</span>
              </div>
              <div className="pf-name">
                Role:
                <span>{user?.role}</span>
              </div>
              <div className="pf-name">
                Location:
                <span>{user?.location}</span>
              </div>
              <div
                className="pf-edit"
                onClick={() => navigate("/dashboard/edit-profile")}
              >
                <span>Edit Profile</span>
                <FaAngleRight />
              </div>
              {user?.role === "admin" ? (
                <div
                  className="pf-logout"
                  onClick={() => navigate("/dashboard/admin")}
                >
                  <span>Admin</span>
                  <FaAngleRight />
                </div>
              ) : (
                <div className=""></div>
              )}
              <div className="pf-logout" onClick={handleLogout}>
                <span>Log out</span>
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Profile;
