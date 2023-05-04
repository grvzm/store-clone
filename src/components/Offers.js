import React from 'react';
import '../styles/Offers.css';
import Offer from '../components/Offer.js';

const Offers = ({ offer }) => {
  return (
    <div className="offer-section">
      {offer.map((item, index) => (
        <Offer key={index} index={index} src={item.image} url={item.url} />
      ))}
    </div>
  );
};

export default Offers;
