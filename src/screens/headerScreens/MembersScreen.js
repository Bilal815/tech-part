import React from 'react';
import '../../styles/screens/headerScreens/membersScreen.scss';

import { ScrollToTop } from './../../utilities/index';
import MainLandingSection from './../../components/globalComponents/MainLandingSection';

const MembersScreen = () => {
  ScrollToTop();
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
    </div>
  );
};

export default MembersScreen;
