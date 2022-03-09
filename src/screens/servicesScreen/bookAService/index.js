import React, { useState, useEffect } from 'react';
import '../../../styles/screens/servicesScreens/bookAService/index.scss';
import { ScrollToTop } from './../../../utilities/index';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import BulletPoints from '../../../components/globalComponents/BulletPoints';

const BookAServiceScreen = (props) => {
  const {services} = props?props:[{id:"", name:""}];
  console.log(services);

  const [deviceYouNeed, setDeviceYouNeed] = useState(``);
  const [ourservices, _ourservices] = useState({});
  
  const useEffect=(()=>{
    _ourservices(services);
  }, [ourservices] )


  const nineServiceCardInfo = [
    {
      serviceLink: `/book-a-service/service/home-appliances`,
      serviceTitle: `Home Appliances Repair`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/apr.svg`,
    },
    {
      serviceLink: `/book-a-service/service/TV-Mounting/`,
      serviceTitle: `TV Mounting`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/tvi.svg`,
    },
    {
      serviceLink: `/book-a-service/service/handyman-services/`,
      serviceTitle: `Handyman Services`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/hdm.svg`,
    },
    {
      serviceLink: `/book-a-service/service/disinfection-services/`,
      serviceTitle: `Disinfection Services`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/disinfection/icon.svg`,
    },
    {
      serviceLink: `/book-a-service/service/disinfection-services/`,
      serviceTitle: `iPhone Repair`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/mdr.svg`,
    },
    {
      serviceLink: `/book-a-service/service/disinfection-services/`,
      serviceTitle: `Smart Home Installation`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/sh.svg`,
    },
    {
      serviceLink: `http://localhost:3000/book-a-service/service/plumbing-services/8`,
      serviceTitle: `Plumbing`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/plumbing.svg`,
    },
    {
      serviceLink: `/book-a-service/service/disinfection-services/`,
      serviceTitle: `Garage Door`,
      serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/garage.svg`,
    },
    // {
    //   serviceLink: ``,
    //   serviceTitle: `Security System Setup`,
    //   serviceImage: `https://d7gh5vrfihrl.cloudfront.net/website/membership/services/simpli.svg`,
    // },
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
      title: `Access to Techpart DIY platform`,
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

  const bulletPoints = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/membership/intro/diamond-light.svg`,
      title: `Priority Booking`,
      description: `Our highest-rated technicians will prioritize your service`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/membership/intro/tag-light.svg`,
      title: `Save up to 25% on all service`,
      description: `No charge until service is completed`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/membership/intro/pigi-light.svg`,
      title: `Puls+ Member Deals`,
      description: `Exclusive offers only for Puls+ members`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/membership/intro/star-light.svg`,
      title: `Extended Guarantee`,
      description: `Double your guarantee to 180 days!`,
    },
  ];
  const NineServiceCard = ({ service }) => (
    <Link
      to={"/book-a-service/service/"+service.slug+"/"+service.id} 
      className='nineServiceCard'
    >
      <div className='inner'>
        <div className='image-conatiner'>
          <img src={"services-icons/hover/"+service.slug+".svg" } alt='service' />
        </div>
        <div className='title'>
          <span>{service.name}</span>
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
        {services &&
          services.map((service, i) => (
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
          <h1 className='section-heading'>Book a Techpart home maintenance service</h1>
          <div className='input-container'>
            <input
              className="service-search-field"
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
      </div>
      <div className='introducing-puls'>
        <div className='heading-description-container'>
          <h1 className='section-heading'>
            Introducing Techpart <sup>+</sup>
          </h1>
          <p className='section-description'>Solutions to all your home maintenance needs</p>
        </div>
        <div className='light-blue-background'>
          <div className='container-75 bullet-points-container'>
            <BulletPoints bulletPoints={bulletPoints} bgColor='light-blue' />
          </div>
          <div className='container-75 light-free-checkup'>
            <Row>
              <Col sm={12} md={6}>
                <div className='image-container'>
                  <img
                    src='https://d7gh5vrfihrl.cloudfront.net/website/benefits/techs.png'
                    alt=''
                  />
                </div>
              </Col>
              <Col sm={12} md={6} className='content-container-column'>
                <div className='content-container'>
                  <h1>Ready for a free check-up?</h1>
                  <p className='mt-5 mb-3'>
                    Schedule your free check-up, and a Techpart master technician will personally visit
                    your home and assess all your home-service needs.
                  </p>
                  <p>Enjoy 2 free check-up visits per year as a Techpart member. That is a Plus!</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className='container-75'>
        <div className='puls-benefits'>
          <h1 className='section-heading'>
            Techpart<sup>+</sup> Membership Benefits
          </h1>
          <p className='section-description'>Get access to exclusive discounts and services</p>
          <MemberBenefitsGrid />
        </div>
      </div>
    </div>
  );
};

export default BookAServiceScreen;
