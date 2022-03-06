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
import TopTechnicianYelpCardsSlider from '../components/globalComponents/TopTechnicianYelpCardsSlider';
import BeatPulsBlogCardsSlider from './../components/globalComponents/BeatPulsBlogCardsSlider';

import Image from '../assets/images/tv-mounting-new.jpg';
import HomeSimpleWayToTakeCare from './../components/globalComponents/HomeSimpleWayToTakeCare';

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
      <Link to='/members' className='membership-link'>
        <div className='container-75 blue pl-1'>
          Home owner?
          <span className='ml-3'>
            Get complete peace of mind with <b className='blue'>TechNPart</b>
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
          <ServicesHoverCardsGrid screen={'home'} />
        </div>
        <HomeSimpleWayToTakeCare />
        <TopTechnicianYelpCardsSlider title='Our top technicians are in your neighborhood and beyond' />
        <div className='beat-puls-blog'>
          <BeatPulsBlogCardsSlider />
        </div>
        <GetApp />
        <TrustedBy />
      </div>
      <FeaturedIn />
      <div className='container-75'>
        <CitiesWherePulsAvailable />
        <GetStarted1
          btnLink='/book-a-service'
          btnTitle='Book a Service'
          imageUrl={Image}
          title='Ready to get started?'
          description='Repair or install a device today.'
        />
      </div>
    </div>
  );
};

export default HomeScreen;
