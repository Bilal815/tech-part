import React from 'react';
import '../../styles/components/globalComponents/bulletPoints.scss';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BulletPoints = ({ bulletPoints, heading, color, bgColor }) => {
  const columnWidth = bulletPoints && 12 / bulletPoints.length;

  const h5Style =
    color === 'blue'
      ? { color: '#0161c7', fontSize: '24px' }
      : { color: '#33393d', fontSize: '18px' };
  return (
    <div className='bulletPoints'>
      <h2 className='center mb-5'>{heading ? heading : 'How it works'}</h2>
      <Row>
        {bulletPoints &&
          bulletPoints.map((p, i) => (
            <Col key={i} sm={12} md={6} lg={columnWidth}>
              <div
                className='bullet-point'
                style={{ textAlign: `${color === 'blue' ? 'left' : 'center'}` }}
              >
                {bgColor ? (
                  <div
                    className='image-container center'
                    style={{
                      backgroundColor: `${bgColor === 'light-blue' ? '#e4f1ff' : '#017aff'}`,
                    }}
                  >
                    {p.image && (
                      <img
                        src={p.image}
                        alt="icon"
                        style={{ height: `${color === 'blue' ? '50px' : '80px'}` }}
                      />
                    )}
                  </div>
                ) : (
                  <img
                    src={p.image}
                    alt="icon"
                    style={{ height: `${color === 'blue' ? '50px' : '80px'}` }}
                  />
                )}

                {p.title &&
                  p.title.split(',').map((t, i) => (
                    <h5 key={i} style={h5Style}>
                      {t}
                    </h5>
                  ))}
                <p
                  style={{
                    textAlign: `${color === 'blue' ? 'left' : 'center'}`,
                    padding: `${color === 'blue' ? '0 85px 0 0' : '0px 60px'}`,
                  }}
                >
                  {p.description}
                  {p.linkUrl && p.linkTitle && <Link to={p.linkUrl}> {p.linkTitle}</Link>}
                </p>
              </div>
              {color === 'blue' && (
                <img
                  className='gray-arrow'
                  src='https://d7gh5vrfihrl.cloudfront.net/website/triangle.png'
                  alt='gray-right-angle'
                />
              )}
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default BulletPoints;
