import React, { useEffect } from 'react';
import { useFetch } from '../../utils/customFetch';
import { ItemContainer, SectionTitle } from '../../components';
import "./products.scss"

const Products = () => {
const {data , loading, error} = useFetch("/products");
  return (
    <div className="products-header">
      <SectionTitle text='featured products' />
      <ItemContainer data={data?.products} loading={loading} error={error}/>
    </div>
  )
}

export default Products
