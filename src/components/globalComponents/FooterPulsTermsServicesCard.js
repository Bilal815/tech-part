import React, { useState } from 'react';
import '../../styles/components/globalComponents/footerPulsTermsServicesCard.scss';

import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FooterPulsTermsServicesCard = ({ image, title, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`${url && url}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{
        transform: `${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
        transition: 'all 0.4s ease-in-out',
        width: '100%',
      }}
      className='footerPulsTermsServicesCard'
    >
      <div className='strip' />
      <div className='content-wrapper center'>
        <img src={image && image} alt='service-card' />
        <p className='title my-4 black'>{title && title}</p>
        <div className='icon-wrapper center'>
          <BsArrowRight className='blue' size='25' />
        </div>
      </div>
    </Link>
  );
};

export default FooterPulsTermsServicesCard;
