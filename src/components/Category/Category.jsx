/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function Category({ selectedCategory, setSelectedCategory }) {
  const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];

  return (
    <div className="mb-4">
      <h5 className='fw-bold mb-3 border-bottom border-1 border-dark-subtle pb-3'>Category </h5>
      <form>
        {categories.map((category, index) => (
          <div className="form-check" key={index}>
            <input 
              className="form-check-input" 
              type="radio" 
              name="category" 
              id={`category-${index}`} 
              value={category} 
              checked={selectedCategory === category}
              onChange={() => setSelectedCategory(category)}
            />
            <label className="form-check-label mb-3" htmlFor={`category-${index}`}>
              {category}
            </label>
          </div>
        ))}
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="category" 
            id="category-all" 
            value="" 
            checked={selectedCategory === ''}
            onChange={() => setSelectedCategory('')}
          />
          <label className="form-check-label" htmlFor="category-all">
            All Categories
          </label>
        </div>
      </form>
    </div>
  );
}
