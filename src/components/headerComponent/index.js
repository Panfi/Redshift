import React, { Component } from 'react'
import logo from '../../assets/images/logo.png';
import './header.css';
import {
    Container,
    Collapse,
    Col, Row,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import {withRouter, Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect';
import { icons } from '../../assets';

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


class Header extends Component {
  state = {
    menu:-window.innerWidth
  }

  menu = (value) => {
    this.setState({
      menu:value
    })
  }

  render() {
    const { location } = this.props
    if (isMobile) {
      return (
        <div style={{ position: 'fixed', zIndex: 1, width: '100%', paddingTop: 20 }}>
          <div style={{ height: '100vh', width: '100%', backgroundColor: '#fff', zIndex: 2, position: 'absolute', right: this.state.menu, top: 0, transition: '0.3s' }}>
            <img src={icons.menu} style={{ width: '30px', marginRight: 10 }} alt="" onClick={() => this.menu(-window.innerWidth)} />
          </div>
          <Container fluid className="header">
            <Row>
              <Col >
                <img src={logo} style={{ width: '100%' }} alt="" />
              </Col>
              <Col style={{ textAlign: 'right' }}>
                <img src={icons.menu} style={{ width: '30px', marginRight: 10 }} alt="" onClick={() => this.menu(0)}/>
              </Col>
            </Row>
          </Container>

        </div>
      )
    }
    return (
      <header>
        <Container fluid className="header" style={{ position: 'fixed', zIndex: 9999 }}>
          <Navbar color="black" expand="md">
            <Container>
              <NavbarBrand href="/">
                <img src={logo} style={{ width: 250 }} alt="" />
              </NavbarBrand>
              <NavbarToggler />
              <Collapse navbar>
                <Nav className="ml-auto" navbar>
                  {Links.map((data, i) => {
                    return (
                      <NavItem key={i}>
                        {data.link === location.pathname && (
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
                          style={{ textDecoration: "none", color: '#888', }}
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
}


export default withRouter(Header);
