import React, { useState, useEffect } from 'react';
import '../../../styles/screens/servicesScreens/garageDoorRepair/index.scss';
import { ScrollToTop } from './../../../utilities/index';

import MainLandingSection from './../../../components/globalComponents/MainLandingSection';
import GetStarted1 from './../../../components/globalComponents/GetStarted1';
import ServicesSection from './../../../components/globalComponents/ServicesSection';
import { Link } from 'react-router-dom';
import TopTechnicianYelpCardsSlider from './../../../components/globalComponents/TopTechnicianYelpCardsSlider';
import TrustedBy from '../../../components/globalComponents/TrustedBy';
import BeatPulsBlogCardsSlider from './../../../components/globalComponents/BeatPulsBlogCardsSlider';
import FeaturedIn from '../../../components/globalComponents/FeaturedIn';
import OurLocations from './../../../components/globalComponents/OurLocations';
import { Row, Col } from 'react-bootstrap';
import BulletPoints from '../../../components/globalComponents/BulletPoints';
import ServicesHoverCardsGrid from './../../../components/globalComponents/ServicesHoverCardsGrid';
import {withRouter} from 'react-router-dom';
const GarageDoorRepairScreen = (props) => {
  const { services } = props;
  // ScrollToTop();

  const [service, _service] = useState({});
  useEffect(() => {
    let found = services.find((service)=> {  
      return service.slug === "garage-door-repair"
    })
    _service(found)
  }, [services])

  const locations = [
    'Atlanta, GA',
    'Austin, TX',
    'Baltimore, MD',
    'Boston, MA',
    ' Charlotte, NC',
    'Chicago, IL',
    'Cleveland, OH',
    'Dallas, TX',
    'Denver, CO',
    'Ft. Lauderdale, FL',
    'Houston, TX',
    'Kansas City, KS',
    'Las Vegas, NV',
    'Los Angeles, CA',
    'Miami, FL',
    'Milwaukee, WI',
    'Minneapolis, MN',
    'New Orleans, LA',
    'New York, NY',
    'Newark, NJ',
    'Orlando, FL',
    'Philadelphia, PA',
    'Phoenix, AZ',
    'Pittsburgh, PA',
    'Portland, OR',
    'Sacramento, CA',
    'San Diego, CA',
    'San Francisco, CA',
    'Seattle, WA',
    'Tampa, FL',
    'Washington DC',
  ];
  const cardsInfo = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/door_open.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/door_open_hvr.svg`,
      link: ``,
      title: `Door won't open`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/door_close.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/door_close_hvr.svg`,
      link: ``,
      title: `Door won't close`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/door_noisy.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/door_noisy_hvr.svg`,
      link: ``,
      title: `Door noisy or stuck`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/door_panels.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/door_panels_hvr.svg`,
      link: ``,
      title: `Door panels are damaged`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/door_inspection.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/door_inspection_hvr.svg`,
      link: ``,
      title: `25-point inspection`,
    },
  ];

  const popularServicesInfo = [
    {
      link: ``,
      image: `https://d7gh5vrfihrl.cloudfront.net/website/services/service_installation.svg`,
      title: `Garage door, installation`,
    },
    {
      link: ``,
      image: `https://d7gh5vrfihrl.cloudfront.net/website/services/service_opener.svg`,
      title: `Garage door, opener repairs`,
    },
    {
      link: ``,
      image: `https://d7gh5vrfihrl.cloudfront.net/website/services/service_inspection.svg`,
      title: `25-point, inspection`,
    },
  ];

  const bulletPoints = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/booking.svg`,
      title: `Simple booking`,
      description: `Request an appointment in minutes`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/time_new.svg`,
      title: `Easy scheduling`,
      description: `One-hour arrival windows`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/risk-free.svg`,
      title: `Reliable Vetted`,
      description: `Background checked technicians`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/25-points.svg`,
      title: `Comprehensive`,
      description: `All repairs include a 25-point inspection`,
    },
  ];

  const PopularServiceCard = ({ card }) => {
    const { link, image, title } = card;
    return (
      <Link to={link} className='popularServiceCard'>
        <div className='image-container center'>
          <img src={image} alt='image' />
        </div>
        <div className='content-container center'>
          {title && title.split(',').map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Link>
    );
  };

  const PopularServiceCardsContainer = () => {
    return (
      <div className='popularServiceCardsContainer'>
        <Row>
          {popularServicesInfo &&
            popularServicesInfo.map((card, i) => (
              <Col key={i} sm={12} md={4} lg={4}>
                <PopularServiceCard card={card} />
              </Col>
            ))}
        </Row>
      </div>
    );
  };
  return (
    <div className='garageDoorRepairScreen'>
      <MainLandingSection
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/garage-banner.jpg'
        title='Garage door, repair made simple'
        description='Garage door, repair made simple'  
        // newRoutebtn={true}     
        // newRoutebtnRoute={ ()=>{ props.history.push("/zip-code", { servicePrice: 5 })}}
        btnTitle={services.length > 0? 'Schedule your Repair' : undefined}     
        btnLink={services.length > 0?'/book-a-service/service/garage-door-repair/'+service.id: undefined}
      >
        <div className='images-container'>
          <img
            src='https://d7gh5vrfihrl.cloudfront.net/website/banners/facebook-rating-blue.svg'
            alt='image'
          />
        </div>
      </MainLandingSection>
      <Link className='blue-design-link' to=''>
        <span>
          <span className='off-20'>$20 OFF</span>
          <span className='save-20'> when you book online using code SAVE20 </span>
        </span>
      </Link>
      <div className='container-75'>
        <ServicesSection
          cardsInfo={cardsInfo}
          title='Book an appointment today'
          description='We take the work out of finding a trusted technician'
        />
        <BulletPoints bulletPoints={bulletPoints} />
        <div className='more-services-pulse'>
          <h3>More services by Techpart</h3>
          <div className='more-services-pulse-border'>
            <ServicesHoverCardsGrid screen='garage-door' />
          </div>
        </div>
        <TopTechnicianYelpCardsSlider title='Our top technicians are in your neighborhood and beyond' />
        <TrustedBy />
      </div>
      <FeaturedIn />
      <div className='container-75'>
        <div className='popular-services'>
          <h3>Popular Services</h3>
          <PopularServiceCardsContainer />
        </div>
        <OurLocations locations={locations} />
        <GetStarted1
          imageUrl='https://d7gh5vrfihrl.cloudfront.net/website/get-started/garage.jpg'
          title='Ready to get, started?'
          description='We can be there in as, little as an hour.'
          btnTitle={services.length > 0? 'Fix my garage door' : undefined} 
          btnLink={services.length > 0?'/book-a-service/service/garage-door-repair/'+service.id: undefined}
        />
      </div>
    </div>
  );
};

export default withRouter(GarageDoorRepairScreen)
// export default GarageDoorRepairScreen;
