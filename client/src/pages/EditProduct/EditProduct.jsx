import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentWrapper, SectionTitle } from "../../components";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { FormInput } from "../../components";
import "../EditProfile/editProfile.scss";
import { customFetch } from "../../utils/customFetch";
import { toast } from "react-toastify";
import "./editProduct.scss";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await customFetch.patch(`/products/${id}`, formData);
      toast.success("Product Edit successfully");
      return navigate(`/dashboard/products/${id}`);
    } catch (error) {
      return error;
    }
  };

  return (
    <ContentWrapper>
      <div className="edit-pd">
        <SectionTitle text="edit product" />
        <form
          onSubmit={onSubmit}
          encType="multipart/form-data"
          className="edit-pd-content"
        >
          <div className="edit-pd-text">
            <div className="editProduct-main">
              <div className="editProduct-img">
                <label className="edit-pd-top" htmlFor="image">
                  Select a product image:
                </label>
                <input type="file" id="image" name="image" accept="image/*" />
              </div>
              <FormInput
                label="name"
                type="text"
                name="name"
                placeholder="enter product name..."
              />
              <div className="editProduct-desc">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  rows={6}
                  placeholder="enter product description..."
                ></textarea>
              </div>
            </div>

            <div className="editProduct-right">
              <FormInput
                label="company"
                type="text"
                name="company"
                placeholder="enter product company..."
              />

              <FormInput
                label="colors"
                type="text"
                name="colors"
                placeholder="enter product colors..."
              />
              <FormInput
                label="price"
                type="number"
                name="price"
                placeholder="enter product price..."
              />
              <FormInput
                label="location"
                type="text"
                name="location"
                placeholder="enter product location..."
              />
            </div>
          </div>
          <div className="editProduct-bottom">
            <button className="btn form-btn hover" type="submit">
              Submit
            </button>

            <div
              className="edit-back"
              onClick={() => navigate("/dashboard/admin")}
            >
              <FaAngleLeft />
              <span>Back</span>
            </div>
          </div>
        </form>
      </div>
    </ContentWrapper>
  );
};

export default EditProduct;
