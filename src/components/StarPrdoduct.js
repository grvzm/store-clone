import React from 'react';
import Product from '../components/Product.js';

const StarPrdoduct = (product) => {
  return (
    <div className="star-section">
      {product.starProduct.map((item, index) => {
        return (
          <Product
            key={index}
            index={index}
            url={item.url}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default StarPrdoduct;
