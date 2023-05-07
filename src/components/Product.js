import React from 'react';

const Product = ({ url, image, index }) => {
  return (
    <div className="product">
      <a href={url}>
        <img src={image} alt={`product-${index}`} />
      </a>
    </div>
  );
};

export default Product;
