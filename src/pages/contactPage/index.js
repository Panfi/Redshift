import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, } from 'reactstrap';
import Button from '../../components/button';
import "./contact.css";
import ContactHeader from './contactHeader';
import { animateScroll,scroller } from 'react-scroll';


const map = "https://maps.google.com/maps?q=Redshift%20Cyber%20Security%20(Pty)%20Ltd%20Process%20House%2C%20Epsom%20Downs%20Office%20Park%2C%2013%20Sloane%20Street&t=&z=13&ie=UTF8&iwloc=&output=embed"
export default class ContactPage extends Component {

  componentDidMount() {
    const { location } = this.props
    const goto = location.state ? location.state.goto : ""
    console.log(this.props)
    if (goto === "contact-form") {
      return scroller.scrollTo('contact-form', {
        duration: 500,
        hashSpy: true,
        delay: 100,
        smooth: true,
        offset:-100
      });
    }
    return  animateScroll.scrollToTop();
  }
  onLearnMore = () => {
    scroller.scrollTo('contact-form', {
      duration: 500,
      hashSpy: true,
      delay: 100,
      smooth: true,
      offset:-100
    });
  }

    render() {
        return (
          <div className="bg-contact">
            <ContactHeader onButton={this.onLearnMore}/>
            <Container className="mt-5 mb-5" style={{paddingTop:"70px"}}>
              <Row>
                <Col md="7" xs="12">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        title="red shift map"
                        width="600"
                        height="500"
                        id="gmap_canvas"
                        src={map} frameBorder="0"
                        scrolling="no" marginHeight="0" marginWidth="0" />
                    </div>
                  </div>
                </Col>
                <Col md="5" xs="12" id="contact-form">
                  <h3 style={{ textTransform:"uppercase", fontSize:"18px", fontWeight: "bold"}}>Get in touch</h3>
                  <Form>
                    <FormGroup>
                    <Input type="select" name="business" id="business">
                      <option selected disabled>I'm interested in:</option>
                      <option value="Penetration Testing">Penetration Testing</option>
                      <option value="Red Team">Red Team</option>
                      <option value="Phishing and social engineering">Phishing and social engineering</option>
                      <option value="Password Auditing">Password Auditing</option>
                      <option value="Threat Modelling">Threat Modelling</option>
                      <option value="Cyber Security Strategy  Consulting">Cyber Security Strategy  Consulting</option>
                      <option value="Incident Response">Incident Response</option>
                      <option value="Security Research and Development">Security Research and Development</option>
                    </Input>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                      style={{minHeight:150}}
                        type="textarea"
                        name="message"
                        id="message"
                        placeholder="Message"
                      />
                    </FormGroup>
                    <Button type="btn-secondary" title="Send" onButton={this.onSubmit} />
                  </Form>
                </Col>
                <Col md="12" className="text-left mt-5">
                    <h3 style={{ textTransform:"uppercase", fontSize:"18px", fontWeight: "bold"}}>contact information</h3>
                    <p>Redshift Cyber Security (Pty) Ltd <br/> Process House, Epsom Downs Office Park, 13 Sloane Street <br/>Bryanston, Johannesburg, South Africa</p><br/>
                    <p>010 141 5565<br/>info@redshiftcybersecurity.co.za</p>
                </Col>
              </Row>
            </Container>
            <Container fluid>
              <Row>
                  <div className="bg-career text-center">
                      <Col md="12">
                        <h1 style={{ textTransform:"uppercase", fontSize:"23px", fontWeight: "bold"}}>Want to join the team?</h1>
                        <p style={{ fontSize:"18px", fontWeight: "bold"}}>Email jobs@redshiftcybersecurity.co.za</p>
                      </Col>
                  </div>
              </Row>
            </Container>
          </div>
        );
    }
}
