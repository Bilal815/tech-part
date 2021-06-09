import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/screens/error404Screen.scss';

import { ScrollToTop } from './../utilities/index';

const Error404Screen = () => {
  ScrollToTop();

  return (
    <div className='error404Screen container-50 container-y-50 center'>
      <h1>We're sorry!</h1>
      <h4>We can't seem to find the page you are looking for</h4>
      <h1 className='error404'>404</h1>
      <h5>Here are some useful links that may help</h5>
      <ul className='center'>
        <li>
          <Link to='/services/iphone-repair'>Repair my device</Link>
        </li>
        <li>
          <Link to='/services/tv-mounting'>Mount My TV</Link>
        </li>
        <li>
          <Link to='/services/smart-home-installation'>Schedule a Demo</Link>
        </li>
        <li>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li>
          <Link to='/faq'>FAQ</Link>
        </li>
      </ul>
    </div>
  );
};

export default Error404Screen;
