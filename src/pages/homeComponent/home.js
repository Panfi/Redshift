import React, { Component } from 'react'
import "./home.css";
import { Container, Col, Row } from "reactstrap";
import Button from '../../components/button';
import { scroller } from 'react-scroll';
import { isMobile } from 'react-device-detect';
import  Carousel  from '../testimonials';
import bgVideo from '../../assets/video/Redshift_Web_Header_03.mp4';
class Home extends Component {
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
  render() {
    return (
      <div>
        <Container fluid className="home">

          {/* Animations */}
          <Container className="animations">
            <Row>
                <Col md="12"><p className="block1"></p></Col>
                <Col md="12"><p className="block2"></p></Col>
                <Col md="12"><p className="block3"></p></Col>
                <Col md="12"><p className="block4"></p></Col>
            </Row>
          </Container>
          <Container className="home-text-block" style={{ paddingTop: "200px" }}>
            <Row>
              <Col md="7"></Col>
              <Col md="5">
                <div className="ml-5">
                  <h1 style={{ textTransform: "uppercase" }}>
                    Build resilience <br />
                    against modern <br />
                    cyber attacks
                </h1>
                  <p className="mt-4">
                    Gain powerful insight into your <br />
                    security posture. Redshift <br />
                    vulnerability assessments allow <br /> you to identity risks
                  and track <br />
                    them to remediation.
                </p>
                  <br />
                  <Button type="btn-default" title="Learn More" />
                </div>
              </Col>
              <Col md="12" className="text-center">
                <p className="this-block-text text-center mt-5 mb-5"
                  style={{ paddingTop: isMobile ? "250px" :"280px" }}>
                  Any technology, any platform. From web to infrastruture, our
                  penetration tests use
                <br /> attack path mapping to show you the true business context
                  of vulnerabilities.
              </p>
              <h3>Your cyber security journey</h3>
              </Col>
            </Row>
          </Container>
          {/* <Container style={{ paddingTop: isMobile ? 0 : 0 }}>
            <Row>
              <Col md="12" className="text-center">
                <h3>Your cyber security journey</h3>
              </Col>
            </Row>
          </Container> */}
        </Container>
        <Container className="mt-5">
          <div className="approach">
            <h3 className="text-center" style={{ paddingTop: isMobile ? 0 : "70px" }}>Our three-step cyber approach</h3>
            <Row>
              <Col md="4">
                <h1>01</h1>
                <h2>penetration testing</h2>
                <p>
                  Any technology, any platform. From web to infrastructure,
                  our penetration tests use attack path mapping
                  to show you the true business context of vulnerabilities.
              </p>
              </Col>
              <Col md="4">
                <h1>02</h1>
                <h2>red team</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  ut tellus purus. In elementum, mi vitae finibus ultricies, enim
                  mauris pulvinar velit, sed fermentum lorem nisl a ligula.
              </p>
              </Col>
              <Col md="4">
                <h1>03</h1>
                <h2>Cyber defense consulting</h2>
                <p>
                Expert security advice to help you defend your organization against modern attackers and achieve resilience to cyber attacks.
              </p>
              </Col>
            </Row>
          </div>
        </Container>
        <Container fluid>
          <Row>
            <div className="canyon"></div>
          </Row>
        </Container>
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
                  <Col md="6" style={{ color: "white", paddingTop: "100px" }}>
                    <div className="pentest">
                      <div className="normal" width="300"></div>
                      <div className="active" width="300"></div>
                    </div>
                    <h5
                      style={{
                        textTransform: "uppercase",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    >
                      Penetration testing
                  </h5>
                    <p style={{ color: "#C3C3C3" }}>
                    Any technology, any platform. From web to infrastructure, <br/>our penetration tests use attack path mapping to show you <br/>the true business context of vulnerabilities.
                  </p>
                  </Col>
                  <Col md="6" style={{ color: "white", paddingTop: "100px" }}>
                    <div className="redteam">
                      <div className="normal" width="300"></div>
                      <div className="active" width="300"></div>
                    </div>
                    <h5
                      style={{
                        textTransform: "uppercase",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    >
                      Red Team
                  </h5>
                    <p style={{ color: "#C3C3C3" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
                      Quisque ut tellus purus. In elementum, mi vitae finibus
                      ultricies,
                    <br /> enim mauris pulvinar velit, sed fermentum lorem nisl
                      a ligula
                  </p>
                  </Col>
                </Row>
                <div
                  className="text-center"
                  style={{ color: "white", paddingTop: "100px" }}
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
                </div>
                <Row>
                  <Col md="6" style={{ color: "white", paddingTop: "100px" }}>
                    <div className="phishing">
                      <div className="normal" width="300"></div>
                      <div className="active" width="300"></div>
                    </div>
                    <h5
                      style={{
                        textTransform: "uppercase",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    >
                      Phishing & social engineering
                  </h5>
                    <p style={{ color: "#C3C3C3" }}>
                    Phishing is still one of the most effective ways to breach an organization. <br/>Find out how susceptible your staff are to a targeted phishing attack.

                  </p>
                  </Col>
                  <Col md="6" style={{ color: "white", paddingTop: "100px" }}>
                    <div className="passaudit">
                      <div className="normal" width="300"></div>
                      <div className="active" width="300"></div>
                    </div>
                    <h5
                      style={{
                        textTransform: "uppercase",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    >
                      Password auditing
                  </h5>
                    <p style={{ color: "#C3C3C3" }}>
                    Password cracking for security awareness training. Find out how to stop password attacks against your staff and systems.

                  </p>
                  </Col>
                </Row>
                <Row>
                  <Col md="6" style={{ color: "white", paddingTop: "100px" }}>
                    <div className="threatmod">
                      <div className="normal" width="300"></div>
                      <div className="active" width="300"></div>
                    </div>
                    <h5
                      style={{
                        textTransform: "uppercase",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    >
                      Threat Modelling
                  </h5>
                    <p style={{ color: "#C3C3C3" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
                      Quisque ut tellus purus. In elementum, mi vitae finibus
                      ultricies,
                    <br /> enim mauris pulvinar velit, sed fermentum lorem nisl
                      a ligula
                  </p>
                  </Col>
                  <Col md="6" style={{ color: "white", paddingTop: "100px" }}>
                    <div className="cybersec">
                      <div className="normal" width="300"></div>
                      <div className="active" width="300"></div>
                    </div>
                    <h5
                      style={{
                        textTransform: "uppercase",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    >
                      Cyber security strategy consulting
                  </h5>
                    <p style={{ color: "#C3C3C3" }}>
                    Expert security advice to help you defend your organization against modern attackers and achieve resilience to cyber attacks.
                  </p>
                  </Col>
                </Row>
                <Row>
                  <Col md="6" style={{ color: "white", paddingTop: "100px" }}>
                    <div className="inrep">
                      <div className="normal" width="300"></div>
                      <div className="active" width="300"></div>
                    </div>
                    <h5
                      style={{
                        textTransform: "uppercase",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    >
                      Incident response
                  </h5>
                    <p style={{ color: "#C3C3C3" }}>
                    We are there to support you in the event of a data breach, from detection to containment and recovery.
                  </p>
                  </Col>
                  <Col md="6" style={{ color: "white", paddingTop: "100px" }}>
                    <div className="secres">
                      <div className="normal" width="300"></div>
                      <div className="active" width="300"></div>
                    </div>
                    <h5
                      style={{
                        textTransform: "uppercase",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    >
                      security research and development
                  </h5>
                    <p style={{ color: "#C3C3C3" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
                      Quisque ut tellus purus. In elementum, mi vitae finibus
                      ultricies,
                    <br /> enim mauris pulvinar velit, sed fermentum lorem nisl
                      a ligula
                  </p>
                  </Col>
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
