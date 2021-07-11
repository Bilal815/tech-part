import React from 'react';
import '../../styles/components/globalComponents/mainLandingSection.scss';

import { Col, Row } from 'react-bootstrap';
import { LinkButton } from '../../styledComponents';

const MainLandingSection = ({
  backgroundImage,
  title,
  blueTitle,
  description,
  boldDescription,
  points,
  btnTitle,
  btnLink,
  number,
  logos,
  children,
}) => {
  return (
    <div className='mainLandingSection' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='content-wrapper'>
        {/* <Row>
          <Col sm={12} md={6}> */}{' '}
        <div className='content' style={{ padding: points ? '180px 0 200px' : '220px 0 160px' }}>
          {title && blueTitle ? (
            <>
              {title.split(',').map((t, i) => (
                <h1 key={i}>{t}</h1>
              ))}
            </>
          ) : (
            title.split(',').map((t, i) => <h1 key={i}>{t}</h1>)
          )}

          {description && (
            <div className='my-4'>
              {description.split(',').map((d, i) => (
                <p key={i}>{d}</p>
              ))}
            </div>
          )}

          {boldDescription && <h4 className='bold-description'>{boldDescription}</h4>}

          {points && (
            <ul>
              {points.map((p, i) => (
                <li key={i}>
                  <img
                    src='https://d7gh5vrfihrl.cloudfront.net/website/subscription/active.svg'
                    alt='tick-cion'
                    className='mr-1'
                  />
                  {p}
                </li>
              ))}
            </ul>
          )}
          {(btnLink || btnTitle) && (
            <LinkButton
              link={btnLink}
              name={btnTitle}
              className={`${number ? 'link-button-shadow' : 'link-button'}`}
            />
          )}
          {children && <div className='children-container'>{children}</div>}
          {number && (
            <a href='tel:+18582258352' className='my-3 number'>
              {number}
            </a>
          )}
        </div>
        {/* </Col>
          <Col sm={12} md={6}></Col>
        </Row> */}
      </div>
    </div>
  );
};

export default MainLandingSection;
