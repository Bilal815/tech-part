import React, { useState } from 'react';
import '../../styles/screens/headerScreens/membersScreen.scss';

import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { BsArrowDown } from 'react-icons/bs';

import { ScrollToTop } from './../../utilities/index';
import MainLandingSection from './../../components/globalComponents/MainLandingSection';
import PropertyManagersSaying from './../../components/globalComponents/PropertyManagersSaying';
import { managerSaying } from '../../data/managerSaying';
import WiderImageContentCard from './../../components/globalComponents/WiderImageContentCard';
import ServicesHoverCardsGrid from './../../components/globalComponents/ServicesHoverCardsGrid';

import starImg from '../../assets/icons/star.svg';
import tagImg from '../../assets/icons/tag.svg';
import diamondImg from '../../assets/icons/diamond.svg';
import pigiImg from '../../assets/icons/pigi.svg';

import bigPulsImg from '../../assets/icons/big-plus.svg';
import blueTickIcon from '../../assets/icons/blue-tick.svg';
import PricingContainer from '../../components/globalComponents/PricingContainer';
import BackgroundPulsImageSection from '../../components/globalComponents/BackgroundPulsImageSection';
import BulletPoints from '../../components/globalComponents/BulletPoints';

const MembersScreen = () => {
  ScrollToTop();
  const cardData = {
    image: `https://d7gh5vrfihrl.cloudfront.net/website/membership/puls-info.jpg`,
    options: [
      { title: `Online booking`, description: `Request an appointment in minutes` },
      {
        title: `Fully insured service`,
        description: `Covered by $5 million insurance in case of an accident`,
      },
      {
        title: `Free cancelation`,
        description: `You will only be charged after your service is completed`,
      },
    ],
  };

  const bulletPoints = [
    {
      image: starImg,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/membership/intro/star.svg`,
      title: `Extended Guarantee`,
      description: `Double your guarantee to 180 days, or even extend it up to 1 year`,
    },
    {
      image: tagImg,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/membership/intro/tag.svg`,
      title: `Save 20% on all service`,
      description: `No charge until service is completed`,
    },
    {
      image: diamondImg,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/membership/intro/diamond.svg`,
      title: `Puls+ Member Deals`,
      description: `Exclusive offers only for Puls+ members`,
    },
    {
      image: pigiImg,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/membership/intro/pigi.svg`,
      title: `Priority Booking`,
      description: `Our highest-rated technicians will prioritize your service`,
    },
  ];

  const membershipBenefitsPoints = [
    { title: `Exclusive Discounts`, description: `Save 20% on all Puls services and offers` },
    {
      title: `Priority Booking`,
      description: `We will prioritize your repair & assign the best available tech`,
    },
    {
      title: `Personal Puls Concierge`,
      description: `Questions? Need advice? You have a direct line to our expert support team`,
    },
    {
      title: `Ultimate Home Service`,
      description: `White-glove care for your home by our elite technicians`,
    },
    {
      title: `Double the Guarantee`,
      description: `Extend your service guarantee from 90 to 180 days`,
    },
    {
      title: `Special Promotions`,
      description: `Save even more with special deals designed for members`,
    },
    {
      title: `Access to Elite Techs`,
      description: `Access to the highest-rated and best-trained technicians`,
    },
    {
      title: `Access to Puls DIY platform`,
      description: `Learn useful home improvement tips from our expert guides`,
    },
    { title: `Preventative Home check-up`, description: `2 Annual Home check-up Visits` },
    {
      title: `First Look at New Services`,
      description: `Puls+ members receive exclusive access to our newest services`,
    },
  ];

  const backgroundPulsImageOptions = [
    `No claims, no monthly premiums`,
    `Our own technicians will be there as early as the same or next day`,
    `Our technicians receive thorough background checks`,
    `No more waiting for your home warranty to respond to your service request`,
  ];

  return (
    <div className='membersScreen'>
      <MainLandingSection
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/new-membership-desktop.png'
        title='Protect your, home with'
        blueTitle='puls+'
        boldDescription='Get complete peace of mind & receive'
        points={[
          'Flat-rate service fees',
          '20% off on every service',
          'Extended service guarantee',
        ]}
        btnTitle='View plans'
        btnLink='/create-sale/zip-code'
        number='(858) 225-8352'
      />
      <div className='container-75'>
        <div className='services-calls center'>
          <p className='mt-5 mb-3'>
            See why 50,000+ service calls <br /> have been made with Puls
          </p>
          <BsArrowDown className='arrow-down' size={30} />
        </div>
        <div className='introducing-puls'>
          <div className='my-5 center'>
            <h1 className='center-bold-heading'>
              Introducing <span className='blue'>puls+</span>
            </h1>
            <h4>
              Solutions to <b>all</b> your home maintenance needs
            </h4>
          </div>
          <BulletPoints bulletPoints={bulletPoints} heading='Introducing' bgColor='dark-blue' />
          {/* {introducingOptions &&
              introducingOptions.map((item, i) => (
                <Col key={i} sm={12} md={6} lg={3}>
                  <div className='introducing-container'>
                    <div className='blue-circle'>
                      <img src={item.img} alt='image' />
                    </div>
                    <p className='title'>{item.title}</p>
                    <p className='description'>{item.description}</p>
                  </div>
                </Col>
              ))} */}
        </div>
        <BackgroundPulsImageSection
          heading='Service you can trust. On Time.'
          subHeading=''
          backgroundPulsImageOptions={backgroundPulsImageOptions}
        />
      </div>
      <div className='container-65'>
        <div className='membership-program'>
          <PricingContainer />
        </div>
      </div>
      <div className='container-75'>
        <div className='explore-puls'>
          <div className='my-5 center'>
            <h1 className='center-bold-heading'>
              Explore My <span className='blue'>puls+</span>
            </h1>
            <h4>
              Solutions to <b>all</b> your home maintenance needs
            </h4>
          </div>
          <ServicesHoverCardsGrid />
        </div>
        <div className='membership-benefits'>
          <img src='https://d7gh5vrfihrl.cloudfront.net/website/membership/big-plus.svg' />
          <div className='content-center center'>
            <h1 className='center-bold-heading'>
              <span className='blue'>puls</span> Membership Benefits
            </h1>
            <h4>Get access to exclusive discounts and services</h4>
          </div>
          <Row className='membership-benefits-points'>
            {membershipBenefitsPoints &&
              membershipBenefitsPoints.map((item, i) => (
                <Col sm={12} md={6} lg={3}>
                  <div key={i} className='mb-5'>
                    {item.title && <h6>{item.title}</h6>}
                    {item.description && <p>{item.description}</p>}
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </div>
      <div className='container-60 center treat-yourself-section'>
        <h1 className='center-bold-heading'>Treat your home. Treat yourself. Reliably.</h1>
        <WiderImageContentCard cardData={cardData} />
        <a href='https://puls.com/create-sale/membership' target='_blank'>
          Join Puls+
        </a>
      </div>
      <div className='container-75 mt-5'>
        <div className='content-center center'>
          <h1 className='center-bold-heading'>
            Best of <span className='blue'>puls+</span> 2020
          </h1>
          <h4>
            Here's a look at what <span className='blue'>puls+</span> members enjoyed most this past
            year
          </h4>
        </div>
        <PropertyManagersSaying managerSaying={managerSaying} />
      </div>
    </div>
  );
};

export default MembersScreen;
