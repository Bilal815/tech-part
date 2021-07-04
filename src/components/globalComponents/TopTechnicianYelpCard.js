import React from 'react';
import '../../styles/components/globalComponents/topTechnicianYelpCard.scss';

import starsImg from '../../assets/icons/stars.svg';
import yelpImg from '../../assets/icons/yelp.svg';

const TopTechnicianYelpCard = ({ tech }) => {
  return (
    <div className='topTechnicianYelpCard'>
      <div className='profile-container'>
        <div className='profile'>
          <img src={tech.imageUrl} alt='' />
          <div className='name'>
            <p>
              <b>{tech.name}</b>{' '}
            </p>
            <p>Puls technician</p>
          </div>
        </div>
        <div className='yelp-image'>
          <img src={yelpImg} alt='image' />
        </div>
      </div>
      <blockquote>"{tech.quote}"</blockquote>

      <div className='stars-container'>
        <p>{tech.reviewer}</p>
        <img src={starsImg} alt='image' />
      </div>
    </div>
  );
};

export default TopTechnicianYelpCard;
