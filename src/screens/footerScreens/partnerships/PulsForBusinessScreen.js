import React from 'react';
import MainLandingSection from '../../../components/globalComponents/MainLandingSection';
import '../../../styles/screens/footerScreens/partnerships/pulsForBusinessScreen.scss';
import { ScrollToTop } from './../../../utilities/index';
import HowItWorks from '../../../components/globalComponents/HowItWorks';
import BulletPoints from '../../../components/globalComponents/BulletPoints';
import BlackFeaturedIn from '../../../components/globalComponents/BlackFeaturedIn';
import TopTechnicianNeighborhoodCardsSection from './../../../components/globalComponents/TopTechnicianNeighborhoodCardsSection';
import GetStarted2 from './../../../components/globalComponents/GetStarted2';
import { Link } from 'react-router-dom';

const PulsForBusinessScreen = () => {
  // ScrollToTop();
  const howItWorksPoints = [
    {
      title: `Same-day service`,
      description: `Phone repair and TV mounting whenever you need it`,
    },
    {
      title: `Seamless on-site convenience`,
      description: `Expert techs arrive at your location, often within the hour`,
    },
    {
      title: `Enterprise level support`,
      description: `Top quality parts and service come with a lifetime guarantee`,
    },
  ];

  const bulletPoints = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/icons/billing.svg`,
      title: `Centralized, billing`,
      description: `Streamline your phone repair workflow`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/icons/volume.svg`,
      title: `Volume based, discounts`,
      description: `Give employees the flexibility to book appointments on-site, at home or on the road with unique codes`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/icons/solutions.svg`,
      title: `Customized, solutions`,
      description: `From conferences to app integrations, we're always open to exploring new ways to partner`,
    },
  ];

  const PulsForBusinessFooter = () => {
    return (
      <footer className='pulsForBusinessFooter'>
        <div className='wrapper'>
          <Link to='/terms-and-conditions' className='terms'>
            Terms
          </Link>
          <Link to='/privacy' className='privacy'>
            Privacy
          </Link>
          <span className='copy-right'>© Puls Technologies Inc 2021</span>
        </div>

        <p className='notice'>
          Puls Technologies Inc. is not in any way associated with Puls GmbH of Munchen
        </p>
      </footer>
    );
  };

  return (
    <div className='pulsForBusinessScreen'>
      <MainLandingSection
        color='white'
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/business-banner.jpg'
        title='Puls for business'
        description='Companies and schools of all, sizes rely on Puls for device, repair and TV mounting'
        btnTitle='Repair my Device'
        btnLink='/'
      >
        <img
          className='simplisafe-logo simplisafe-logo1'
          src='https://d7gh5vrfihrl.cloudfront.net/website/banners/yelp-with-stars.png'
          alt=''
        />
      </MainLandingSection>
      <HowItWorks
        howItWorksPoints={howItWorksPoints}
        title='How can Puls enhance productivity, at your organization?'
      />
      <div className='container-75'>
        <BulletPoints bulletPoints={bulletPoints} color='blue' />
      </div>
      <BlackFeaturedIn />
      <div className='container-75'>
        <div className='trusted-technicians'>
          <h3 className='section-heading'>Trusted technicians, nationwide</h3>
          <p>We select the best - only 10% meet our screening criteria</p>
          <TopTechnicianNeighborhoodCardsSection screen='pulsForBusiness' />
        </div>
      </div>
      <GetStarted2
        btnTitle='Get Started'
        btnUrl='/'
        title='Want to work together?'
        bgImage='https://d7gh5vrfihrl.cloudfront.net/website/get-started/get-started-business.jpg'
      />
      <PulsForBusinessFooter />
    </div>
  );
};

export default PulsForBusinessScreen;
