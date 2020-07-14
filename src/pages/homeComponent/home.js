import React, { Component } from 'react'
import "./home.css";
import { Container, Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardDeck } from "reactstrap";
import Button from '../../components/button';
import BootstrapCarousel from '../../components/homeSlider';
import { scroller } from 'react-scroll';
import { isMobile } from 'react-device-detect';
import Carousel from '../testimonials';
import Red from '../../assets/images/red.png';
import Grey from '../../assets/images/grey.png';
import Black from '../../assets/images/black.png';
import Lottie from 'react-lottie';
import { animations } from '../../assets';
import ServiceCard from './ServiceCard/index';





const services = [
  {
    name: " Penetration testing",
    description: ` Any technology, any platform. From web to infrastructure, <br />our penetration tests use attack path mapping to show you <br />the true business context of vulnerabilities.`,
    animation: animations.WEB_Icon_01,
  },
  {
    name: "RED TEAM",
    description: `
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
                      Quisque ut tellus purus. In elementum, mi vitae finibus
                      ultricies,
                    <br /> enim mauris pulvinar velit, sed fermentum lorem nisl
                      a ligula
    `,
    animation: animations.WEB_Icon_02,
  },
  {
    name: "PHISHING & SOCIAL ENGINEERING",
    description: `
    Phishing is still one of the most effective ways to breach an organization. <br />Find out how susceptible your staff are to a targeted phishing attack.
  `,
    animation: animations.WEB_Icon_03,
  },
  {
    name: "PASSWORD AUDITING",
    description: `
   Password cracking for security awareness training. Find out how to stop<br/>password attacks against your staff and systems.
  `,
    animation: animations.WEB_Icon_04,
  },
  {
    name: "THREAT MODELLING",
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
  Quisque ut tellus purus. In elementum, mi vitae finibus ultricies,<br/>
  enim mauris pulvinar velit, sed fermentum lorem nisl a ligula
  `,
    animation: animations.WEB_Icon_05,
  },
  {
    name: "CYBER SECURITY STRATEGY CONSULTING",
    description: `
    Expert security advice to help you defend your organization against<br/>
    modern attackers and achieve resilience to cyber attacks.
  `,
    animation: animations.WEB_Icon_06,
  },
  {
    name: "INCIDENT RESPONSE",
    description: `
   We are there to support you in the event of a data breach, from detection<br/>
   to containment and recovery.
  `,
    animation: animations.WEB_Icon_07,
  },
  {
    name: "SECURITY RESEARCH AND DEVELOPMENT",
    description: `
   Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
Quisque ut tellus purus. In elementum, mi vitae finibus ultricies,<br/>
enim mauris pulvinar velit, sed fermentum lorem nisl a ligula
  `,
    animation: animations.WEB_Icon_08,
  },
]


class Home extends Component {

  constructor(props) {

    super(props);
    this.state = { isStopped: false, isPaused: false };
    this._lottieHeartRef = React.createRef();

  }

  componentDidMount() {
    const { location } = this.props
    const goto = location.state ? location.state.goto : ""
    if (goto === "services") {
      return scroller.scrollTo('services', {
        duration: 500,
        hashSpy: true,
        delay: 100,
        smooth: true,
      });
    }
  }

  onRefLottie = (ref) => {
    this._lottieHeartRef = ref;
    console.log(ref)
  }

  onMouseEnter = () => {
    this._lottieHeartRef && this._lottieHeartRef.play();
    console.log("animate", this._lottieHeartRef);
  };

  onMouseLeave = () => {
    this._lottieHeartRef && this._lottieHeartRef.pause();
    console.log("stop", this._lottieHeartRef);
  };

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: false,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet'
      }
    };

    return (
      <div>
        <div style={{ background: '#000000' }}>
        <Container className="home" style={{ backgroundColor: '#000000', height: "90vh", minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
          <Lottie
            options={{
              ...defaultOptions,
              autoplay: true,
              animationData: animations.Website_Header,
            }}
            style={{
              paddingTop: 0, height: null, width: isMobile ? '150%' : '110%',
              marginLeft: isMobile ? null : -30
            }}
            isStopped={this.state.isStopped}
            isPaused={false} />
          <Container className="home-text-block" style={{ paddingTop: isMobile ? null : "200px", marginTop: isMobile ? -100 : null }}>
            <Row>
              <Col md="7"></Col>
              <Col md="5">
                <div className="ml-5">
                  <h1 style={{ textTransform: "uppercase", marginTop: isMobile ? "50px" : "10px", color: '#fff' }}>
                    Build resilience <br />
                    against modern <br />
                    cyber attacks
                </h1>
                  {/* <p className="mt-4">
                    Gain powerful insight into your <br />
                    security posture. Redshift <br />
                    vulnerability assessments allow <br /> you to identity risks
                  and track <br />
                    them to remediation.
                </p> */}
                  <br />
                  <Button type="btn-default" title="Learn More" to={"/contact"} />
                </div>
              </Col>
              <Col md="12">
                {/* <p className="this-block-text text-center mt-5 mb-5"
                  style={{ paddingTop: isMobile ? "250px" :"280px" }}>
                  Any technology, any platform. From web to infrastruture, our
                  penetration tests use
                <br /> attack path mapping to show you the true business context
                  of vulnerabilities.
              </p> */}
                <h3 style={{ paddingTop: isMobile ? "250px" : "635px", paddingLeft: "90px", color: '#fff', fontWeight: "normal", fontSize: "32px" }}>Your cyber security journey</h3>
              </Col>
            </Row>
          </Container>
        </Container>
        </div>
        {/* <Container fluid className="home"> */}

        {/* Animations */}
        {/* <Container className="animations">
            <Row>
              <Col md="12"><p className="block1"></p></Col>
              <Col md="12"><p className="block2"></p></Col>
              <Col md="12"><p className="block3"></p></Col>
              <Col md="12"><p className="block4"></p></Col>
            </Row>
          </Container> */}

        {/* </Container> */}
        <Container className="mt-5">
          <div className="approach">
            <h3 className="text-center" style={{ paddingTop: isMobile ? 0 : "70px", marginBottom: '70px' }}>Our three-step cyber approach</h3>
            <BootstrapCarousel></BootstrapCarousel>

            {/*<CardDeck>*/}
              {/* <h1>01</h1>
                <h2>penetration testing</h2>
                <p>
                  Any technology, any platform. From web to infrastructure,
                  our penetration tests use attack path mapping
                  to show you the true business context of vulnerabilities.
                </p> */}

              {/*<Card style={{ marginTop: "70px;" }}>
                <CardImg top width="100%" src={Red} alt="" />
                <CardBody>
                  <CardTitle style={{ textTransform: "uppercase", fontWeight: "bold" }}>penetration testing</CardTitle>
                  <CardText>Any technology, any platform. From web to infrastructure,
                  our penetration tests use attack path mapping
                    to show you the true business context of vulnerabilities.</CardText>
                  <Button type="btn-primary" title="Learn More" to={"/pentest"} />
                </CardBody>
              </Card>*/}


              {/* <h1>02</h1>
                <h2>red team</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  ut tellus purus. In elementum, mi vitae finibus ultricies, enim
                  mauris pulvinar velit, sed fermentum lorem nisl a ligula.
              </p> */}

              {/*<Card style={{ marginTop: "70px;" }}>
                <CardImg top width="100%" src={Black} alt="" />
                <CardBody>
                  <CardTitle style={{ textTransform: "uppercase", fontWeight: "bold" }}>red team</CardTitle>
                  <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tellus purus. In elementum, mi vitae finibus ultricies, enim
                          mauris pulvinar velit, sed fermentum lorem nisl a ligula.</CardText>
                  <Button type="btn-primary" title="Learn More" to={"/redteam"} />
                </CardBody>
            </Card>*/}


              {/* <h1>03</h1>
                <h2>Cyber defense consulting</h2>
                <p>
                  Expert security advice to help you defend your organization against modern attackers and achieve resilience to cyber attacks.
                </p> */}

              {/*<Card style={{ marginTop: "70px;" }}>
                <CardImg top width="100%" src={Grey} alt="" />
                <CardBody>
                  <CardTitle style={{ textTransform: "uppercase", fontWeight: "bold" }}>Cyber defense consulting</CardTitle>
                  <CardText>Expert security advice to help you defend your organization against modern attackers and achieve resilience to cyber attacks.</CardText>
                  <Button type="btn-primary" title="Learn More" to={"/cyber"} />
                </CardBody>
              </Card>*/}

            {/*</CardDeck>*/}
          </div>
        </Container>
        <Container fluid>
          <Row>
            <div className="canyon"></div>
          </Row>
        </Container>

        {/* SERVICES */}
        <Container fluid>
          <Row>
            <div className="bg-service" id="services">
              <Col xs="12">
                <div
                  className="text-center"
                  style={{
                    color: "white",
                    paddingTop: "100px",
                    paddingBottom: "100px"
                  }}
                >
                  <h3
                    style={{
                      color: "white",
                      textTransform: "uppercase",
                      fontWeight: "bolder"
                    }}
                  >
                    Speciality Services
                </h3>
                  <h4 style={{ color: "white", fontWeight: "bolder" }}>
                    We're here to help.
                </h4>
                </div>
              </Col>
              <Container>
                <Row>
                  {services.map((item, index) => {
                    if (index > 1) return null
                    return (
                      <ServiceCard
                        ref={this.onRefLottie}
                        title={item.name}
                        description={item.description}
                        icon={item.animation}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                      />
                    )
                  })}

                  <Col md="12"
                    className="text-center"
                    style={{ color: "white", paddingTop: 100 }}
                  >
                    <h3
                      style={{
                        color: "white",
                        textTransform: "uppercase",
                        fontWeight: "bolder"
                      }}
                    >
                      Additional Services
                            </h3>
                  </Col>
                  {services.map((item, index) => {
                    if (index < 2) return null
                    return (
                      <ServiceCard
                        title={item.name}
                        description={item.description}
                        icon={item.animation}
                      />
                    )
                  })}

                </Row>
                <div
                  style={{ paddingTop: "100px", paddingBottom: "0px" }}
                ></div>
              </Container>
            </div>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <div className="canyon2"></div>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col md="12">
              <div className="bg-testimony text-center">
                <Carousel />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Home;
