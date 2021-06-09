import React from 'react';
import '../../styles/components/globalComponents/citiesBreadCrumb.scss';

import { IoIosArrowForward } from 'react-icons/io';
import { Link, withRouter } from 'react-router-dom';

const CitiesBreadCrumb = ({ breadcrumbList }) => {
  return (
    <div className='citiesBreadCrumb'>
      <div>
        {breadcrumbList &&
          breadcrumbList.map((b, i) => (
            <div key={i}>
              {b.color === '#017aff' ? (
                <span style={{ color: b.color }}>{b.label && b.label}</span>
              ) : (
                <Link to={b.link} style={{ color: b.color }}>
                  {b.label && b.label}
                </Link>
              )}
              {i >= breadcrumbList.length - 1 ? (
                ''
              ) : (
                <IoIosArrowForward style={{ color: b.color }} />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default withRouter(CitiesBreadCrumb);
