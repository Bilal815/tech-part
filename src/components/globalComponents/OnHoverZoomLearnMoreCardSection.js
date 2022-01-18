import React from 'react';
import '../../styles/components/globalComponents/onHoverZoomLearnMoreCardSection.scss';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkButton } from '../../styledComponents';

const OnHoverZoomLearnMoreCardSection = ({ learnMoreInfo }) => {
  const OnHoverZoomLearnMoreCard = ({ service }) => {
    const { bgImage, url, title, subTitle, descriptionPoints } = service;
    return (
      <Link to={url} className='onHoverZoomLearnMoreCard'>
        {/* OnHoverZoomLearnMoreCard */}
        <img
          className='bg-hover-image'
          alt="background"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        />

        <div className='content-wrapper'>
          <div className='content'>
            <h4>{title}</h4>
            <h5>{subTitle}</h5>
            <div className='points-container'>
              {descriptionPoints &&
                descriptionPoints.map((point, i) => (
                  <p key={i} className='point'>
                    {point}
                  </p>
                ))}
            </div>
          </div>
          <LinkButton name='Learn More' link={url} />
        </div>
      </Link>
    );
  };
  return (
    <div className='onHoverZoomLearnMoreCardSection'>
      <Row>
        {learnMoreInfo &&
          learnMoreInfo.map((service, i) => (
            <Col sm={12} md={6} key={i}>
              <OnHoverZoomLearnMoreCard service={service} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default OnHoverZoomLearnMoreCardSection;
