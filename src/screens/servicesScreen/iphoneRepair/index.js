import React, { useState, useEffect } from 'react';
import '../../../styles/screens/servicesScreens/iphoneRepair/index.scss';
import { ScrollToTop } from './../../../utilities/index';
import MainLandingSection from './../../../components/globalComponents/MainLandingSection';
import GetStarted2 from '../../../components/globalComponents/GetStarted2';

import BlackFeaturedIn from '../../../components/globalComponents/BlackFeaturedIn';
import HowItWorks from '../../../components/globalComponents/HowItWorks';
import { Row, Col } from 'react-bootstrap';
import TopTechnicianNeighborhoodCardsSection from './../../../components/globalComponents/TopTechnicianNeighborhoodCardsSection';
import OnHoverZoomLearnMoreCardSection from '../../../components/globalComponents/OnHoverZoomLearnMoreCardSection';
import OnHoverZoomReadMoreCardSection from './../../../components/globalComponents/OnHoverZoomReadMoreCardSection';
import SupportedDevicesTable from '../../../components/globalComponents/SupportedDevicesTable';

const IphoneRepairScreen = ({ services }) => {
  ScrollToTop();

  const [service, _service] = useState({});
  useEffect(() => {
    let found = services.find((service)=> {  
      return service.slug === "phone-repair"
    })
    _service(found)
  }, [services])

  const howItWorksPoints = [
    {
      title: `Tell us about your device`,
      description: `We support Apple, Google and Samsung phones and tablets`,
    },
    {
      title: `Confirm a time and location`,
      description: `TechNPart technicians meet you same day, wherever you may be`,
    },
    {
      title: `Get on with your day`,
      description: `We supply the parts and skills. No need to ship your device, drive to a store or wait in line`,
    },
  ];

  const learnMoreInfo = [
    {
      bgImage: `https://d7gh5vrfihrl.cloudfront.net/website/other-services/tv-mounting-new.jpg`,
      url: `/services/tv-mounting`,
      title: `TV mounting`,
      subTitle: `Starts at $89`,
      descriptionPoints: ['Let us do the heavy lifting', 'Same-day mounting for big screen TVs'],
    },
    {
      bgImage: `https://d7gh5vrfihrl.cloudfront.net/website/other-services/smart-home.jpg`,
      url: `/services/smart-home-installation`,
      title: `Smart Home`,
      subTitle: `FREE in-home demo`,
      descriptionPoints: [
        'Get your smart home devices up and running',
        'Voice activation, video, security, home automation',
      ],
    },
  ];

  const readMoreInfo = [
    {
      bgImage: `https://d7gh5vrfihrl.cloudfront.net/website/blog-posts/phone-repair/iphone8.jpg`,
      title: `Common iPhone 8 problems & solutions`,
      blogUrl: `https://blog.puls.com/common-iphone-8-problems-and-solutions`,
    },
    {
      bgImage: `https://d7gh5vrfihrl.cloudfront.net/website/blog-posts/phone-repair/black-iphone-7.jpg`,
      title: `iPhone 7 troubleshooting: common problems & how to fix them`,
      blogUrl: `https://blog.puls.com/iphone-7-troubleshooting`,
    },
  ];

  const supportedDevicesInfo = {
    info: [
      `Screen repair`,
      `Battery replacement`,
      `Camera replacement`,
      `Charging port`,
      `Power button`,
      `Side buttons`,
      `Headphone jack`,
      `Home button`,
      `WiFi / Bluetooth`,
      `Water damage`,
    ],
    bgImage: `https://d7gh5vrfihrl.cloudfront.net/website/banners/what-we-can-fix-iphone.jpg`,
  };

  return (
    <div className='iphoneRepairScreen'>
      <MainLandingSection
        color='white'
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/city-banner.jpg'
        title='Trusted phone repairs at, your location'
        description='Phone repair made simple'
        btnTitle={services.length > 0? 'Repair my Device' : undefined} 
        btnLink={services.length > 0?'/book-a-service/service/phone-repair/'+service.id: undefined}
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
          <h3 className='gray-center-section-heading'>Why TechNPart</h3>
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
      </div>

      <HowItWorks howItWorksPoints={howItWorksPoints} />

      <div className='container-75'>
        <div className='supported-devices'>
          <h3 className='gray-center-section-heading'>Supported devices</h3>
          <SupportedDevicesTable supportedDevicesInfo={supportedDevicesInfo} />
        </div>
        <div className='top-technicians-neighborhood'>
          <h3 className='gray-center-section-heading'>The best technicians in your neighborhood</h3>
          <TopTechnicianNeighborhoodCardsSection />
        </div>
      </div>

      <div className='mt-5'>
        <BlackFeaturedIn />
      </div>
      <div className='container-75'>
        <div className='more-services'>
          <h1 className='gray-center-section-heading'>More services at your door</h1>
          <OnHoverZoomLearnMoreCardSection learnMoreInfo={learnMoreInfo} />
        </div>
        <div className='beat-puls-blog'>
          <h1 className='gray-center-section-heading'>The beat - the TechNPart blog</h1>
          <OnHoverZoomReadMoreCardSection readMoreInfo={readMoreInfo} />
        </div>
      </div>
      <GetStarted2
        bgImage='https://d7gh5vrfihrl.cloudfront.net/website/backgrounds/background-getstarted-old.jpg'
        title='Ready to get started?'
        btnTitle={services.length > 0? 'Book a Service' : undefined} 
        btnUrl={services.length > 0?'/book-a-service/service/phone-repair/'+service.id: undefined}
      />
    </div>
  );
};

export default IphoneRepairScreen;
