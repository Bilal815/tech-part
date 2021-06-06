import React from 'react';
import '../../styles/components/globalComponents/footer.scss';

import {
  companyLinkList,
  resourcesLinkList,
  partnershipsLinkList,
  legalsLinkList,
} from '../../data/footerLinkLists';
import { Button } from '../../styledComponents';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer container-90'>
      <Row>
        <Col md={2}>
          <h6>Company</h6>
          <ul className='m-0'>
            {companyLinkList &&
              companyLinkList.map((c, i) => {
                return (
                  <Link key={i} to={c.link === '' ? '' : c.link}>
                    <li>{c.label && c.label}</li>
                  </Link>
                );
              })}
          </ul>
        </Col>
        <Col md={2}>
          <h6>Resources</h6>
          <ul className='m-0'>
            {resourcesLinkList &&
              resourcesLinkList.map((r, i) => {
                return (
                  <Link key={i} to={r.link === '' ? '' : r.link}>
                    <li>{r.label && r.label}</li>
                  </Link>
                );
              })}
          </ul>
        </Col>
        <Col md={2}>
          <h6>Partnerships</h6>
          <ul className='m-0'>
            {partnershipsLinkList &&
              partnershipsLinkList.map((p, i) => {
                return (
                  <Link key={i} to={p.link === '' ? '' : p.link}>
                    <li>{p.label && p.label}</li>
                  </Link>
                );
              })}
          </ul>
        </Col>
        <Col md={2}>
          <h6>Legals</h6>
          <ul className='m-0'>
            {legalsLinkList &&
              legalsLinkList.map((l, i) => {
                return (
                  <Link key={i} to={l.link === '' ? '' : l.link}>
                    <li>{l.label && l.label}</li>
                  </Link>
                );
              })}
          </ul>
        </Col>
        <Col md={4}>
          <h6>Stay Connected</h6>
          <div className='df'>
            <input type='text' placeholder='' />
            <Button>Connected</Button>
          </div>
          <div className='social-icon-container'>
            <Link>
              <img src='' alt='' />
            </Link>
            <Link>
              <img src='' alt='' />
            </Link>
            <Link>
              <img src='' alt='' />
            </Link>
            <Link>
              <img src='' alt='' />
            </Link>
            <Link>
              <img src='' alt='' />
            </Link>
          </div>
        </Col>
      </Row>
      <div className='df mt-4 download-app-container'>
        <Link>
          <img src='' alt='' />
        </Link>
        <Link>
          <img src='' alt='' />
        </Link>
      </div>
      <div className='sb copy-right-container'>
        <p>© Puls Technologies Inc 2021</p>
        <p>Puls Technologies Inc. is not in any way associated with Puls GmbH of Munchen</p>
      </div>
    </div>
  );
};

export default Footer;
