import React, {useEffect, useState} from 'react';
import '../../styles/components/globalComponents/pricingContainer.scss';

import { RiPhoneLine } from 'react-icons/ri';
import { Row, Col } from 'react-bootstrap';
import PricingCard from './PricingCard';

import blueTickImage from '../../assets/icons/check-sign.svg';
import starImage from '../../assets/icons/pricing-card/star.svg';
import calendarImage from '../../assets/icons/pricing-card/calendar.svg';
import phoneImage from '../../assets/icons/pricing-card/phone.svg';
import axios from "axios";

// https://codesandbox.io/s/mjryv01528?file=/src/UsersList.jsx:1993-2068
const PricingContainer = () => {
  const blueTick = <img src={blueTickImage} alt="tick" />;

  const [pricingPlans, setPricingPlans] = useState([
    {
      id: 1,
      title: 'Puls Essential',
      badge: '',
      removedPrice: 99,
      currentPrice: 79,
      planOffers: [
        {
          title: '20%',
          detail: 'Discount on Puls services',
        },
        {
          title: '6 Month',
          detail: 'Service guarantee',
        },
        {
          title: blueTick,
          detail: 'Waived security & support fees',
        },
        {
          title: blueTick,
          detail: 'Access to member perks and special offers',
        },
        {
          title: blueTick,
          detail: 'Seamless scheduling on the Puls App',
        },
        {
          title: blueTick,
          detail: 'Access to DIY portal',
        },
      ],
      icons: [
        { icon: starImage, name: 'Priority, Booking' },
        { icon: phoneImage, name: 'Priority, Support' },
      ],
    },
    {
      id: 2,
      title: 'Standard',
      badge: 'BEST VALUE',
      removedPrice: 299,
      currentPrice: 249,
      planOffers: [
        {
          title: '2',
          detail: '	$129 fixed-rate services',
        },
        {
          title: '20%',
          detail: 'Discount on Puls services',
        },
        {
          title: '12 Month',
          detail: 'Service guarantee',
        },
        {
          title: blueTick,
          detail: 'Waived security & support fees',
        },
        {
          title: blueTick,
          detail: 'Access to member perks and special offers',
        },
        {
          title: blueTick,
          detail: 'Seamless scheduling on the Puls App',
        },
        {
          title: blueTick,
          detail: 'Access to DIY portal',
        },
      ],
      icons: [
        { icon: starImage, name: 'Priority, Booking' },
        { icon: calendarImage, name: 'Same-day, preference' },
        { icon: phoneImage, name: 'Priority, Support' },
      ],
    },
    {
      id: 3,
      title: 'Pro',
      badge: 'FOR MULTI-PROPERTIES',
      removedPrice: 599,
      currentPrice: 499,
      planOffers: [
        {
          title: '25%',
          detail: 'Discount on Puls services',
        },
        {
          title: '12 Month',
          detail: 'Service guarantee',
        },
        {
          title: blueTick,
          detail: 'On-call account manager',
        },
        {
          title: blueTick,
          detail: 'Service by elite ranked technicianss',
        },
        {
          title: blueTick,
          detail: 'Waived security & support fees',
        },
        {
          title: blueTick,
          detail: 'Flexible invoicing',
        },
        {
          title: blueTick,
          detail: 'Seamless scheduling on the Puls App',
        },
        {
          title: blueTick,
          detail: 'Service insight and reporting',
        },
      ],
      icons: [
        { icon: starImage, name: 'Priority, Booking' },
        { icon: calendarImage, name: 'Same-day, preference' },
        { icon: phoneImage, name: 'Priority, Support' },
      ],
    },
  ]);

  useEffect(() => {
     getMembershipPlans();
  }, []);

  function processMembershipPlans(plans) {
    let plansArray = [];
    setPricingPlans([]);
    for (let plan of plans) {
      let planDetails = JSON.parse(plan.content);
      let individualPlan = {
        id:plan.id,
        title: plan.plan_title,
        badge: plan.id === 1 ? '' : (plan.id === 2 ? 'BEST VALUE' : 'FOR MULTI-PROPERTIES'),
        removedPrice: plan.discounted_price,
        currentPrice: plan.original_price,
        planOffers: [],
        icons: [
          { icon: starImage, name: 'Priority, Booking' },
          { icon: calendarImage, name: 'Same-day, preference' },
          { icon: phoneImage, name: 'Priority, Support' },
        ],
      };

      for (let planDetail in planDetails) {
        individualPlan.planOffers.unshift({
          title:  planDetail < 100 ? blueTick : planDetail.replace('_key',''),
          detail: planDetails[planDetail],
        });
      }
      if(plan.id === 1) {
       individualPlan.icons = [
          { icon: starImage, name: 'Priority, Booking' },
          { icon: phoneImage, name: 'Priority, Support' },
        ]
      }
      plansArray.push(individualPlan);
    }
    setPricingPlans(plansArray);
    setSelectedCardTitle(pricingPlans[1].title);
  }

  const getMembershipPlans = () => {    
    axios.post('/api/membership-plans', {
      zip_code_id: 1,
    }).then(res => {
      /*console.log('membership-plans response:', res.data.response.detail);*/
      processMembershipPlans(res.data.response.detail);
    }).catch(res => {
      /*console.log('membership-plans catch:', res);*/
    });
  }

  // const [selectedCardTitle, setSelectedCardTitle] = useState(pricingPlans[1].title);
  const [selectedCardTitle, setSelectedCardTitle] = useState('');

  return (
    <div className='pricingContainer'>
      <div className='headings'>
        <h1>
          Save more with <span className='blue'>puls+</span> membership program
        </h1>
        <h4>Get discounted & fixed-rates, extended guarantees and pay once your service is done</h4>
      </div>
      <Row className='pricing-cards-wrapper'>
        {pricingPlans &&
          pricingPlans.map((plan, i) => (
            <Col sm={12} md={6} lg={4} key={plan.id}>
              <PricingCard plan={plan} setSelectedCardTitle={setSelectedCardTitle} />
            </Col>
          ))}
      </Row>
      <div className='container-60 center pricing-button-container'>
        <a href='https://puls.com/create-sale/zip-code' target='_blank'>
          Add Puls+ {selectedCardTitle}
        </a>
        <div className='terms-condition'>
          <span>Terms and conditions </span>&nbsp;|&nbsp;
          <span>
            More info<span className='number'>&nbsp;(877) 301-7966&nbsp;</span>
            <RiPhoneLine size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingContainer;
