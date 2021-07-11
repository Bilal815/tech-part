import React from 'react';
import '../../styles/components/globalComponents/servicesSection.scss';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServicesSection = ({ title, description, cardsInfo }) => {
  const Card = ({ cardInfo }) => {
    const { link, image, title } = cardInfo;
    return (
      <Link to={link} className='card'>
        <img src={image} alt='image' />
        <p>{title}</p>
      </Link>
    );
  };

  return (
    <div className='servicesSection'>
      <Row>
        <Col sm={12} md={4} lg={4}>
          <div className='content-container'>
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
          </div>
        </Col>
        <Col sm={12} md={8} lg={8}>
          <div className='cards-container'>
            {cardsInfo && cardsInfo.map((c, i) => <Card key={i} cardInfo={c} />)}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesSection;
