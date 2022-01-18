import React from 'react';
import '../../styles/components/globalComponents/featuredIn.scss';

import CnbcLogo from '../../assets/icons/brands-logo/cnbc.svg';
import TcLogo from '../../assets/icons/brands-logo/tc.svg';
import TwsjLogo from '../../assets/icons/brands-logo/twsj.svg';
import FortuneLogo from '../../assets/icons/brands-logo/fortune.svg';

const BlackFeaturedIn = () => {
  const logos = [CnbcLogo, TcLogo, TwsjLogo, FortuneLogo];

  return (
    <div className='blackFeaturedIn '>
      <div className='container-75'>
        <h3>Featured in</h3>
        <div className='images-wrapper'>
          {logos && logos.map((logo, i) => <img key={i} src={logo} alt='logo' />)}
        </div>
      </div>
    </div>
  );
};

export default BlackFeaturedIn;
