import React from 'react';
import './home.css';
import Header from "../../components/headerComponent";

import {
    Container,
    Col,
    Row,


} from 'reactstrap';


function Home() {
    return (
      <div>
        <Container fluid className="home">
          <Container className="mt-5">
            <Row>
              <Col md="6"></Col>
              <Col md="6">
                <div className="ml-5">
                  <h1>
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
                  <a href="!#" className="btn btn-default mt-3">
                    Learn More
                  </a>
                </div>
              </Col>
              <Col md="12">
                <p className="text-center mt-5 mb-5">
                  Any technology, any platform. From web to infrastruture, our
                  penetration tests use
                  <br /> attack path mapping to show you the true business
                  context of vulnerabilities.
                </p>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md="12" className="text-center">
                <h3>Your cyber security journey</h3>
              </Col>
              <Col md="6">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. <br />
                  Quisque ut tellus purus.
                  <br /> In elementum, mi vitae finibus
                  <br /> ultricies, enim mauris pulvinar velit
                </p>
                <a href="!#" className="btn btn-default mb-5">
                  Contact Us
                </a>
              </Col>
              <Col md="6"></Col>
            </Row>
          </Container>
        </Container>
        <Container className="mt-5">
          <div className="approach">
            <h3 className="text-center">Our three-step cyber approach</h3>
            <Row>
              <Col md="4">
                <h1>01</h1>
                <h2>penetration testing</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ut tellus purus. In elementum, mi vitae finibus
                  ultricies, enim mauris pulvinar velit, sed fermentum lorem
                  nisl a ligula.
                </p>
              </Col>
              <Col md="4">
                <h1>02</h1>
                <h2>red team</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ut tellus purus. In elementum, mi vitae finibus
                  ultricies, enim mauris pulvinar velit, sed fermentum lorem
                  nisl a ligula.
                </p>
              </Col>
              <Col md="4">
                <h1>03</h1>
                <h2>Cyber defense consulting</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ut tellus purus. In elementum, mi vitae finibus
                  ultricies, enim mauris pulvinar velit, sed fermentum lorem
                  nisl a ligula.
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
            <div className="bg-service"></div>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <div className="canyon2"></div>
          </Row>
        </Container>
        <Container fluid>
          <Row></Row>
        </Container>
      </div>
    );
}

export default Home;
