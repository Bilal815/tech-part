import React from 'react';
import '../../styles/components/globalComponents/citiesBreadCrumb.scss';

import { IoIosArrowForward } from 'react-icons/io5';
import { withRouter } from 'react-router-dom';

const CitiesBreadCrumb = ({ linkList }) => {
  const breadCrumbList = [
    { link: '/', label: 'Puls.com' },
    { link: '/cities/az', label: 'Arizona  ' },
    { link: '/cities/az/phoenix', label: '' },
  ];
  return <div className='citiesBreadCrumb'>CitiesBreadCrumb</div>;
};

export default withRouter(CitiesBreadCrumb);
