/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Product from '../Product/Product.jsx';

export default function Products({ products }) {
  
  return (
    <div className="row bg-danger">
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
}

