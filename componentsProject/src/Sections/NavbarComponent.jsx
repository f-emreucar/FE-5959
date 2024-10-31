// import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const navData = [
    {
        id: 1,
        name: "Home",
    },
    {
        id: 2,
        name: "Features",
    },
    {
        id: 2,
        name: "Pricing",
    },
    {
        id: 3,
        name: "Contact",
    },
];

function NavbarComponent (){

  return (
    <div>
      <Navbar className="nav_Bar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="nav_bar_brand" href="#home">Fahrettin Emre Uçar</Navbar.Brand>
          <Nav>
          {navData.map((navs) => (
            <Nav.Link className="nav_links" key={navs.id}>{navs.name}</Nav.Link>
          ))}
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
