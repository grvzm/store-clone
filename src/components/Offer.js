import React from 'react';
import '../styles/Offer.css';

const Offer = ({ src, url, index }) => {
  return (
    <div className="offer-card">
      <a href={url}>
        <img src={src} alt={`offer-${index + 1}`} />
      </a>
    </div>
  );
};

export default Offer;
