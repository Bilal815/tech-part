import React from 'react';
import { ScrollToTop } from '../utilities';
import GetStarted1 from './../components/globalComponents/GetStarted1';
import CitiesWherePulsAvailable from './../components/globalComponents/CitiesWherePulsAvailable';
import FeaturedIn from './../components/globalComponents/FeaturedIn';
import TrustedBy from './../components/globalComponents/TrustedBy';
import GetApp from './../components/globalComponents/GetApp';

const HomeScreen = () => {
  ScrollToTop();
  return (
    <div className='homeScreen container-75'>
      HomeScreen
      <GetApp />
      <TrustedBy />
      <FeaturedIn />
      <CitiesWherePulsAvailable />
      <GetStarted1 />
    </div>
  );
};

export default HomeScreen;
