import React from 'react';
import '../../styles/components/globalComponents/trustedBy.scss';

import HisenseLogo from '../../assets/icons/trusted/hisense.svg';
import TclLogo from '../../assets/icons/trusted/tcl.svg';
import SimplisafeLogo from '../../assets/icons/trusted/simplisafe.svg';
import { Row, Col } from 'react-bootstrap';
const TrustedBy = () => {
  return (
    
    <div className="container">
    <div className="row">
      <div className='col-md-12 col-12'>
      <h2 className='heading-3'>Trusted By</h2>
      <Row className='images-wrapper eatured-content-wrapper'>
        <Col sm={12} md={6} lg={3}>
          <img src={HisenseLogo} alt='Logo' />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <img src={TclLogo} alt='Logo' />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <img src={SimplisafeLogo} alt='Logo' />
        </Col>
        <Col sm={12} md={6} lg={3}>
        <button className="btn btn-outline-primary" disabled={true}> Add any more </button>
        </Col>
  </Row>
    </div>
    </div>
    </div>
  );
};

export default TrustedBy;
