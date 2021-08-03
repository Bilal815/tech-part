import React, { useState } from 'react';
import '../../../styles/screens/servicesScreens/bookAService/index.scss';
import { ScrollToTop } from './../../../utilities/index';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const BookAServiceScreen = () => {
  const [deviceYouNeed, setDeviceYouNeed] = useState(``);
  ScrollToTop();

  const nineServiceCardInfo = [
    {
      serviceLink: ``,
      serviceTitle: `Home Appliances Repair`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/apr.svg`,
    },
    {
      serviceLink: ``,
      serviceTitle: `TV Mounting`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/tvi.svg`,
    },
    {
      serviceLink: ``,
      serviceTitle: `Handyman Services`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/hdm.svg`,
    },
    {
      serviceLink: ``,
      serviceTitle: `Disinfection Services`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/disinfection/icon.svg`,
    },
    {
      serviceLink: ``,
      serviceTitle: `iPhone Repair`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/mdr.svg`,
    },
    {
      serviceLink: ``,
      serviceTitle: `Smart Home Installation`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/sh.svg`,
    },
    {
      serviceLink: ``,
      serviceTitle: `Plumbing`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/plumbing.svg`,
    },
    {
      serviceLink: ``,
      serviceTitle: `Garage Door`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/garage.svg`,
    },
    {
      serviceLink: ``,
      serviceTitle: `Security System Setup`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/simpli.svg`,
    },
  ];

  const membersBenefitsInfo = [
    {
      title: `Priority Booking`,
      description: `We prioritise your booking and assign you the best available tech`,
    },
    {
      title: `Double the Guarantee`,
      description: `Extend your service guarantee from 90 to 180 days`,
    },
    {
      title: `Access to Puls DIY platform`,
      description: `Learn home improvement skills from our experts`,
    },
    {
      title: `Special Promotions`,
      description: `Save even more with special deals designed for members`,
    },
    {
      title: `Exclusive Discounts`,
      description: `Save up to 25% on all Puls services and offers`,
    },
    {
      title: `Ultimate Home Service`,
      description: `White-glove care for your home by our elite technicians`,
    },
    {
      title: `Access to Elite Techs`,
      description: `Access to the highest-rated and best-trained technicians`,
    },
    {
      title: `First Look at New Services`,
      description: `Puls+ members receive exclusive access to our newest services`,
    },
  ];

  const NineServiceCard = ({ service }) => (
    <Link to={service.serviceLink} className='nineServiceCard'>
      <div className='inner'>
        <div className='image-conatiner'>
          <img src={service.serviceImage} alt='service-image' />
        </div>
        <div className='title'>
          {service.serviceTitle && <span>{service.serviceTitle}</span>}{' '}
          <img
            className='ml-1'
            src='https://d7gh5vrfihrl.cloudfront.net/website/membership/arrow-right.svg'
            alt='blue-arrow-icon'
          />
        </div>
      </div>
    </Link>
  );
  const NineServiceCardGrid = () => (
    <div className='nineServiceCardGrid'>
      <Row>
        {nineServiceCardInfo &&
          nineServiceCardInfo.map((service, i) => (
            <Col key={i} sm={6} md={4} lg={3}>
              <NineServiceCard service={service} />
            </Col>
          ))}
      </Row>
    </div>
  );

  const MemberBenefitsGrid = () => (
    <div className='memberBenefitsGrid'>
      <Row>
        {membersBenefitsInfo &&
          membersBenefitsInfo.slice(0, 4).map((benefit, i) => (
            <Col key={i} sm={6} md={4} lg={3}>
              <div className='memberBenefit'>
                <div className='inner'>
                  <div className='tick-image-container'>
                    <img
                      src='https://d7gh5vrfihrl.cloudfront.net/website/benefits/check-icon.svg'
                      alt='blue-tick-icon'
                    />
                  </div>
                  <h6 className='title'>{benefit.title}</h6>
                  <p className='description'>{benefit.description}</p>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );

  return (
    <div className='bookAServiceScreen'>
      <div className='container-75'>
        <div className='home-maintenance-service'>
          <h1 className='section-heading'>Book a Puls home maintenance service</h1>
          <div className='input-container'>
            <input
              type='text'
              value={deviceYouNeed}
              placeholder='What service do you need?'
              onChange={(e) => setDeviceYouNeed(e.target.value)}
            />
            <img
              src='https://d7gh5vrfihrl.cloudfront.net/website/bullets/search.svg'
              class='search-img'
            ></img>
          </div>
          <NineServiceCardGrid />
        </div>
        <div className='puls-benefits'>
          <h1 className='section-heading'>Puls+ Membership Benefits</h1>
          <p className='section-description'>Get access to exclusive discounts and services</p>
          <MemberBenefitsGrid />
        </div>
      </div>
    </div>
  );
};

export default BookAServiceScreen;
