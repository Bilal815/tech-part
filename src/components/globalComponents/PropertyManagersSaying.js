import React from 'react';
import '../..//styles/components/globalComponents/propertyManagersSaying.scss';

import { Row, Col } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';

const PropertyManagersSaying = ({ managerSaying }) => {
  return (
    <div className='propertyManagersSaying'>
      <Row>
        {managerSaying &&
          managerSaying.map((m, i) => (
            <Col key={i} sm={12} md={6} lg={4}>
              <div className='saying-wrapper'>
                <div className='black-stars-container mb-3'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                {m.saying && <p className='managers-saying'>{m.saying}</p>}
                {m.name && (
                  <>
                    {m.name.split('.').map((m, i) => (
                      <p key={i} className='managers-name m-0'>
                        {m}
                      </p>
                    ))}
                  </>
                )}
                <img src={m.image} alt='logo-image' className='logo mt-3' />
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default PropertyManagersSaying;
