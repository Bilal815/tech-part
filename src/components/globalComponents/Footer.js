import React, { useState } from 'react';
import '../../styles/components/globalComponents/footer.scss';

import {
  companyLinkList,
  resourcesLinkList,
  partnershipsLinkList,
  legalsLinkList,
} from '../../data/footerLinkLists';
import { Button } from '../../styledComponents';
import iosImage from '../../assets/images/ios.png';
import androidImage from '../../assets/images/android.png';
import facebookIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import googleIcon from '../../assets/google.png';
import instagramIcon from '../../assets/instagram.png';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showHide, setShowHide] = useState(false);
  return (
    <div className='footer container-75'>
      <Row>
        <Col md={2}>
          <h6>Company</h6>
          <ul className='m-0'>
            {companyLinkList &&
              companyLinkList.map((c, i) => {
                return (
                  <li key={i}>
                    <Link to={c.link === '' ? '' : c.link}>{c.label && c.label}</Link>
                  </li>
                );
              })}
          </ul>
        </Col>
        <Col md={2}>
          <h6>Resources</h6>
          <ul className='m-0'>
            {resourcesLinkList &&
              resourcesLinkList.map((r, i) => {
                return (
                  <Link key={i} to={r.link === '' ? '' : r.link}>
                    <li>{r.label && r.label}</li>
                  </Link>
                );
              })}
          </ul>
        </Col>
        <Col md={2}>
          <h6>Partnerships</h6>
          <ul className='m-0'>
            {partnershipsLinkList &&
              partnershipsLinkList.map((p, i) => {
                return (
                  <Link key={i} to={p.link === '' ? '' : p.link}>
                    <li>{p.label && p.label}</li>
                  </Link>
                );
              })}
          </ul>
        </Col>
        <Col md={2}>
          <h6>Legals</h6>
          <ul className='m-0'>
            {legalsLinkList &&
              legalsLinkList.map((l, i) => {
                return (
                  <Link key={i} to={l.link === '' ? '' : l.link}>
                    <li>{l.label && l.label}</li>
                  </Link>
                );
              })}
          </ul>
        </Col>
        <Col md={4}>
          <h6>Stay Connected</h6>
          <div className='df'>
            {showHide ? (
              <p className='my- 4'>
                Thank you for subscribing! Be on the lookout for a welcome email from us soon.
              </p>
            ) : (
              <div className='mt-3 df '>
                <input type='text' placeholder='Enter email*' />
                <Button onClick={() => setShowHide(!showHide)}>Subscribe</Button>
              </div>
            )}
          </div>
          <div className='social-icon-container my-4'>
            <ul className='df'>
              <li>
                <a href='https://www.facebook.com/pulsdotcom/' target='_blank'>
                  <img src={facebookIcon} alt='facebookIcon' />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/pulscom' target='_blank'>
                  <img src={twitterIcon} alt='twitterIcon' />
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/channel/UCpXjcgaFLHsfrYSSFoi0vLw' target='_blank'>
                  <img src={youtubeIcon} alt='youtubeIcon' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.google.com/maps/place/Puls+Appliance+Repair+Dallas/@32.8056347,-97.4869899,9z/data=!3m1!4b1!4m5!3m4!1s0x0:0x323b911c1fe315b!8m2!3d32.806883!4d-96.9265378?hl=en'
                  target='_blank'
                >
                  <img src={googleIcon} alt='googleIcon' />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/pulscom/' target='_blank'>
                  <img src={instagramIcon} alt='instagramIcon' />
                </a>
              </li>
            </ul>
          </div>
          <p>support@puls.com</p>
        </Col>
      </Row>
      <div className='my-4 download-app-container'>
        <a href='https://apps.apple.com/us/app/id1530724750' target='_blank' className='mr-3'>
          <img src={iosImage} alt='iosImage' />
        </a>
        <a href='https://play.google.com/store/apps/details?id=com.puls.consumers' target='_blank'>
          <img src={androidImage} alt='androidImage' />
        </a>
      </div>
      <div className='sb copy-right-container'>
        <p>© Puls Technologies Inc 2021</p>
        <p>Puls Technologies Inc. is not in any way associated with Puls GmbH of Munchen</p>
      </div>
    </div>
  );
};

export default Footer;
