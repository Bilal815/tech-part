import React from 'react';
import MainLandingSection from '../../../components/globalComponents/MainLandingSection';
import '../../../styles/screens/footerScreens/partnerships/pulsForBusinessScreen.scss';
import { ScrollToTop } from './../../../utilities/index';
import HowItWorks from '../../../components/globalComponents/HowItWorks';
import BulletPoints from '../../../components/globalComponents/BulletPoints';
import BlackFeaturedIn from '../../../components/globalComponents/BlackFeaturedIn';
import TopTechnicianNeighborhoodCardsSection from './../../../components/globalComponents/TopTechnicianNeighborhoodCardsSection';

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

  const topTechnicianNeighborhoodCardsSectionInfo = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/ben.jpeg`,
      name: `Ben`,
      job: `Phone repair`,
      title: `Saved the day!`,
      introduction: `Fun Valentines Day and a broken cell phone screen. I made the appointment at midnight and at 8:55am Ben was here to fix the phone. 20 minutes later my shattered phone is repaired and I have new tempered glass. No upcharges and you pay for the work once it is completed. Service was polite, friendly, and I shall never be that careless again! They truly saved the day!`,
      location: `Adrienne | Los Angeles, CA`,
      logo: `https://d7gh5vrfihrl.cloudfront.net/website/badges/yelp.png`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/sam.jpeg`,
      name: `Sam`,
      job: `Phone repair`,
      title: `A real MVP`,
      introduction: `I'm impressed at the efficiency of this company. If it were truly an emergency, Puls would be a real lifesaver. ... Sam was a real MVP, super professional and friendly and fixed me up in no time.`,
      location: `Donnie | Colton, CA`,
      logo: `https://d7gh5vrfihrl.cloudfront.net/website/badges/yelp.png`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/rob.jpeg`,
      name: `Robert`,
      job: `TV Mounting`,
      title: `1 hour & happy!`,
      introduction: `I struggled with fixing a wall mount until I Googled 'Houston TV mounting' and booked Puls. Robert showed up at 3 and was done by 4. Very courteous and fast. Highly recommended`,
      location: `Sriram | Houston, TX`,
      logo: `https://d7gh5vrfihrl.cloudfront.net/website/badges/facebook-water.svg`,
    },
  ];

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
        <TopTechnicianNeighborhoodCardsSection
          topTechnicianNeighborhoodCardsSectionInfo={topTechnicianNeighborhoodCardsSectionInfo}
        />
      </div>
    </div>
  );
};

export default PulsForBusinessScreen;
