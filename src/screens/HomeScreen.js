import React from 'react';
import '../styles/screens/homeScreen.scss';

import { ScrollToTop } from '../utilities';
import GetStarted1 from './../components/globalComponents/GetStarted1';
import CitiesWherePulsAvailable from './../components/globalComponents/CitiesWherePulsAvailable';
import FeaturedIn from './../components/globalComponents/FeaturedIn';
import TrustedBy from './../components/globalComponents/TrustedBy';
import GetApp from './../components/globalComponents/GetApp';
import MainLandingSection from '../components/globalComponents/MainLandingSection';
import ServicesHoverCardsGrid from './../components/globalComponents/ServicesHoverCardsGrid';
import { Link } from 'react-router-dom';
import TopTechnicianYelpCard from '../components/globalComponents/TopTechnicianYelpCard';
import { Row, Col } from 'react-bootstrap';
import BeatPulsBlodCard from './../components/globalComponents/BeatPulsBlodCard';

const HomeScreen = () => {
  // ScrollToTop();
  const topTechnicianOptions = [
    {
      imageUrl: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/roshan.jpg`,
      name: `Roshan`,
      quote: `Puls was quick, affordable, and extremely convenient! Roshan was my tech and he was great. Would 100% use Puls again!`,
      reviewer: `Adrienne | Los Angeles, CA`,
    },
    {
      imageUrl: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/kevin.jpg`,
      name: `Kevin`,
      quote: `This is one of the best services around. Kevin, my tech, was punctual, courteous and efficient. Will definitely use Puls again.`,
      reviewer: `Donnie | Colton, CA`,
    },
    {
      imageUrl: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/sam.jpeg`,
      name: `Sam`,
      quote: `I'm impressed at the efficiency of this company. Sam was a real MVP, super professional and friendly.`,
      reviewer: `Sriram | Houston, TX`,
    },
  ];

  const beatPulsBlogOptions = [
    {
      url: ``,
      imageUrl: `https://f.hubspotusercontent10.net/hubfs/4039866/shutterstock_756122107.jpg`,
      title: `The Right Season for Interior Painting & Cost Breakdown`,
      description: `If your walls can use a new coat of paint, you...`,
      date: `June 2021`,
    },
    {
      url: ``,
      imageUrl: `https://f.hubspotusercontent10.net/hubfs/4039866/shutterstock_1226601253.jpg`,
      title: `Summer Season Maintenance You Need for Your Appliances`,
      description: `Today's appliances are so reliable that you rarely...`,
      date: `June 2021`,
    },
    {
      url: ``,
      imageUrl: `https://f.hubspotusercontent10.net/hubfs/4039866/shutterstock_643473778.png`,
      title: `5 Smart Home Tips to Kick Your Summer BBQ Up a Notch`,
      description: `We’ve got some tech-driven summer bbq tips that...`,
      date: `June 2021`,
    },

    {
      url: ``,
      imageUrl: `https://f.hubspotusercontent10.net/hubfs/4039866/shutterstock_1156209073.jpg`,
      title: `Tips for Keeping Your Home’s Electrical System Safe`,
      description: `Electricity is an essential element in your home...`,
      date: `April 2021`,
    },
  ];
  return (
    <div className='homeScreen'>
      <MainLandingSection
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/home-page-new.jpg'
        title='Home maintenance,made simple'
        description='The best technicians in, your neighborhood.'
        btnTitle='Book a Service'
        btnLink='/book-a-service'
      />
      <Link to='/members' className='membership-link'>
        <div className='container-75 blue pl-1'>
          Home owner?
          <span className='ml-3'>
            Get complete peace of mind with <b className='blue'>puls+</b>
            <span className='arrow'>
              <svg xmlns='http://www.w3.org/2000/svg' width='12' height='22' viewBox='0 0 12 22'>
                <path
                  fill='none'
                  fill-rule='evenodd'
                  stroke='#027AFF'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M938 598L928 588 938 578'
                  transform='rotate(-180 469.5 299.5)'
                ></path>
              </svg>
            </span>
          </span>
        </div>
      </Link>
      <div className='container-75'>
        <div className='my-5'>
          <ServicesHoverCardsGrid />
        </div>
        <div className='top-technician my-5'>
          <h1>Our top technicians are in your neighborhood and beyond</h1>
          <Row>
            {topTechnicianOptions &&
              topTechnicianOptions.map((tech, i) => (
                <Col key={i} sm={12} md={6} lg={4}>
                  <TopTechnicianYelpCard tech={tech} />
                </Col>
              ))}
          </Row>
        </div>
        <div className='beat-puls-blog my-5'>
          <h1>The beat - the Puls blog</h1>
          <Row>
            {beatPulsBlogOptions &&
              beatPulsBlogOptions.map((blog, i) => (
                <Col key={i} sm={12} md={6} lg={3}>
                  <BeatPulsBlodCard blog={blog} />
                </Col>
              ))}
          </Row>
        </div>
        <GetApp />
        <TrustedBy />
        <FeaturedIn />
        <CitiesWherePulsAvailable />
        <GetStarted1 />
      </div>
    </div>
  );
};

export default HomeScreen;
