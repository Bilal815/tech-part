import React from 'react';
import '../../styles/components/globalComponents/citiesLandingPage.scss';

import { Link } from 'react-router-dom';

import PulsWhiteLogo from '../../assets/icons/puls_logo_white.svg';
import LandingPageImage from '../../assets/images/landing-page-1.jpg';

const CitiesLandingPage = ({ city, citiesLandingPageImage }) => {
  return (
    <div className='citiesLandingPage'>
      <Link to='/'>
        <img src={PulsWhiteLogo} alt='PulsWhiteLogo' />
      </Link>

      <div>
        <div className='content-wrapper'>
          <h1>{city} install & repair services</h1>
          <p>
            Our local experts in your neighborhood can be <br /> there as soon as same-day.
          </p>
          <Link to='/book-a-service'>Book an appointment</Link>
        </div>
        <div className='image-wrapper'>
          <img
            src={citiesLandingPageImage ? citiesLandingPageImage : LandingPageImage}
            alt='LandingPageImage'
          />
        </div>
      </div>
    </div>
  );
};

export default CitiesLandingPage;
