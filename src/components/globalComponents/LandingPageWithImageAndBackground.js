import React from 'react';
import '../../styles/components/globalComponents/landingPageWithImageAndBackground.scss';

const LandingPageWithImageAndBackground = ({ bgImage, title, description, name }) => {
  return (
    <div className='landingPageWithImageAndBackground'>
      <div className='background-image-container'>
        <div className='background-image' style={{ backgroundImage: `url(${bgImage})` }}></div>
      </div>
      <div className='blue-text-container'>
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {name && <p className='signature'>{name}</p>}
      </div>
    </div>
  );
};

export default LandingPageWithImageAndBackground;
