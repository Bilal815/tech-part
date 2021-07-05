import React from 'react';
import '../../styles/components/globalComponents/getStarted1.scss';

import { LinkButton } from '../../styledComponents';
import Image from '../../assets/images/tv-mounting-new.jpg';

const GetStarted1 = ({ imageUrl, title, description, btnLink, btnTitle }) => {
  return (
    <div className='getStarted1'>
      <div className='center get-started-content'>
        <div>
          <h2 className='rb'>{title}</h2>
          <p>{description}</p>
          <LinkButton link={btnLink} name={btnTitle} className='' />
        </div>
      </div>
      <div className='get-started-image'>
        <img src={imageUrl} alt='image' />
      </div>
    </div>
  );
};

export default GetStarted1;
