import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import logo from '../../image/music logo.png';
import "./header.css";
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div className="header">
            {/* ===========navbar========== */}
                <div className="navbar" id="home">
                <Navbar className ="color-nav fixed-top" collapseOnSelect expand="lg"  variant="dark">
                <Container>
                <Link to="/home" style={{textDecoration:"none"}}><Navbar.Brand href="/home"> <img src={logo} alt="" /> Music Notes</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    </Nav>
                    <Nav>
                    <Link to="/home" style={{textDecoration:"none"}}>
                        <Nav.Link href="/home" >Home</Nav.Link>
                    </Link>
                    <Link to="/about" style={{textDecoration:"none"}}>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Link>
                    
                    <NavDropdown title="Sevices" id="collasible-nav-dropdown">
                        <Link to="/service" style={{textDecoration:"none"}} ><NavDropdown.Item href="/service">Guiter</NavDropdown.Item></Link>
                        <Link to="/service"style={{textDecoration:"none"}}><NavDropdown.Item href="/service">Piano</NavDropdown.Item></Link>
                        <Link to="/service"style={{textDecoration:"none"}}><NavDropdown.Item href="/service">Violin</NavDropdown.Item></Link>
                        <NavDropdown.Divider />
                        <Link to="/service"style={{textDecoration:"none"}}><NavDropdown.Item href="/service">More</NavDropdown.Item></Link>
                    </NavDropdown>
                    <Link to="/contact"style={{textDecoration:"none"}}><Nav.Link href="#contact">Contact</Nav.Link></Link>
                    <NavDropdown.Divider />
                    <Nav.Link href="">Signed in as :{} </Nav.Link>
                    <Nav.Link href="/login"><button className="btn btn-primary">login</button> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            
                </div>
        </div>
    );
};

export default header;