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
import facebookIcon from '../../assets/footer-icons/facebook.png';
import googleIcon from '../../assets/footer-icons/google.png';
import instagramIcon from '../../assets/footer-icons/instagram.png';
import twitterIcon from '../../assets/footer-icons/twitter.png';
import youtubeIcon from '../../assets/footer-icons/youtube.png';

import { Row, Col } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

const Footer = ({ location: { pathname } }) => {
  console.log('pathname : ', pathname);
  const [showHide, setShowHide] = useState(false);

    //Form Validation
    const [email, setEmail] = useState("");
    const onChangeHandler = (fieldName, value)=>{
      if(fieldName==="email"){
        setEmail(value);
      }
    }
    const formSubmit = (e)=>{
      e.preventDefault();
      if(email.trim() ==""){
        alert("required field");
      }
      else{
        console.log("Submitted" + email);
        setEmail("");
        setShowHide(!showHide);
      }
    }

  return (
    <>
      {
        pathname === '/application-tv' ||
        pathname === '/application-appliance' ||
        pathname === '/application-handy' ||
        pathname === '/application-phone' ||
        pathname === '/application-plumbing' ||
        pathname === '/tcl' ||
        pathname === '/puls-for-business' ? (
        ''
      ) : (
        <div className='footer container-75 container-fluid'>
          <Row>
            <Col md={2}>
              <h6>Company</h6>
              <ul className='m-0'>
                {companyLinkList &&
                  companyLinkList.map((c, i) =>
                    c.label === 'Info Hub' || c.label === 'Media Inquiries' ? (
                      <li key={i}>
                        <a href={c.link} target='_blank' rel="noreferrer">
                          {c.label && c.label}
                        </a>
                      </li>
                    ) : (
                      <li key={i}>
                        <Link to={c.link === '' ? '' : c.link}>{c.label && c.label}</Link>
                      </li>
                    )
                  )}
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

                  <form onSubmit={(e)=>{formSubmit(e)}} className='mt-3 df flex-wrap'>
                    <input type='email' value={email} placeholder='Enter email*' style={{margin:0}}
                    onChange={(e)=>{ onChangeHandler("email",e.target.value)}} />
                    <Button type="submit" style={{padding:'2px 6px', fontWeight:'normal', marginLeft:'auto'}}>
                      Subscribe
                    </Button>
                  </form>
                )}
              </div>
              <div className='social-icon-container my-4'>
                <ul className='df'>
                  <li>
                    <a href='https://www.facebook.com/pulsdotcom/' target='_blank' rel="noreferrer">
                      <img style={{background:'white'}} src={facebookIcon} alt='facebookIcon' />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/pulscom' target='_blank' rel="noreferrer">
                      <img style={{background:'white'}} src={twitterIcon} alt='twitterIcon' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.youtube.com/channel/UCpXjcgaFLHsfrYSSFoi0vLw'
                      target='_blank' rel="noreferrer"
                    >
                      <img style={{background:'white'}} src={youtubeIcon} alt='youtubeIcon' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.google.com/maps/place/Puls+Appliance+Repair+Dallas/@32.8056347,-97.4869899,9z/data=!3m1!4b1!4m5!3m4!1s0x0:0x323b911c1fe315b!8m2!3d32.806883!4d-96.9265378?hl=en'
                      target='_blank' rel="noreferrer"
                    >
                      <img style={{background:'white'}} src={googleIcon} alt='googleIcon' />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/pulscom/' target='_blank' rel="noreferrer">
                      <img src={instagramIcon} alt='instagramIcon' />
                    </a>
                  </li>
                </ul>
              </div>
              <p>support@techpart.com</p>
            </Col>
          </Row>
          <div className='my-4 download-app-container'>
            <a href='https://apps.apple.com/us/app/id1530724750' target='_blank' rel="noreferrer" className='mr-3'>
              <img src={iosImage} alt='iosImage' />
            </a>
            <a
              href='https://play.google.com/store/apps/details?id=com.puls.consumers'
              target='_blank' rel="noreferrer"
            >
              <img src={androidImage} alt='androidImage' />
            </a>
          </div>
          <div className='sb copy-right-container'>
            <p>© Techpart Technologies Inc 2021</p>
            <p>Techpart Technologies Inc. is not in any way associated with techpart GmbH of Munchen</p>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(Footer);
