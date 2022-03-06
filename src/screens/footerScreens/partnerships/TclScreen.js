import React from 'react';
import '../../../styles/screens/footerScreens/partnerships/tclScreen.scss';
import { ScrollToTop } from './../../../utilities/index';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkButton } from '../../../styledComponents/index';
const TclScreen = () => {
  ScrollToTop();
  return (
    <div className='tclScreen'>
      <Row>
        <Col sm={12} md={4} className='p-0'>
          <div className='content-wrapper'>
            <Link to='/' className='home-logos-container'>
              <img
                className='puls'
                src='https://d7gh5vrfihrl.cloudfront.net/website/puls-logo.svg'
                alt=''
              />
              <div></div>
              <img
                className='tcl'
                src='https://d7gh5vrfihrl.cloudfront.net/website/campaigns/tcl_logo_red.png'
                alt=''
              />
            </Link>
            <div className='content-container'>
              <h2>
                Welcome,
                <br /> TCL customers!
              </h2>
              <p>
                Set up your TV with TechNPart, an official TCL <br /> partner, and enjoy exclusive
                savings.
              </p>
              <LinkButton link='' name='Radeem now' />
              <div className='contact-us'>
                <img
                  src='https://d7gh5vrfihrl.cloudfront.net/website/banners/facebook-rating-45.svg'
                  alt=''
                />
                <Link className='gray-dot' to='/faq'>
                  FAQ
                </Link>
                <a className='gray-dot' href='tel:+18885255596'>
                  (888) 525-5596
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={8} className='p-0'>
          <div className='image-container'></div>
        </Col>
      </Row>
    </div>
  );
};

export default TclScreen;
