import React from 'react';
import logo from '../../assets/images/logo.png';
import './header.css';
import {
    Container,
    Collapse,

    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import {withRouter, Link } from 'react-router-dom'

const Links = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Service",
    link: "/service"
  },
  {
        name: "Blog",
        link:"/blog"
    },
  {
        name: "Contact",
        link:"/contact"
    },
];

function Header(props) {
    console.log(props)
    return (
      <header>
        <Container fluid className="header" style={{position:'fixed', zIndex:9999}}>
          <Navbar color="black" expand="md">
            <Container>
              <NavbarBrand href="/">
                <img src={logo} style={{width:250}} alt="" />
              </NavbarBrand>
              <NavbarToggler />
              <Collapse navbar>
                <Nav className="ml-auto" navbar>
                  {Links.map((data, i) => {
                      return (
                        <NavItem key={i}>
                          {data.link === props.location.pathname && (
                            <div
                              style={{
                                height: 10,
                                width: 50,
                                backgroundColor: "#ED1D23",
                                position: "absolute",
                                top: -35,
                                left: "50%",
                                marginLeft: -40,
                                transition: "0.5s"
                              }}
                            />
                          )}
                          <Link
                            to={data.link}
                            style={{ textDecoration: "none", color:'#888',  }}
                          >
                            {data.name}
                          </Link>
                        </NavItem>
                      );
                  })}
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </Container>
      </header>
    );
}

export default withRouter(Header);
