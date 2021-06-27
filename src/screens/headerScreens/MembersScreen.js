import React, { useState } from 'react';
import '../../styles/screens/headerScreens/membersScreen.scss';

import { ScrollToTop } from './../../utilities/index';
import MainLandingSection from './../../components/globalComponents/MainLandingSection';
import PropertyManagersSaying from './../../components/globalComponents/PropertyManagersSaying';
import { managerSaying } from '../../data/managerSaying';
import WiderImageContentCard from './../../components/globalComponents/WiderImageContentCard';
import { Link } from 'react-router-dom';

const MembersScreen = () => {
  // ScrollToTop();
  const [cardData, setCardData] = useState({
    image: `https://d7gh5vrfihrl.cloudfront.net/website/membership/puls-info.jpg`,
    options: [
      { title: `Online booking`, description: `Request an appointment in minutes` },
      {
        title: `Fully insured service`,
        description: `Covered by $5 million insurance in case of an accident`,
      },
      {
        title: `Free cancelation`,
        description: `You will only be charged after your service is completed`,
      },
    ],
  });
  return (
    <div className='membersScreen'>
      <MainLandingSection
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/new-membership-desktop.png'
        title='Protect your, home with'
        blueTitle='puls+'
        boldDescription='Get complete peace of mind & receive'
        points={[
          'Flat-rate service fees',
          '20% off on every service',
          'Extended service guarantee',
        ]}
        btnTitle='View plans'
        btnLink='/create-sale/zip-code'
        number='(858) 225-8352'
      />
      <div className='container-60 center treat-yourself-section'>
        <h1 className='center-bold-heading'>Treat your home. Treat yourself. Reliably.</h1>
        <WiderImageContentCard cardData={cardData} />
        <a href='https://puls.com/create-sale/membership' target='_blank'>
          Join Puls+
        </a>
      </div>
      <div className='container-75 mt-5'>
        <div className='content-center center'>
          <h1 className='center-bold-heading'>
            Best of <span className='blue'>puls+</span> 2020
          </h1>
          <h4>
            Here's a look at what <span className='blue'>puls+</span> members enjoyed most this past
            year
          </h4>
        </div>
        <PropertyManagersSaying managerSaying={managerSaying} />
      </div>
    </div>
  );
};

export default MembersScreen;
