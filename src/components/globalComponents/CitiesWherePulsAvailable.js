import React from 'react';
import '../../styles/components/globalComponents/citiesWherePulsAvailable.scss';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CitiesWherePulsAvailable = ({ screen }) => {
  return (
    <div className='citiesWherePulsAvailable mb-5'>
      <h2 className='heading-3 mb-3'>Cities where TechNPart is available:</h2>
      {screen === 'home-appliances' ? (
        <Row>
          <Col sm={4} md={2}>
            <ul>
              <li>Arizona</li>
              <li>
                <Link to='/cities/az/phoenix'>Phoenix</Link>
              </li>
              <hr />
              <li>Georgia</li>
              <li>
                <Link to='/cities/ga/atlanta'>Atlanta</Link>
              </li>
            </ul>
          </Col>
          <Col sm={4} md={2}>
            <ul>
              <li>Massachusetts</li>
              <li>
                <Link to='/cities/ma/boston'>Boston</Link>
              </li>
              <hr />
              <li>North Carolina</li>
              <li>
                <Link to='/cities/nc/charlotte'>Charlotte</Link>
              </li>
            </ul>
          </Col>
          <Col sm={4} md={2}>
            <ul>
              <li>Pennsylvania</li>
              <li>
                <Link to='/cities/pa/philadelphia'>Philadelphia</Link>
              </li>
              <hr />
              <li>Texas</li>
              <li>
                <Link to='/cities/tx/dallas'>Dallas</Link>
              </li>
              <li>
                <Link to='/cities/tx/houston'>Houston</Link>
              </li>
              <li>
                <Link to='/book-a-service'>San Antonio</Link>
              </li>
            </ul>
          </Col>
          <Col sm={4} md={2}>
            <ul>
              <li>Washington D.C.</li>
              <li>
                <Link to='/cities/dc/washington-dc'>Washington, D.C.</Link>
              </li>
              <hr />
              <li>Florida</li>
              <li>
                <Link to='/cities/fl/miami'>Miami</Link>
              </li>
              <li>
                <Link to='/book-a-service'>Tampa</Link>
              </li>
            </ul>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col sm={4} md={2}>
            <ul>
              <li>Arizona</li>
              <li>
                <Link to='/cities/az/phoenix'>Phoenix</Link>
              </li>
              <hr />
              <li>California</li>
              <li>
                <Link to='cities/ca/los-angeles'>Los Angeles</Link>
              </li>
              <hr />
              <li>Colorado</li>
              <li>
                <Link to='/book-a-service'>Denver</Link>
              </li>
            </ul>
          </Col>
          <Col sm={4} md={2}>
            <ul>
              <li>Florida</li>
              <li>
                <Link to='/cities/fl/miami'>Miami</Link>
              </li>
              <li>
                <Link to='/book-a-service'>Orlando</Link>
              </li>
              <li>
                <Link to='/book-a-service'>Tampa</Link>
              </li>
              <hr />
              <li>Georgia</li>
              <li>
                <Link to='/cities/ga/atlanta'>Atlanta</Link>
              </li>
            </ul>
          </Col>
          <Col sm={4} md={2}>
            <ul>
              <li>Illinois</li>
              <li>
                <Link to='/book-a-service'>Chicago</Link>
              </li>
              <hr />
              <li>Massachusetts</li>
              <li>
                <Link to='/cities/ma/boston'>Boston</Link>
              </li>
              <hr />
              <li>Nevada</li>
              <li>
                <Link to='/book-a-service'>Las Vegas</Link>
              </li>
            </ul>
          </Col>
          <Col sm={4} md={2}>
            <ul>
              <li>New York</li>
              <li>
                <Link to='/cities/ny/newyork-city'>New York City</Link>
              </li>
              <hr />
              <li>North Carolina</li>
              <li>
                <Link to='/cities/nc/charlotte'>Charlotte</Link>
              </li>
              <hr />
              <li>Pennsylvania</li>
              <li>
                <Link to='/cities/pa/philadelphia'>Philadelphia</Link>
              </li>
            </ul>
          </Col>
          <Col sm={4} md={2}>
            <ul>
              <li>Texas</li>
              <li>
                <Link to='/book-a-service'>Austin</Link>
              </li>
              <li>
                <Link to='/cities/tx/dallas'>Dallas</Link>
              </li>
              <li>
                <Link to='/cities/tx/houston'>Houston</Link>
              </li>
              <li>
                <Link to='/book-a-service'>San Antonio</Link>
              </li>
              <hr />
              <li>Washington D.C.</li>
              <li>
                <Link to='/cities/dc/washington-dc'>Washington, D.C.</Link>
              </li>
            </ul>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CitiesWherePulsAvailable;
