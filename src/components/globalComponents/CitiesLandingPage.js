import React from 'react';
import '../../styles/components/globalComponents/citiesLandingPage.scss';

import { Link } from 'react-router-dom';

import PulsWhiteLogo from '../../assets/icons/puls_logo_white.svg';
import LandingPageImage from '../../assets/images/landing-page-1.jpg';
import { Button } from './../../styledComponents/index';

const CitiesLandingPage = ({}) => {
  return (
    <div className='citiesLandingPage'>
      <Link to='/'>
        <img src={PulsWhiteLogo} alt='PulsWhiteLogo' />
      </Link>

      <div>
        <div className='content-wrapper'>
          <h1>Phoenix install & repair services</h1>
          <p>Our local experts in your neighborhood can be there as soon as same-day.</p>
          <Button>book an appointment</Button>
        </div>
        <div className='image-wrapper'>
          <img src={LandingPageImage} alt='LandingPageImage' />
        </div>
      </div>
    </div>
  );
};

export default CitiesLandingPage;
