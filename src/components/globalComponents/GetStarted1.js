import React from 'react';
import '../../styles/components/globalComponents/getStarted1.scss';

import { LinkButton } from '../../styledComponents';

const GetStarted1 = ({ imageUrl, title, description, btnLink, btnTitle }) => {
  return (
    <div className='Get-Started-Section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-sm-12 text-wrapper' >
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
        <div className='get-started-image col-md-8 col-sm-12'>
          <img src={imageUrl} alt='image' />
        </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted1;
