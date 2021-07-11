import React from 'react';
import '../../styles/components/globalComponents/ourLocations.scss';
import { Row, Col } from 'react-bootstrap';

const OurLocations = ({ heading, locations, bgImage }) => {
  return (
    <div className='ourLocations mb-5'>
      {heading ? <h1>{heading}</h1> : <h1>Our Locations</h1>}
      <Row
        style={{
          backgroundImage: `url(${
            bgImage
              ? bgImage
              : 'https://d7gh5vrfihrl.cloudfront.net/website/backgrounds/locations.png'
          })`,
        }}
      >
        {locations &&
          locations.map((loc, i) => (
            <Col key={i} sm={4} md={2}>
              <p>{loc}</p>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default OurLocations;
