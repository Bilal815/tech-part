import React, { useState } from 'react';
import '../../../styles/screens/footerScreens/legals/pulsPlusTermsScreen.scss';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ScrollToTop } from './../../../utilities/index';
import FooterPulsTermsServicesCard from '../../../components/globalComponents/FooterPulsTermsServicesCard';

import HomeAppliancesImage from '../../../assets/icons/services-icons/home-appliances.svg';
import TvMountingImage from '../../../assets/icons/services-icons/tv-mounting.svg';
import HandymanImage from '../../../assets/icons/services-icons/handyman.svg';
import IphoneRepairImage from '../../../assets/icons/services-icons/iphone.svg';
import PlumbingImage from '../../../assets/icons/services-icons/plumbing.svg';
import GarageDoorImage from '../../../assets/icons/services-icons/garage.svg';

const PulsPlusTermsScreen = () => {
  ScrollToTop();
  const [servieCardItemDetails, setServieCardItemDetails] = useState([
    {
      // image: { HomeAppliancesImage },
      image: 'https://d7gh5vrfihrl.cloudfront.net/website/membership/services/apr.svg',
      title: 'Home Appliances Repair',
      url: '/services/home-appliances',
    },
    {
      image: { TvMountingImage },
      title: 'Tv Mounting',
      url: '/services/tv-mounting',
    },
    {
      image: { HandymanImage },
      title: 'Handyman Services',
      url: '/services/handyman-services',
    },
    {
      image: { IphoneRepairImage },
      title: 'iPhone Repair',
      url: '/services/phone-repair',
    },
    {
      image: { PlumbingImage },
      title: 'Plumbing',
      url: '/services/plumbing-services',
    },
    {
      image: { GarageDoorImage },
      title: 'Garage Door',
      url: '/services/garage-door-repair',
    },
  ]);
  // const { image, title, url } = servieCardItemDetails;
  return (
    <div className='pulsPlusTermsScreen'>
      <div className='container-40'>
        <h1 className='heading-1 mb-5'>
          Puls<sup>+</sup> Terms and Conditions
        </h1>
        <h1 className='heading-2 mb-3'>
          Puls<sup>+</sup> Membership Coverage
        </h1>
        <p>
          Members pay a one-time fee for an annual membership that begins on the date of purchase
          and ends on the 1-year anniversary of the purchase date.
        </p>
        <p>
          Benefits are not transferable and must be used by the purchaser. Member discounts may not
          be combined with other offers and discounts unless stated otherwise.
        </p>
        <p>
          Puls+ Membership holders are eligible for discounts on certain Services, as well as other
          benefits. Actual benefits may change from time to time so you are encouraged to
          periodically review the most up-to-date premium features and benefits by visiting{' '}
          <Link to='/members'>puls.com/membership</Link>.
        </p>
        <p>
          Puls+ Members will abide by Puls’ general{' '}
          <Link to='/terms-and-conditions'>terms and conditions</Link> .
        </p>
        <h1 className='heading-2 mt-5 mb-3'>Auto-Renewal</h1>
        <p>
          Your membership will automatically renew at the end of each term for another full term
          unless either party has provided the other party with written notice of non-renewal at
          least 30 days prior to the end of the relevant term.
        </p>

        <h1 className='heading-2 mt-5 mb-3'>
          Puls<sup>+</sup> Membership Cancellation Policy
        </h1>
        <p>
          You may cancel your Puls+ Membership at any time. You will not receive a refund or credit
          for any remaining time; however, you will retain any premium features or benefits through
          the end of your Puls+ Membership Term. Membership fees paid are final and nonrefundable,
          unless otherwise determined by Puls Technologies, Inc.
        </p>

        <h1 className='heading-2 mt-5 mb-3'>
          Puls<sup>+</sup> Membership Discount
        </h1>
        <p>
          Puls+ members are eligible for a 20% discount on labor for the following services.
          Additional parts costs will be charged at full price. The 20% member discount may not be
          combined with other offers or discounts unless stated otherwise.
        </p>
      </div>
      <div className='container-75 container-y-100'>
        <Row>
          {/* {servieCardItemDetails &&
            servieCardItemDetails.map((i) => (
              <Col xs={6} sm={4} md={3} lg={2} className='center'>
                <FooterPulsTermsServicesCard image={i.image} title={i.title} url={i.url} />
              </Col>
            ))} */}
          <Col xs={6} sm={4} md={3} lg={2} className='center'>
            <FooterPulsTermsServicesCard
              image={HomeAppliancesImage}
              title='Home Appliances Repair'
              url='/services/home-appliances'
            />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className='center'>
            <FooterPulsTermsServicesCard
              image={TvMountingImage}
              title='Tv Mounting'
              url='/services/tv-mounting'
            />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className='center'>
            <FooterPulsTermsServicesCard
              image={HandymanImage}
              title='Handyman Services'
              url='/services/handyman-services'
            />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className='center'>
            <FooterPulsTermsServicesCard
              image={IphoneRepairImage}
              title='iPhone Repair'
              url='/services/phone-repair'
            />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className='center'>
            <FooterPulsTermsServicesCard
              image={PlumbingImage}
              title='Plumbing'
              url='/services/plumbing-services'
            />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className='center'>
            <FooterPulsTermsServicesCard
              image={GarageDoorImage}
              title='Garage Door'
              url='/services/garage-door-repair'
            />
          </Col>
        </Row>
      </div>
      <div className='container-40'>
        <p>
          Please note services may vary by market. Visit puls.com to see what new services are being
          added to your area each quarter.
        </p>
      </div>
    </div>
  );
};

export default PulsPlusTermsScreen;
