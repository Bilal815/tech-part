import React from 'react';
import '../../styles/components/globalComponents/bulletPoints.scss';

import { Row, Col } from 'react-bootstrap';

const BulletPoints = ({ bulletPoints, heading, color }) => {
  const columnWidth = bulletPoints && 12 / bulletPoints.length;
  return (
    <div className='bulletPoints'>
      <h2 className='center mb-5'>{heading ? heading : 'How it works'}</h2>
      <Row>
        {bulletPoints &&
          bulletPoints.map((p, i) => (
            <Col key={i} sm={12} md={6} lg={columnWidth}>
              <div className='bullet-point'>
                {p.image && (
                  <img
                    src={p.image}
                    alt='image'
                    style={{ height: `${color === 'blue' ? '50px' : '80px'}` }}
                  />
                )}
                {p.title &&
                  p.title.split(',').map((t, i) => (
                    <h5 key={i} style={{ color: `${color === 'blue' ? '#0161c7' : '#000'}` }}>
                      {t}
                    </h5>
                  ))}
                <p>{p.description}</p>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default BulletPoints;
