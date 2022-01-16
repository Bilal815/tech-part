import React from 'react';
import '../../styles/components/globalComponents/trustedBy.scss';

import HisenseLogo from '../../assets/icons/trusted/hisense.svg';
import TclLogo from '../../assets/icons/trusted/tcl.svg';
import SimplisafeLogo from '../../assets/icons/trusted/simplisafe.svg';
import { Row, Col } from 'react-bootstrap';
const TrustedBy = () => {
  return (
    
    <div className='trustedBy'>
      <h2 className='heading-3'>Trusted By</h2>
      <Row className='images-wrapper'>
        <Col sm={6} md={6} lg={3}>
          <img src={HisenseLogo} alt='Logo' />
        </Col>
        <Col sm={6} md={6} lg={3}>
          <img src={TclLogo} alt='Logo' />
        </Col>
        <Col sm={6} md={6} lg={3}>
          <img src={SimplisafeLogo} alt='Logo' />
        </Col>
        <Col sm={6} md={6} lg={3}>
          <button>Add any more </button>
        </Col>
  </Row>
    </div>
 
    // <div className='trustedBy'>
    //   <h2 className='heading-3'>Trusted By</h2>
    //   <div className='images-wrapper'>
    //     <img src={HisenseLogo} alt='Logo' />
    //     <img src={TclLogo} alt='Logo' />
    //     <img src={SimplisafeLogo} alt='Logo' />
    //     <button>Add any more </button>
    //   </div>
    // </div>
  );
};

export default TrustedBy;
