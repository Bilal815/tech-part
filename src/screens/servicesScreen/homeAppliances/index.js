import React from 'react';
import '../../../styles/screens/servicesScreens/homeAppliances/index.scss';
import { ScrollToTop } from './../../../utilities/index';
import MainLandingSection from './../../../components/globalComponents/MainLandingSection';

import { FaPhoneAlt } from 'react-icons/fa';
import GetStarted1 from './../../../components/globalComponents/GetStarted1';
import ServicesSection from './../../../components/globalComponents/ServicesSection';
import TopTechnicianYelpCardsSlider from './../../../components/globalComponents/TopTechnicianYelpCardsSlider';
import ImageAndGreenCheckPoints from './../../../components/globalComponents/ImageAndGreenCheckPoints';

const HomeAppliancesScreen = () => {
  ScrollToTop();
  const cardsInfo = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/appliances/dishwaher_icon.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/appliances/dishwaher_icon_hover.svg`,
      link: ``,
      title: `Diswasher`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/appliances/washer_icon.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/appliances/washer_icon_hover.svg`,
      link: ``,
      title: `Washer`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/appliances/dryer_icon.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/appliances/dryer_icon_hover.svg`,
      link: ``,
      title: `Dryer`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/appliances/refrigerator_icon.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/appliances/refrigerator_icon_hover.svg`,
      link: ``,
      title: `Refrigerator`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/appliances/oven_icon.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/appliances/oven_icon_hover.svg`,
      link: ``,
      title: `Oven`,
    },
  ];
  const sectionInfo = {
    image: 'https://d7gh5vrfihrl.cloudfront.net/website/banners/appliances-info.jpg',
    points: [
      { title: `Easy booking`, description: `We're only a few clicks or a phone call away.` },
      { title: `In-home estimate`, description: `No risk. No pressure.` },
      {
        title: `Quality results`,
        description: `Expert technicians. Guaranteed parts and service.`,
      },
    ],
  };
  return (
    <div className='homeAppliancesScreen'>
      <MainLandingSection
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/appliances-desktop.jpg'
        title='Appliance repair, made easy'
        description='The best technicians in your, neighborhood. Guaranteed.'
        btnTitle='Fix my appliance'
        btnLink='/'
      >
        <div className='images-container'>
          <a
            target='_blank'
            href='https://www.bbb.org/us/ca/san-francisco/profile/electronics-and-technology/puls-technologies-inc-1116-879293/#sealclick'
          >
            <img
              src='https://d7gh5vrfihrl.cloudfront.net/website/badges/bbb-small.png'
              alt='image'
            />
          </a>
          <img
            className='ml-2'
            src='https://d7gh5vrfihrl.cloudfront.net/website/badges/yelp-stars.png'
            alt='image'
          />
          <span className='ml-2 phone'>
            <FaPhoneAlt size='23' />{' '}
            <a className='ml-1' href='+18773017966'>
              (877) 301-7966
            </a>
          </span>
        </div>
      </MainLandingSection>
      <div className='container-75'>
        <ServicesSection cardsInfo={cardsInfo} title='What needs to be repaired?' />
        <ImageAndGreenCheckPoints sectionInfo={sectionInfo} />
        <TopTechnicianYelpCardsSlider title='Meet a few of our five-star technicians' />
        <GetStarted1
          imageUrl='https://d7gh5vrfihrl.cloudfront.net/website/get-started/appliances.jpg'
          title='Ready to get, started?'
          description={`We're only a few clicks or, a phone call away.`}
          btnTitle='Schedule now'
          btnLink='/'
        />
      </div>
    </div>
  );
};

export default HomeAppliancesScreen;
