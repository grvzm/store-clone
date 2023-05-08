import React from 'react';
import Product from './Product.js';
import '../styles/StarProduct.css';

const StarProduct = ({ product }) => {
  const newProduct = product.filter(
    (item, index) => index >= product.length - 3
  );
  return (
    <div className="star-section">
      <div className="product">
        <a href={product[0].url}>
          <img src={product[0].image} alt={`product-0`} />
        </a>
      </div>
      <div className="products">
        {newProduct.map((item, index) => (
          <Product
            key={index}
            index={index}
            url={item.url}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default StarProduct;
