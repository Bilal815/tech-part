import React from 'react';
import '../../styles/components/globalComponents/whyJoinOurTeamPoints.scss';

import { Col, Row } from 'react-bootstrap';

const WhyJoinOurTeamPoints = ({ points }) => {
  return (
    <div className='whyJoinOurTeamPoints'>
      <Row>
        {points &&
          points.map((p, i) => (
            <Col sm={12} md={6} lg={4}>
              <div className='blue-print-bg-wrapper'>
                <div className='title-with-bg-img'>
                  <img
                    src='https://d7gh5vrfihrl.cloudfront.net/website/bullets/brush-stroke.svg'
                    alt='bg-print-image'
                  />
                </div>
                {p.title && <h4>{p.title}</h4>}
                {p.description && <p>{p.description}</p>}
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default WhyJoinOurTeamPoints;
