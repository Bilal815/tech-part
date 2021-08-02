import React from 'react';
import '../../../styles/screens/footerScreens/partnerships/simplisafeScreen.scss';
import { ScrollToTop } from './../../../utilities/index';
import MainLandingSection from './../../../components/globalComponents/MainLandingSection';
import BulletPoints from './../../../components/globalComponents/BulletPoints';
import TopTechnicianNeighborhoodCardsSection from './../../../components/globalComponents/TopTechnicianNeighborhoodCardsSection';
import BlackFeaturedIn from '../../../components/globalComponents/BlackFeaturedIn';
import OnHoverZoomLearnMoreCardSection from './../../../components/globalComponents/OnHoverZoomLearnMoreCardSection';
import OnHoverZoomReadMoreCardSection from './../../../components/globalComponents/OnHoverZoomReadMoreCardSection';
import Locations from './../../../components/globalComponents/Locations';
import HowItWorks from '../../../components/globalComponents/HowItWorks';
import GetStarted2 from '../../../components/globalComponents/GetStarted2';
import SupportedDevicesTable from '../../../components/globalComponents/SupportedDevicesTable';

const SimplisafeScreen = () => {
  ScrollToTop();
  const bulletPoints = [
    {
      title: `Smart home's no brainer solution`,
      description: `Maximize the safety of your home with smart security and expert setup support`,
    },
    {
      title: `No missed connections`,
      description: `Professional placement of sensors and detectors ensures your home has no weak points`,
    },
    {
      title: `Breathe easy`,
      description: `Our setup support services come with our lifetime guarantee`,
    },
  ];

  const howItWorksPoints = [
    {
      title: `Quick booking`,
      description: `Book a same-day appointment in seconds`,
    },
    {
      title: `Professional in-home setup support`,
      description: `Puls is an official SimpliSafe demo and setup partner`,
    },
    {
      title: `Safe payment`,
      description: `Get a quote in seconds. Pay us only safter the job is done`,
    },
  ];

  const learnMoreInfo = [
    {
      bgImage: `https://d7gh5vrfihrl.cloudfront.net/website/other-services/service-block-phone-repair-phone-repair.jpg`,
      url: `/services/iphone-repair`,
      title: `Phone repair`,
      subTitle: `Starts at $69`,
      descriptionPoints: [
        'iPhone, iPad, Pixel, Galaxy repairs.',
        'We come to you in under an hour',
        'Broken screens, batteries, and more',
      ],
    },
    {
      bgImage: `https://d7gh5vrfihrl.cloudfront.net/website/other-services/tv-mounting.jpg`,
      url: `/services/tv-mounting`,
      title: `TV mounting`,
      subTitle: `Starts at $89`,
      descriptionPoints: ['Let us do the heavy lifting', 'Same-day mounting for big screen TVs'],
    },
  ];

  const readMoreInfo = [
    {
      bgImage: `https://d7gh5vrfihrl.cloudfront.net/website/blog-posts/simpli-safe/home-security.jpg`,
      title: `Inside today’s smart home: part 1 - home security systems`,
      blogUrl: `https://blog.puls.com/home-security-systems`,
    },
    {
      bgImage: `https://d7gh5vrfihrl.cloudfront.net/website/blog-posts/simpli-safe/light-automation.jpg`,
      title: `Inside today’s smart home: part 2 – light automation`,
      blogUrl: `https://blog.puls.com/inside-todays-smart-home-light-automation`,
    },
  ];

  const supportedDevicesInfo = {
    info: [
      `24/7, Monitoring`,
      `No annual, contracts`,
      `Arm and disarm, from anywhere`,
      `Controlled from, your phone`,
      `Monitor home, temperature`,
      `Wireless, protection`,
    ],
    bgImage: `https://d7gh5vrfihrl.cloudfront.net/website/banners/supported-devices-simplisafe.png`,
  };

  return (
    <div className='simplisafeScreen'>
      <MainLandingSection
        color='white'
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/simpli-safe.jpg'
        title='Welcome, SimpliSafe customers!'
        description='Home security pros at your door, in 1 hour 7 days a week'
        btnTitle='Book Now'
        btnLink='/'
      >
        <img
          className='simplisafe-logo simplisafe-logo1'
          src='https://d7gh5vrfihrl.cloudfront.net/website/banners/yelp-with-stars.png'
          alt=''
        />
        <img
          className='simplisafe-logo simplisafe-logo2'
          src='https://d7gh5vrfihrl.cloudfront.net/website/banners/simplisafe-newlogo.png'
          alt=''
        />
      </MainLandingSection>
      <div className='container-75 why-simplisafe'>
        <BulletPoints bulletPoints={bulletPoints} heading='Why SimpliSafe?' />
      </div>
      <HowItWorks
        bgImage='https://d7gh5vrfihrl.cloudfront.net/website/whyus/whyus-simplisafe.jpg'
        howItWorksPoints={howItWorksPoints}
      />

      <div className='container-75'>
        <div className='get-to-know-simplisafe'>
          <h1 className='simplisafe-section-heading mb-2'>Get to know SimpliSafe</h1>
          <p className='sub-heading'>
            Puls is an official SimpliSafe partner, offering white-glove setup support. Contact us
            for services and in-home demo for all your smart home products
          </p>
          <SupportedDevicesTable supportedDevicesInfo={supportedDevicesInfo} />
        </div>
        <div className='trusted-technicians'>
          <h1 className='simplisafe-section-heading mb-2'>Trusted technicians, nationwide</h1>
          <p> We select the best - only 10% meet our screening criteria</p>
          <TopTechnicianNeighborhoodCardsSection />
        </div>
      </div>
      <BlackFeaturedIn />
      <div className='container-75'>
        <div className='other-services'>
          <h1 className='simplisafe-section-heading'>Other services you would like...</h1>
          <OnHoverZoomLearnMoreCardSection learnMoreInfo={learnMoreInfo} />
        </div>
        <div className='beat-puls-blog'>
          <h1 className='simplisafe-section-heading'>The beat - the Puls blog</h1>
          <OnHoverZoomReadMoreCardSection readMoreInfo={readMoreInfo} />
        </div>
        <div className='locations-section'>
          <h1 className='simplisafe-section-heading'>Locations</h1>
          <Locations />
        </div>
      </div>
      <GetStarted2
        btnTitle='In-home Setup Support | Book Now'
        btnUrl='/'
        title='Ready to get started?'
        bgImage='https://d7gh5vrfihrl.cloudfront.net/website/backgrounds/get-started-simpli-safe.jpg'
      />
    </div>
  );
};

export default SimplisafeScreen;
