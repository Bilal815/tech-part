import React from 'react';
import '../../styles/components/globalComponents/getStarted2.scss';

import { withRouter } from 'react-router-dom';

import { Button } from '../../styledComponents/index';

const GetStarted2 = ({ history, btnTitle, btnUrl, title, bgImage }) => {
  return (
    <div
      className='getStarted2'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className='container-75'>
        <div className='content'>
          <h1>{title}</h1>
          {btnTitle && (
            <Button onClick={() => history.push(btnUrl ? btnUrl : '/')}>{btnTitle}</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(GetStarted2);
