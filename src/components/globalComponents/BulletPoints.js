import React from 'react';
import '../../styles/components/globalComponents/bulletPoints.scss';

import { Row, Col } from 'react-bootstrap';

const BulletPoints = ({ bulletPoints, heading }) => {
  const columnWidth = 12 / bulletPoints.length;
  return (
    <div className='bulletPoints'>
      <h2 className='center mb-5'>{heading ? heading : 'How it works'}</h2>
      <Row>
        {bulletPoints &&
          bulletPoints.map((p, i) => (
            <Col key={i} sm={12} md={6} lg={columnWidth}>
              <div className='bullet-point center'>
                {p.image && <img src={p.image} alt='image' />}
                <h5>{p.title}</h5>
                <p>{p.description}</p>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default BulletPoints;
