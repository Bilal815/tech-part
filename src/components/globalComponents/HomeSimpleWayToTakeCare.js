import React from 'react';
import '../../styles/components/globalComponents/homeSimpleWayToTakeCare.scss';
import { Row, Col } from 'react-bootstrap';

const HomeSimpleWayToTakeCare = () => {
  const simpleWayToTakeCarePoiints = [
    'Trusted technicians in your neighborhood',
    'Guaranteed parts and service + 24/7 support',
    'Hundreds of repair and install options',
  ];
  return (
    <div className='homeSimpleWayToTakeCare'>
      <Row>
        <Col sm={12} md={4}>
          <div className='content-container'>
            <h2>A simple way to take care of everything</h2>
            {simpleWayToTakeCarePoiints &&
              simpleWayToTakeCarePoiints.map((point, i) => (
                <div key={i}>
                  <span className='bullet-circle'></span>
                  {point && <span className='point'>{point}</span>}
                </div>
              ))}
          </div>
        </Col>
        <Col sm={12} md={8}>
          <div
            className='image-container'
            style={{
              backgroundImage: `url("https://d7gh5vrfihrl.cloudfront.net/website/banners/home-hover-bullets.jpg")`,
            }}
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='557' height='297' viewBox='0 0 557 297'>
              <g fill='none' fill-rule='evenodd'>
                <a href='/services/garage-door-repair'>
                  <g transform='translate(0 172)'>
                    <g fill='#FFF' fill-rule='nonzero'>
                      <rect width='100.02' height='44.888' rx='4'></rect>
                      <rect
                        width='10.574'
                        height='10.574'
                        x='77.667'
                        y='39.19'
                        transform='rotate(45 82.954 44.477)'
                      ></rect>
                    </g>
                    <text fill='#153454' font-size='12' font-weight='500'>
                      <tspan x='13.923' y='20'>
                        Garage Door{' '}
                      </tspan>{' '}
                      <tspan x='31.729' y='37'>
                        Repair
                      </tspan>
                    </text>
                    <circle
                      cx='7.5'
                      cy='8.5'
                      r='7.5'
                      fill='#71B6FF'
                      fill-rule='nonzero'
                      stroke='#FFF'
                      stroke-width='3'
                      transform='translate(75 57)'
                    ></circle>
                  </g>
                </a>
                <g transform='translate(158)'>
                  <g fill='#FFF' fill-rule='nonzero'>
                    <rect width='100.02' height='44.888' rx='4'></rect>
                    <rect
                      width='9.834'
                      height='9.834'
                      x='77.316'
                      y='39.311'
                      transform='rotate(45 82.233 44.228)'
                    ></rect>
                  </g>
                  <text fill='#153454' font-size='12' font-weight='500'>
                    <tspan x='13.817' y='27'>
                      HVAC Repair
                    </tspan>
                  </text>
                  <circle
                    cx='82.5'
                    cy='64.5'
                    r='7.5'
                    fill='#71B6FF'
                    fill-rule='nonzero'
                    stroke='#FFF'
                    stroke-width='3'
                  ></circle>
                </g>
                <a href='/services/tv-mounting'>
                  <g transform='translate(452 46)'>
                    <circle
                      cx='21.5'
                      cy='65.5'
                      r='7.5'
                      fill='#71B6FF'
                      fill-rule='nonzero'
                      stroke='#FFF'
                      stroke-width='3'
                    ></circle>
                    <g fill='#FFF' fill-rule='nonzero'>
                      <rect width='100.02' height='44.888' rx='4'></rect>
                      <rect
                        width='9.834'
                        height='9.834'
                        x='16.316'
                        y='39.311'
                        transform='rotate(45 21.233 44.228)'
                      ></rect>
                    </g>
                    <text fill='#153454' font-size='12' font-weight='500'>
                      <tspan x='13.817' y='27'>
                        TV Mounting
                      </tspan>
                    </text>
                  </g>
                </a>
                <a href='/services/smart-home-installation'>
                  <g transform='translate(292 23)'>
                    <circle
                      cx='21.5'
                      cy='65.5'
                      r='7.5'
                      fill='#71B6FF'
                      fill-rule='nonzero'
                      stroke='#FFF'
                      stroke-width='3'
                    ></circle>
                    <g fill='#FFF' fill-rule='nonzero'>
                      <rect width='100.02' height='44.888' rx='4'></rect>
                      <rect
                        width='9.834'
                        height='9.834'
                        x='16.316'
                        y='39.311'
                        transform='rotate(45 21.233 44.228)'
                      ></rect>
                    </g>
                    <text fill='#153454' font-size='12' font-weight='500'>
                      <tspan x='14.116' y='19'>
                        Smart Home
                      </tspan>{' '}
                      <tspan x='17.77' y='36'>
                        Installation
                      </tspan>
                    </text>
                  </g>
                </a>
                <a href='/services/home-appliances'>
                  <g transform='translate(456 142)'>
                    <circle
                      cx='24'
                      cy='67'
                      r='7'
                      fill='#71B6FF'
                      fill-rule='nonzero'
                      stroke='#FFF'
                      stroke-width='3'
                    ></circle>
                    <g fill='#FFF' fill-rule='nonzero' transform='translate(.72 .726)'>
                      <rect width='100.02' height='44.888' rx='4'></rect>
                      <rect
                        width='9.834'
                        height='9.834'
                        x='17.316'
                        y='39.311'
                        transform='rotate(45 22.233 44.228)'
                      ></rect>
                    </g>
                    <text fill='#153454' font-size='12' font-weight='500'>
                      <tspan x='33.136' y='20'>
                        Home
                      </tspan>{' '}
                      <tspan x='19.073' y='37'>
                        Appliances
                      </tspan>
                    </text>
                  </g>
                </a>
                <a href='/services/plumbing'>
                  <g transform='translate(220 210)'>
                    <circle
                      cx='24'
                      cy='67'
                      r='7'
                      fill='#71B6FF'
                      fill-rule='nonzero'
                      stroke='#FFF'
                      stroke-width='3'
                    ></circle>
                    <g fill='#FFF' fill-rule='nonzero' transform='translate(.72 .726)'>
                      <rect width='100.02' height='44.888' rx='4'></rect>
                      <rect
                        width='9.834'
                        height='9.834'
                        x='17.316'
                        y='39.311'
                        transform='rotate(45 22.233 44.228)'
                      ></rect>
                    </g>
                    <text fill='#153454' font-size='12' font-weight='500'>
                      <tspan x='25.347' y='20'>
                        Plumbing
                      </tspan>{' '}
                      <tspan x='26.925' y='37'>
                        Services
                      </tspan>
                    </text>
                  </g>
                </a>
                <a href='/simplisafe'>
                  <g transform='translate(68 72)'>
                    <circle
                      cx='84'
                      cy='68'
                      r='7'
                      fill='#71B6FF'
                      fill-rule='nonzero'
                      stroke='#FFF'
                      stroke-width='3'
                    ></circle>
                    <g fill='#FFF' fill-rule='nonzero'>
                      <rect width='100.02' height='44.888' rx='4'></rect>
                      <rect
                        width='9.834'
                        height='9.834'
                        x='78.037'
                        y='40.037'
                        transform='rotate(45 82.954 44.954)'
                      ></rect>
                    </g>
                    <text fill='#153454' font-size='12' font-weight='500'>
                      <tspan x='26.13' y='20'>
                        Security{' '}
                      </tspan>{' '}
                      <tspan x='10.292' y='37'>
                        System Setup
                      </tspan>
                    </text>
                  </g>
                </a>
              </g>
            </svg>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeSimpleWayToTakeCare;
