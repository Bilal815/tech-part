import React from 'react';
import '../../styles/components/globalComponents/backgroundPulsImageSection.scss';

import bigPulsImg from '../../assets/icons/big-plus.svg';
import blueTickIcon from '../../assets/icons/blue-tick.svg';
import { Row, Col } from 'react-bootstrap';

const BackgroundPulsImageSection = ({ heading, subHeading, backgroundPulsImageOptions }) => {
  return (
    <div className='backgroundPulsImageSection'>
      <img className='big-puls-image' src={bigPulsImg} alt='bigPulsImage' />
      <div className='my-5 center'>
        {heading && <h1 className='center-bold-heading'>{heading}</h1>}
        {subHeading && (
          <h4>
            Join <span className='blue'>puls+</span> and your on-time service is always guaranteed
          </h4>
        )}
      </div>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <div className='image-container center ml-5'>
            <img
              src='https://d7gh5vrfihrl.cloudfront.net/website/membership/techs.png'
              alt='techs-banner'
            />
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className='content-container'>
            {backgroundPulsImageOptions &&
              backgroundPulsImageOptions.map((item, i) => (
                <div key={i} className='point'>
                  <img className='mr-2' src={blueTickIcon} alt='blueTickIconImage' />
                  <p>{item}</p>
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BackgroundPulsImageSection;
