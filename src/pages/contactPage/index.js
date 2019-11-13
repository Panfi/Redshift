import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, FormText, } from 'reactstrap';
import Button from '../../components/button';
import googleMap from '../../assets/images/map.jpg'
import "./contact.css";

export default class ContactPage extends Component {
    render() {
        return (
          <div className="bg-contact">
            <Container className="mt-5 mb-5" style={{paddingTop:"70px"}}>
              <Row>
                <Col md="7">
                    <img src={googleMap} alt="" style={{ width:"520px"}} />
                </Col>
                <Col md="5">
                  <h3 style={{ textTransform:"uppercase", fontSize:"18px", fontWeight: "bold"}}>Get in touch</h3>
                  <Form>
                    <FormGroup>
                    <Input type="select" name="business" id="business">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
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
                    <Button type="btn-secondary" title="Send" />
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
