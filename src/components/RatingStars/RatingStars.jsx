/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function RatingStars({ rating }) {
  return (
    <>
      <div>
        {[1, 2, 3, 4, 5].map((rate, index) => (
          <i
            key={index}
            className={
              rating >= rate
                ? 'fa fa-star text-warning'
                : rating >= rate - 0.5
                  ? 'fa fa-star-half-alt text-warning'
                  : 'fa fa-star text-secondary'
            }>
          </i>
        ))}
      </div>
    </>
  );
}

