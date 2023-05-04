import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({ start }) => {
  return (
    <Carousel>
      {start.map((item, index) => (
        <Carousel.Item key={index}>
          <img src={item} alt="First Slide" className="d-block w-100" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
