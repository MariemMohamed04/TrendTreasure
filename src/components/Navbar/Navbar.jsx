/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import storeIcon from '../../assets/imgs/Trend.png';

export default function Navbar() {
  const [count, setCount] = useState(0);
  useEffect(() =>{}, []);
  return (
    <>
<nav className="navbar navbar-expand-sm navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={storeIcon} className='w-25' alt="" />
    </a>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">Home
            <span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Store</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <div className="navbar-icons ms-auto">
        <i className='fa fa-search px-3'></i>
        <i className='fa fa-cart-plus px-3'></i>
        <i className='fa fa-heart px-3'></i>
      </div>
    </div>
  </div>
</nav>
    
    </>
  )
}
