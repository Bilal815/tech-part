import React from 'react';
import '../../styles/screens/headerScreens/inviteAFriendScreen.scss';
import { ScrollToTop } from './../../utilities/index';

import GetStarted1 from './../../components/globalComponents/GetStarted1';
import Image from '../../assets/images/tv-mounting-new.jpg';

const InviteAFriendScreen = () => {
  ScrollToTop();
  return (
    <div className='inviteAFriendScreen'>
      <GetStarted1
        btnLink='/book-a-service'
        btnTitle='Book a Service'
        imageUrl={Image}
        title='Ready to get started?'
        description='Repair or install a device today.'
      />
    </div>
  );
};

export default InviteAFriendScreen;
