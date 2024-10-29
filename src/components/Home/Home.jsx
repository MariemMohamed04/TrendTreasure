/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading.jsx';
import Products from '../Products/Products.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Category from '../Category/Category.jsx';
import storeCover from '../../assets/imgs/trend-treasure-cover.png';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const productsPerPage = 4;
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
      });
  }

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function getFilteredProducts() {
    if (selectedCategory === '') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }

  const currentProducts = getFilteredProducts().slice(firstProductIndex, lastProductIndex);

  function getData() {
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }
    return currentProducts.length > 0 ? (
      <>
        <Products products={currentProducts} />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={getFilteredProducts().length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </>
    ) : (
      <>
      <div className="container">
        <div className=" d-flex justify-content-center align-items-center">
          <div
            className="alert alert-danger"
            role="alert"
          >
            <strong>No products Found</strong>
          </div>
          
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <div className="my-1">
      <Navbar/>
      <img src={storeCover} className='w-100' alt="" />
      <div className="container my-4">
        <div className="row">
        <div className="col-lg-3 col-12 order-md-1 mb-4">
    <Category   selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
  </div>
          <div className="col-lg-9 col-12 order-md-2">
          {getData()}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
