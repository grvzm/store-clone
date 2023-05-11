import React from 'react';
import '../styles/ProductReviews.css';

const ProductReviews = ({ start }) => {
  return (
    <div className="product-reviews">
      {start.map((data, index) => (
        <div className="product-review">
          <img src={data.image} alt={`review-${index}`} />
          <div className="review">
            <div>{data.review}</div>
            <span className="product-name">{data.name}</span>
            <span className="product-price">{data.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
