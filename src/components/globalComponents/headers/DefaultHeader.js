import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../../../styles/components/globalComponents/headers/defaultHeader.scss';
import ServiceDropDown from "../DropDowns/ServicesDropdown";
import { useEffect, useState } from 'react';

const DefaultHeader = () => {
  const [isScrolled, setScroll] = useState(false);
  let listener = null;
  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    });
  })
  return (
    <Navbar variant="light" className={isScrolled ? "default colored p-4" : "default  p-4"} fixed={isScrolled ? "top" : ""}  >
      <Navbar.Brand href="#home">TechNPart</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" >Our Services</Nav.Link>
          <Nav.Link as={Link} to="/">Pricing</Nav.Link>
          <Nav.Link as={Link} to="/">Info Hub</Nav.Link>
          <Nav.Link as={Link} to="/">Members</Nav.Link>
          <Nav.Link as={Link} to="/">Become a Tech</Nav.Link>
          <Nav.Link as={Link} to="/">Property Managers</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
};

export default DefaultHeader;
