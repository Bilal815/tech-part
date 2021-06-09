import React from 'react';
import '../../styles/components/globalComponents/citiesMap.scss';

import { AiFillStar } from 'react-icons/ai';

const CitiesMap = ({ left, right }) => {
  return (
    <div className='citiesMap'>
      <div className='card' style={{ left: left && '-200px', right: right && '-275px' }}>
        <h1 className='heading-1 mb-4'>Puls Phoenix</h1>
        <div className='star-container'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className='verified'>689 verified customer reviews</p>
        <a href='' className='aic'>
          <img src='https://d7gh5vrfihrl.cloudfront.net/website/icons/phone_icon.svg' alt='' />{' '}
          480-462-5228
        </a>
        <p className='aic'>
          <img src='https://d7gh5vrfihrl.cloudfront.net/website/icons/date_icon.svg' alt='' />
          <span>Monday - Sunday</span>
        </p>
        <p className='aic'>
          <img src='https://d7gh5vrfihrl.cloudfront.net/website/icons/time_icon.svg' alt='' />
          <span>8:00 am - 10:00 pm</span>
        </p>
      </div>
      <img src='https://s3.amazonaws.com/static.puls.com/website/SEO/Phoenix.jpg' alt='map-image' />
    </div>
  );
};

export default CitiesMap;
