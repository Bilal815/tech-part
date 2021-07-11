import React from 'react';
import '../../styles/components/globalComponents/imageAndGreenCheckPoints.scss';

import { Row, Col } from 'react-bootstrap';

const ImageAndGreenCheckPoints = ({ sectionInfo }) => {
  const { image, points } = sectionInfo;
  return (
    <div className='imageAndGreenCheckPoints'>
      <Row>
        <Col sm={12} md={6}>
          <div className='image-container'>
            <img src={image} alt='' />
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className='content-container'>
            {points &&
              points.map((p, i) => (
                <div className='point-container'>
                  <img
                    src='https://d7gh5vrfihrl.cloudfront.net/website/icons/checkmark.svg'
                    alt=''
                  />
                  <div className='points'>
                    <h6>{p.title}</h6>
                    <p>{p.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ImageAndGreenCheckPoints;
