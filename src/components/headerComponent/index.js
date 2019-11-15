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
import { scroller, animateScroll } from "react-scroll";

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
    menu: '100%',
    isTop:true
  }

  menu = (value) => {
    this.setState({
      menu:value
    })
  }

  handleScroll = () => {
    if (window.scrollY < 100) {
      this.setState({ isTop : true });
    } else {
      this.setState({ isTop: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  ScrollTo = () => {
    const { location, history } = this.props
    if (location.pathname === "/") {
      return scroller.scrollTo('services', {
        duration: 500,
        hashSpy: true,
        delay: 100,
        smooth: true,
      });
    }
    history.push({
      pathname: '/',
      state: { goto: "services" }
    })
    
  }

  onLink = (link) => {
    const { location } = this.props
    if (location.pathname === link) {
     return  animateScroll.scrollToTop();
    }
  }

  onLogo = () => {
    const { location, history } = this.props
    if (location.pathname === "/") {
      return animateScroll.scrollToTop();
    }
    return history.push("/")
  }


  onMobileLink = (link) => {
    const { location, history } = this.props
    this.setState({
      menu: 0
    }, () => {
      if (location.pathname === link) {
        return animateScroll.scrollToTop();
      } else if (link === "/service"){
          return this.ScrollTo()
        }
        return history.push(link)
    });
  }

  render() {
    const { location } = this.props
    const { isTop } = this.state;
    if (isMobile) {
      return (
        <div style={{ position: 'fixed', zIndex: 1, width: '100%', paddingTop: 20 }}>
          <div style={{ height: '100vh', maxWidth:480, width:this.state.menu, backgroundColor: '#000', zIndex: 2, position: 'absolute', right: 0, top: 0, transition: '0.3s' }}>
            <div style={{width:'100%', textAlign:'right'}}>
              <img src={icons.close} style={{ width: '30px', marginRight: 30, marginTop:20 }} alt="" onClick={() => this.menu(0)} />
           </div>
            <div style={{ marginTop: 30 }}>
              {Links.map((data, i) => {
                const bg = data.link === location.pathname ? "red" :""
                return (
                  <div style={{ padding: '10px 20px', backgroundColor: bg }}>
                    <div
                      style={{ textDecoration: "none", color: '#fff' }}
                      onClick={() => this.onMobileLink(data.link)}
                    >
                      {data.name}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <Container fluid className="header">
            <Row>
              <Col >
                <img src={logo} style={{ width: '100%' }} alt="" onClick={() => this.onLogo()}/>
              </Col>
              <Col style={{ textAlign: 'right' }}>
                <img src={icons.menu} style={{ width: '30px', marginRight: 10 }} alt="" onClick={() => this.menu('100%')}/>
              </Col>
              
            </Row>
          </Container>

        </div>
      )
    }
    return (
      <header >
        <Container fluid className="header" style={{ transition: '0.3s', position: 'fixed', zIndex: 9999, backgroundColor: isTop ? 'transparent':'rgba(0,0,0,0.6)' }}>
          <Navbar color="black" expand="md">
            <Container>
              <NavbarBrand onClick={() => this.onLogo()}>
                <img src={logo} style={{ transition: '0.5s', width:isTop ? 250 : 100}} alt="" />
              </NavbarBrand>
              <NavbarToggler />
              <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    {Links.map((data, i) => {
                      return (
                        <NavItem key={i} style={{ top:isTop?-35:0}}>
                          {data.link === location.pathname && (
                            <div
                              style={{
                                height: 10,
                                width: 50,
                                backgroundColor: "#ED1D23",
                                position: "absolute",
                                top:isTop ? -27 : -25,
                                left: "50%",
                                marginLeft: -40,
                                transition: "0.5s"
                              }}
                            />
                          )}
                          {data.name === "Service" ? (
                            <div style={{ color: '#888' }} className="service-link" onClick={this.ScrollTo}>
                                {data.name}
                            </div>
                          ) : (
                            <Link
                                to={data.link}
                                style={{ textDecoration: "none", color: '#888', }}
                                onClick={() => this.onLink(data.link)}
                            >
                            {data.name}
                          </Link>
                          )} 
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
