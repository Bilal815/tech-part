import React from 'react';
import '../../../styles/screens/footerScreens/company/aboutUsScreen.scss';
import { ScrollToTop } from './../../../utilities/index';

import LandingPageWithImageAndBackground from '../../../components/globalComponents/LandingPageWithImageAndBackground';
import BeatPulsBlogCardsSlider from '../../../components/globalComponents/BeatPulsBlogCardsSlider';

import { Col, Row } from 'react-bootstrap';

const AboutUsScreen = () => {
  ScrollToTop();
  const executiveTeamInfo = [
    {
      id: 1,
      image: `https://d7gh5vrfihrl.cloudfront.net/website/about/gabi.png`,
      name: `Gabi Peles `,
      position: ` CEO`,
    },
    {
      id: 2,
      image: `https://d7gh5vrfihrl.cloudfront.net/website/about/raz.png`,
      name: `Raz Bar Haim `,
      position: ` CTO`,
    },
    {
      id: 3,
      image: `https://d7gh5vrfihrl.cloudfront.net/website/about/shiri.png`,
      name: `Shiri Erlijman `,
      position: ` Head of Finance`,
    },
    {
      id: 4,
      image: `https://d7gh5vrfihrl.cloudfront.net/website/about/rikki.png`,
      name: `Rikki Edelstein Omesy `,
      position: ` VP Marketing`,
    },
  ];

  const bottomLogosSection = [
    'https://d7gh5vrfihrl.cloudfront.net/website/about/hanaco.png',
    'https://d7gh5vrfihrl.cloudfront.net/website/about/reddot.png',
    'https://d7gh5vrfihrl.cloudfront.net/website/about/m.png',
    'https://d7gh5vrfihrl.cloudfront.net/website/about/kreos.png',
    'https://d7gh5vrfihrl.cloudfront.net/website/about/viola.png',
    'https://d7gh5vrfihrl.cloudfront.net/website/about/sequqia.png',
    'https://d7gh5vrfihrl.cloudfront.net/website/about/hamilton.png',
  ];
  const WhoIsPuls = () => (
    <div className='container-95 whoIsPuls'>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <div className='content-container'>
            <h2 className='section-heading'>Who is Puls?</h2>
            <p className='section-description'>
              We are a team committed to empowering the best techs to do their best work, so every
              home runs smoothly.
            </p>
            <p className='section-description'>
              We have offices in San Francisco (HQ) and Tel Aviv, and more than 5,000 technicians
              across the United States - from Los Angeles to Raleigh and hundreds of neighborhoods
              in between.
            </p>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className='image-container'>
            <img
              src='https://d7gh5vrfihrl.cloudfront.net/website/about/who-is-puls-team4.jpg'
              alt=''
            />
          </div>
        </Col>
      </Row>
    </div>
  );

  const OurTeamProfileCard = ({ profile }) => (
    <div className='ourTeamProfileCard'>
      <div className='image-container'>
        {profile.image && <img src={profile.image} alt='profile-pic' />}
      </div>

      <div className='profile-info'>
        {profile.name && <p className='name'>{profile.name}</p>}
        {profile.position && <p className='position'>{profile.position}</p>}
      </div>
    </div>
  );
  return (
    <div className='aboutUsScreen'>
      <LandingPageWithImageAndBackground
        bgImage='https://d7gh5vrfihrl.cloudfront.net/website/about/banner-image.jpg'
        title='Get it fixed the right way'
        description="We make your home work so you can make everything else work. Whether it's a phone, a TV, or a home appliance, our priority is to make quality installations and repairs effortless, so you can focus on what matters most."
        name='Gabi Peles,
        CEO'
      />
      <div className='who-is-puls-section'>
        <WhoIsPuls />
      </div>
      <div className='gray-background-logos-section'>
        <div className='container-75'>
          <a
            href='https://www.bbb.org/us/ca/san-francisco/profile/electronics-and-technology/puls-technologies-inc-1116-879293/#sealclick'
            target='_blank'
            className='logo'
          >
            <img
              src='https://d7gh5vrfihrl.cloudfront.net/website/badges/bbb-big.png'
              alt='bbb-logo'
            />
          </a>
          <img
            className='logo'
            alt='yelp-logo'
            src='https://d7gh5vrfihrl.cloudfront.net/website/badges/yelp-badge-about.png'
          />
          <img
            className='logo'
            alt='facebook-logo'
            src='https://d7gh5vrfihrl.cloudfront.net/website/badges/facebook-rating-about.png'
          />
        </div>
      </div>
      <div className='our-technicians'>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className='image-container'>
              <img
                src='https://d7gh5vrfihrl.cloudfront.net/website/about/our-tech-mask.png'
                alt=''
              />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className='content-container'>
              <h1 className='section-heading'>Our technician</h1>
              <p className='section-description'>
                Puls technicians are vetted, background-checked professionals who show up at the
                click of a button to deliver peace of mind when you need it most.
              </p>
              <p className='section-description'>
                We individually review each applicant to ensure quality results and professional
                service. Most of all, we look for technicians who understand the importance of
                treating your home as if it is their own.import BeatPulsBlogCardsSlider from
                './../../../components/globalComponents/BeatPulsBlogCardsSlider';
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className='container-75'>
        <div className='executive-team-section'>
          <h1 className='section-heading'>Meet our executive team</h1>
          <Row>
            {executiveTeamInfo &&
              executiveTeamInfo.map((profile, i) => (
                <Col key={i} sm={12} md={6}>
                  <OurTeamProfileCard profile={profile} />
                </Col>
              ))}
          </Row>
        </div>
        <BeatPulsBlogCardsSlider />
      </div>
      <div className='bottom-logos-section'>
        <div className='container-75'>
          {bottomLogosSection &&
            bottomLogosSection.map((logo, i) => <img key={i} src={logo} alt='logo' />)}
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
