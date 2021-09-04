import React, { useState } from 'react';
import '../../styles/components/globalComponents/pricingCard.scss';

const PricingCard = ({ plan, setSelectedCardTitle }) => {
  const { id, title, badge, removedPrice, currentPrice, planOffers, icons } = plan;

  const [planSelected, setPlanSelected] = useState('pricingCardActive');

  const selectedPLan = (planId) => {
    setSelectedCardTitle(title);
    setPlanSelected(planId);
  };

  return (
    <div
      className={`pricingCard ${planSelected ? 'pricingCardActive' : 'pricingCard'}`}
      onClick={() => selectedPLan(id)}
    >
      <div className={`badge ${badge === 'BEST VALUE' ? 'badge-blue-bg' : 'badge-white-bg '}`}>
        {badge}
      </div>
      <div className='content-wrapper'>
        <div className='title'>
          <h5>{title}</h5>
        </div>
        <span className='price-container'>
          <span className='price-remove'>${removedPrice}</span>
          <span className='price-actual'>
            <span className='dollar'>$</span> <span className='price'>{currentPrice}</span>{' '}
            <span className='year'>/ year</span>
          </span>
        </span>
        <div className='options'>
          <ul>
            {planOffers &&
              planOffers.map((plan, i) => (
                <li key={i}>
                  <div className='blue'>
                    <span>{plan.title}</span>
                  </div>
                  <div>{plan.detail}</div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className='icons-wrapper'>
        {icons &&
          icons.map((planIcon, i) => (
            <div key={i} className='icon-container '>
              <img src={planIcon.icon} alt='image' />
              {planIcon.name.split(',').map((n, i) => (
                <p key={i}>{n}</p>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PricingCard;
