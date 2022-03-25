import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>

      <div className='top-navbar'>
        <Navbar>
          <Container>
            <Navbar.Brand>NewLife Hospital</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>

              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className='outer-navbar'>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 container"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/aboutus'>About Us</NavLink>
                <NavLink to='/departments'>Departments</NavLink>
                <NavLink to='/doctors'>Doctors</NavLink>
                <NavLink to='/timetable'>TimeTable</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
                <NavLink to='/contacts'>search</NavLink>
                <NavDropdown.Divider />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;