import React from 'react';
import '../styles/screens/homeScreen.scss';

import { ScrollToTop } from '../utilities';
import GetStarted1 from './../components/globalComponents/GetStarted1';
import CitiesWherePulsAvailable from './../components/globalComponents/CitiesWherePulsAvailable';
import FeaturedIn from './../components/globalComponents/FeaturedIn';
import TrustedBy from './../components/globalComponents/TrustedBy';
import GetApp from './../components/globalComponents/GetApp';
import MainLandingSection from '../components/globalComponents/MainLandingSection';

const HomeScreen = () => {
  ScrollToTop();
  return (
    <div className='homeScreen'>
      <MainLandingSection
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/home-page-new.jpg'
        title='Home maintenance,made simple'
        description='The best technicians in, your neighborhood.'
        btnTitle='Book a Service'
        btnLink='/book-a-service'
      />

      <div className='container-75'>
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
