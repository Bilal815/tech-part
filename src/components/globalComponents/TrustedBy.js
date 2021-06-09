import React from 'react';
import '../../styles/components/globalComponents/trustedBy.scss';

import HisenseLogo from '../../assets/icons/trusted/hisense.svg';
import TclLogo from '../../assets/icons/trusted/tcl.svg';
import SimplisafeLogo from '../../assets/icons/trusted/simplisafe.svg';

const TrustedBy = () => {
  return (
    <div className='trustedBy'>
      <h2 className='heading-2'>Trusted By</h2>
      <div className='images-wrapper'>
        <img src={HisenseLogo} alt='Logo' />
        <img src={TclLogo} alt='Logo' />
        <img src={SimplisafeLogo} alt='Logo' />
        <button>Add any more </button>
      </div>
    </div>
  );
};

export default TrustedBy;
