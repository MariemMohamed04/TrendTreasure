/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading.jsx';
import Products from '../Products/Products.jsx';
import Pagination from '../Pagination/Pagination.jsx';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

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

  function getData() {
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }
    return products.length > 0 ? (
      <>
        <Products products={currentProducts} />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </>
    ) : (
      <div>No products found.</div>
    );
  }

  return (
    <>
      <h2>Home</h2>
      <div className="container">
        {getData()}
      </div>
    </>
  );
}
