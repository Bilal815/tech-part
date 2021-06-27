import React from 'react';
import '../../styles/components/globalComponents/technicianReviewsCard.scss';

import { Col, Row } from 'react-bootstrap';
import { FaQuoteRight } from 'react-icons/fa';

const TechnicianReviewsCard = ({ review, image, name }) => {
  return (
    <div className='technicianReviewsCard'>
      <Row>
        <Col sm={7} md={7} lg={7}>
          <div className='review-wrapper'>
            <FaQuoteRight size='35' />
            {review && <h6 className='review'>{review}</h6>}
            {name && <p className='name'>{name}</p>}
          </div>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <div className='image-wrapper'>
            {image && <img src={image} alt='teachnician-image' />}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TechnicianReviewsCard;
