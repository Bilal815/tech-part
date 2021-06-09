import React from 'react';
import '../../styles/components/globalComponents/getApp.scss';

import MobileAppImage from '../../assets/images/app.png';
import AndroidAppImage from '../../assets/images/android.png';
import IosAppImage from '../../assets/images/ios.png';

const GetApp = () => {
  return (
    <div className='df getApp'>
      <div className='content-wrapper'>
        <div>
          <h2>Get the Puls App</h2>
          <p>
            Book and manage appointments, get real time location of your tech, exclusive offers,
            access to Puls+ benefits and much more
          </p>
          <a href='https://apps.apple.com/us/app/id1530724750' target='_blank' className='mr-1'>
            <img src={IosAppImage} alt='image' />
          </a>
          <a
            href='https://play.google.com/store/apps/details?id=com.puls.consumers'
            target='_blank'
          >
            <img src={AndroidAppImage} alt='image' />
          </a>
        </div>
      </div>
      <div className='image-wrapper'>
        <img src={MobileAppImage} alt='image' />
      </div>
    </div>
  );
};

export default GetApp;
