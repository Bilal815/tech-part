import React from 'react';
import { Button } from '../../styledComponents';
import '../../styles/components/globalComponents/getStarted1.scss';

const GetStarted1 = () => {
  return (
    <div className='df getStarted1'>
      <div className='get-started-content'>
        <h4>Ready to get started?</h4>
        <p>Repair or install a device today.</p>
        <Button>Book a Service</Button>
      </div>
      <div className='get-started-image'>
        <img src='' alt='' />
      </div>
    </div>
  );
};

export default GetStarted1;
