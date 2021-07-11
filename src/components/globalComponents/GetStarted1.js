import React from 'react';
import '../../styles/components/globalComponents/getStarted1.scss';

import { LinkButton } from '../../styledComponents';

const GetStarted1 = ({ imageUrl, title, description, btnLink, btnTitle }) => {
  return (
    <div className='getStarted1'>
      <div className='get-started-content'>
        <div>
          {title && title.split(',').map((t, i) => <h2 key={i}>{t}</h2>)}
          {/* <h2>{title}</h2> */}
          {description && (
            <div className='my-4'>
              {description.split(',').map((d, i) => (
                <p className='m-0' key={i}>
                  {d}
                </p>
              ))}
            </div>
          )}
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
