/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styles from './Product.module.css';
import { Link } from 'react-router-dom';
import RatingStars from '../RatingStars/RatingStars.jsx';

export default function Product({ product }) {

  return (
    <>

      <div className="col-lg-3 col-md-4 col-sm-6 mb-4 p-3 text-center">
         <div className="card">
          <img className="card-img-top" src={product.image} alt={product.title} style={{ width: '144px', height: '200px', objectFit: 'cover', margin: '0 auto' }} />
          <div className="card-body">
            <h6 className="card-title">{product.title}</h6>
            <p className="card-text">${product.price}</p>
            <RatingStars rating={product.rating.rate} />
            <span>{product.rating.rate}</span>
            <span>({product.rating.count} Reviews)</span>
          </div>
         </div>
      </div>
    </>
  );
}

