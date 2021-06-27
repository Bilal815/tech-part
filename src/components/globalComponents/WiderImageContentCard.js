import React from 'react';
import '../../styles/components/globalComponents/widerImageContentCard.scss';

import { Row, Col } from 'react-bootstrap';

const WiderImageContentCard = ({ cardData }) => {
  const { image, options } = cardData;
  return (
    <div className='widerImageContentCard'>
      <Row>
        <Col sm={12} md={6} lg={6}>
          {image && (
            <div className='image-wrapper'>
              <img src={image} alt='image' />
            </div>
          )}
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className='content-wrapper'>
            {options &&
              options.map((item, i) => (
                <div className='mb-4'>
                  {item.title && <h6 className='m-0'>{item.title}</h6>}
                  {item.description && <p className='m-0'>{item.description}</p>}
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WiderImageContentCard;
