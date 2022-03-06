import React from 'react';
import '../../../styles/screens/footerScreens/partnerships/hisenseScreen.scss';
import { ScrollToTop } from './../../../utilities/index';
import MainLandingSection from './../../../components/globalComponents/MainLandingSection';
import BulletPoints from '../../../components/globalComponents/BulletPoints';
import OnHoverZoomLearnMoreCardSection from './../../../components/globalComponents/OnHoverZoomLearnMoreCardSection';

const HisenseScreen = () => {
  ScrollToTop();

  const bulletPoints = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/antop/antop-calender-1.svg`,
      title: `Seamless booking`,
      description: `Setup can be scheduled for the same day that your TV arrives `,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/antop/antop-install.svg`,
      title: `Professional setup`,
      description: `Expert technicians ensure your TV 
      is optimally installed and connected to 
      peripherals`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/hisense/lifetime.svg`,
      title: `Lifetime guarantee`,
      description: `All services are backed by our`,
      linkTitle: `lifetime guarantee`,
      linkUrl: `/guarantee`,
    },
  ];

  const learnMoreInfo = [
    {
      bgImage: `https://d7gh5vrfihrl.cloudfront.net/website/other-services/service-block-phone-repair-phone-repair.jpg`,
      url: `/services/iphone-repair`,
      title: `Device Repair`,
      subTitle: `Starts at $69`,
      descriptionPoints: [
        'Fix shattered screens, broken batteries, water damage, and more',
        'Apple iPhones, iPads, Google Pixel and Samsung Galaxy',
      ],
    },
    {
      bgImage: `https://d7gh5vrfihrl.cloudfront.net/website/other-services/smart-home.jpg`,
      url: `/services/smart-home-installation`,
      title: `Smart home set-up`,
      subTitle: `Starts at $79`,
      descriptionPoints: ['Get the most out of home automation', 'In-home demo and installation'],
    },
  ];

  return (
    <div className='hisenseScreen'>
      <MainLandingSection
        color='white'
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/hisense.png'
        title='Professional installation and, setup for your new Hisense Laser TV'
        description='Expert TechNPart technicians are on the job so you can, \
        sit back and enjoy your new Hisense Laser TV.'
        btnTitle='Book Now'
        btnLink='/'
      >
        <img
          src='https://d7gh5vrfihrl.cloudfront.net/website/banners/hisense-icon.png'
          alt='hisense-logo'
        />
      </MainLandingSection>
      <div className='container-75'>
        <BulletPoints bulletPoints={bulletPoints} color='blue' />
        <div className='what-puls-help'>
          <h2 className='section-heading'>What else can TechNPart help you with?</h2>
          <OnHoverZoomLearnMoreCardSection learnMoreInfo={learnMoreInfo} />
        </div>
      </div>
    </div>
  );
};

export default HisenseScreen;
