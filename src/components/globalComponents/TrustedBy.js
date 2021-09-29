import React from 'react';
import '../../styles/components/globalComponents/trustedBy.scss';

import HisenseLogo from '../../assets/icons/trusted/hisense.svg';
import TclLogo from '../../assets/icons/trusted/tcl.svg';
import SimplisafeLogo from '../../assets/icons/trusted/simplisafe.svg';

const TrustedBy = () => {
  return (
    <div className="container">
      <div className="row">
        <div className='col-md-12 col-12'>
          <h2 className='heading-3'>Trusted By</h2>
          <div className='images-wrapper featured-content-wrapper  row'>
            <div className='col-md-3 col-sm-12'>
              <img src={HisenseLogo} alt='Logo' />
            </div>
            <div className='col-md-3 col-sm-12'>
              <img src={TclLogo} alt='Logo' />
            </div>
            <div className='col-md-3 col-sm-12'>
              <img src={SimplisafeLogo} alt='Logo' />
            </div>
            <div className='col-md-3 col-sm-12'>
              <button className="btn btn-outline-primary" disabled={true}> Add any more </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
