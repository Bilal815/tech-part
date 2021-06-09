import React, { useState } from 'react';
import '../../styles/components/globalComponents/servicesOfferedCard.scss';

import { BsArrowRight } from 'react-icons/bs';

import { Link } from 'react-router-dom';

const ServicesOfferedCard = ({ image, title, url }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={`${url && url}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{
        transform: `${isHovered ? 'scale(1.125)' : 'scale(1)'}`,
        transition: '0.3s',
      }}
    >
      <div className='servicesOfferedCard'>
        <div className='strip' />
        <div className='center'>
          <img src={image && image} alt='service-card' />
          <p className='title mt-3'>
            <span className='mr-1 black'>{title && title}</span>
            <BsArrowRight className='blue' size='25' />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServicesOfferedCard;
