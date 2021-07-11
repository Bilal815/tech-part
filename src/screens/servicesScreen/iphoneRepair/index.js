import React from 'react';
import '../../../styles/screens/servicesScreens/iphoneRepair/index.scss';
import { ScrollToTop } from './../../../utilities/index';
import MainLandingSection from './../../../components/globalComponents/MainLandingSection';
import GetStarted2 from '../../../components/globalComponents/GetStarted2';

import CnbcLogo from '../../../assets/icons/brands-logo/cnbc.svg';
import TcLogo from '../../../assets/icons/brands-logo/tc.svg';
import TwsjLogo from '../../../assets/icons/brands-logo/twsj.svg';
import FortuneLogo from '../../../assets/icons/brands-logo/fortune.svg';
import FeaturedIn from '../../../components/globalComponents/FeaturedIn';
import HowItWorks from '../../../components/globalComponents/HowItWorks';
import { Row, Col } from 'react-bootstrap';
import TopTechnicianNeighborhoodCardsSection from './../../../components/globalComponents/TopTechnicianNeighborhoodCardsSection';

const IphoneRepairScreen = () => {
  ScrollToTop();
  const logos = [CnbcLogo, TcLogo, TwsjLogo, FortuneLogo];

  const howItWorksPoints = [
    {
      title: `Tell us about your device`,
      description: `We support Apple, Google and Samsung phones and tablets`,
    },
    {
      title: `Confirm a time and location`,
      description: `Puls technicians meet you same day, wherever you may be`,
    },
    {
      title: `Get on with your day`,
      description: `We supply the parts and skills. No need to ship your device, drive to a store or wait in line`,
    },
  ];
  return (
    <div className='iphoneRepairScreen'>
      <MainLandingSection
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/city-banner.jpg'
        title='Trusted phone repairs at, your location'
        description='Phone repair made simple'
        btnTitle='Repair my Device'
        btnLink='/'
      >
        <div className='images-container'>
          <img
            src='https://d7gh5vrfihrl.cloudfront.net/website/badges/yelp-stars.png'
            alt='image'
          />
        </div>
      </MainLandingSection>
      <div className='container-75'>
        <div className='why-puls'>
          <h3 className='gray-center-section-heading'>Why Puls</h3>
          <Row>
            <Col sm={12} md={4}>
              <div className='point-container'>
                <h5>We come to you</h5>
                <p>We fix your phone on the spot, at your home or office</p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className='point-container'>
                <h5>On time, every time</h5>
                <p>
                  Get a quote in seconds. Your{' '}
                  <a href=' https://info.puls.com/iphone-screen-repair' target='_blank'>
                    iPhone screen repair
                  </a>{' '}
                  is done in as little as one hour
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className='point-container'>
                <h5>Risk free</h5>
                <p>Parts and labor guaranteed</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className='top-technicians-neighborhood'>
          <h3 className='gray-center-section-heading'>The best technicians in your neighborhood</h3>
          <TopTechnicianNeighborhoodCardsSection />
        </div>
      </div>

      <HowItWorks howItWorksPoints={howItWorksPoints} />
      <div className='mt-5'>
        <FeaturedIn backgroundColor='black' logos={logos} />
      </div>
      <GetStarted2
        bgImage='https://d7gh5vrfihrl.cloudfront.net/website/backgrounds/background-getstarted-old.jpg'
        title='Ready to get started?'
        btnTitle='Book a Service'
        btnUrl=''
      />
    </div>
  );
};

export default IphoneRepairScreen;
