import React  from "react";
import { useParams } from "react-router-dom";

import "./singleProduct.scss";
import { useFetch } from "../../utils/customFetch";
import { SingleContainer } from "../../components";

const SingleProduct = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetch(`/products/${id}`);
  return (
    <>
      <SingleContainer data={data?.product} loading={loading} error={error}/>
    </>
  );
};

export default SingleProduct;
