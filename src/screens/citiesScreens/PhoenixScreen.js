import React from 'react';
import '../../styles/screens/citiesScreens/phoenixScreen.scss';

import { ScrollToTop } from './../../utilities/index';
import CitiesLandingPage from './../../components/globalComponents/CitiesLandingPage';

const PhoenixScreen = () => {
  ScrollToTop();
  return (
    <div className='phoenixScreen '>
      <CitiesLandingPage />
    </div>
  );
};

export default PhoenixScreen;
