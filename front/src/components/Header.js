import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Headers() {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto flex-row'>
            <Nav.Link href='/cart'>
              <i className='fas fa-shopping-cart mx-2'></i>Cart
            </Nav.Link>
            <Nav.Link href='/login'>
              <i className='fas fa-user mx-2'></i>Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Headers;
