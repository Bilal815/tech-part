import React, { useState, useEffect } from 'react';
import '../../../styles/screens/servicesScreens/tvMounting/index.scss';
import { ScrollToTop } from './../../../utilities/index';

import MainLandingSection from './../../../components/globalComponents/MainLandingSection';
import GetStarted1 from './../../../components/globalComponents/GetStarted1';
import ServicesSection from './../../../components/globalComponents/ServicesSection';
import TopTechnicianYelpCardsSlider from './../../../components/globalComponents/TopTechnicianYelpCardsSlider';
import TrustedBy from '../../../components/globalComponents/TrustedBy';
import BeatPulsBlogCardsSlider from './../../../components/globalComponents/BeatPulsBlogCardsSlider';
import FeaturedIn from '../../../components/globalComponents/FeaturedIn';
import OurLocations from './../../../components/globalComponents/OurLocations';
import BulletPoints from './../../../components/globalComponents/BulletPoints';

const TvMountingScreen = ({ services }) => {
  ScrollToTop();

  const [service, _service] = useState({});
  useEffect(() => {
    let found = services.find((service)=> {  
      return service.slug === "tv-mounting"
    })
    _service(found)
  }, [services])


  const locations = [
    'Atlanta, GA',
    'Boston, MA',
    'Charlotte, NC',
    'Chicago, IL',
    'Dallas, TX',
    'Washington DC',
    'Denver, CO',
    'Houston, TX',
    'Indianapolis, IN',
    'Jacksonville, FL',
    'Las Vegas, NV',
    'Miami, FL',
    'Orlando, FL',
    'Philadelphia, PA',
    'Phoenix, AZ',
    'Portland, OR',
    'Raleigh-Durham, NC',
    'San Antonio, TX',
    'Tampa, FL',
    'Tucson, AZ',
  ];
  const cardsInfo = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/up_to_40.svg`,
      link: ``,
      title: `Upto 31"`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/41_60.svg`,
      link: ``,
      title: `32"-60"`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/61_80.svg`,
      link: ``,
      title: `61"-80"`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/over_81.svg`,
      link: ``,
      title: `Over 81"`,
    },
  ];
  const bulletPoints = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/booking.svg`,
      title: `Simple booking`,
      description: `Request an appointment in minutes`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/time_new.svg`,
      title: `Easy scheduling`,
      description: `One-hour arrival windows`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/risk-free.svg`,
      title: `Reliable & vetted`,
      description: `Background checked technicians`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/25-points.svg`,
      title: `Experienced`,
      description: `50,000+ installations and counting`,
    },
  ];

  return (
    <div className='tvMountingScreen'>
      <MainLandingSection
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/home-page-new.jpg'
        title='TV mounting,made simple'
        description='Installations mounts wire hiding, and more!'
        btnTitle={services.length > 0? 'Schedule Now' : undefined} 
        btnLink={services.length > 0?'/book-a-service/service/tv-mounting/'+service.id: undefined}
      >
        <div className='images-container'>
          <a
            target='_blank'
            href='https://www.bbb.org/us/ca/san-francisco/profile/electronics-and-technology/puls-technologies-inc-1116-879293/#sealclick'
            rel="noreferrer"
          >
            <img
              src='https://d7gh5vrfihrl.cloudfront.net/website/badges/bbb-small.png'
              alt='badge'
            />
          </a>
          <img
            className='ml-2'
            src='https://d7gh5vrfihrl.cloudfront.net/website/banners/facebook-rating-blue.svg'
            alt='banner'
          />
        </div>
      </MainLandingSection>
      <div className='container-75'>
        <ServicesSection
          cardsInfo={cardsInfo}
          title='Book an appointment today'
          description='We can mount your TV, conceal wires, and more!'
        />
        <BulletPoints bulletPoints={bulletPoints} />
        <TopTechnicianYelpCardsSlider title='Our top technicians are in your neighborhood and beyond' />
        <TrustedBy />
        <BeatPulsBlogCardsSlider />
      </div>
      <FeaturedIn />
      <div className='container-75'>
        <OurLocations locations={locations} />
        <GetStarted1
          imageUrl='https://d7gh5vrfihrl.cloudfront.net/website/get-started/appliances.jpg'
          title='Ready to get, started?'
          description={`We're only a few clicks or, a phone call away.`}
          btnTitle={services.length > 0? 'Schedule Now' : undefined} 
          btnLink={services.length > 0? '/book-a-service/service/tv-mounting/'+service.id : undefined} />
      </div>
    </div>
  );
};

export default TvMountingScreen;
