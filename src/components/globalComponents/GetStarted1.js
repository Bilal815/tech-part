import React from 'react';
import '../../styles/components/globalComponents/getStarted1.scss';

import { Button } from '../../styledComponents';
import Image from '../../assets/images/tv-mounting-new.jpg';
import { withRouter } from 'react-router';

const GetStarted1 = ({ history, title, discription, btnLink, btnTitle }) => {
  return (
    <div className='getStarted1'>
      <div className='center get-started-content'>
        <div>
          <h2 className='rb'>Ready to get started?</h2>
          <p>Repair or install a device today.</p>
          <Button onClick={() => history.push('/book-a-service')}>Book a Service</Button>
        </div>
      </div>
      <div className='get-started-image'>
        <img src={Image} alt='image' />
      </div>
    </div>
  );
};

export default withRouter(GetStarted1);
