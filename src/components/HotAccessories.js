import React from 'react';
import '../styles/HotAccessories.css';

const HotAccessories = ({ cover, start }) => {
  return (
    <div className="HotAccessories">
      <div>
        <img className="accessory-cover" src={cover} alt={'cover'} />
      </div>
      <div className="accessory-container">
        {start.map((data, index) => (
          <div className="accessory" key={index}>
            <img className="accessory-img" src={data.image} alt={data.name} />
            <div className="accessory-detail">
              <h5>{data.name}</h5>
              <span>{data.price}</span>
            </div>
          </div>
        ))}
        <div className="accessory">
          <img
            src="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"
            alt="browser more"
          />
        </div>
      </div>
    </div>
  );
};

export default HotAccessories;
