import React from 'react';
import './footer.css';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';

function Footer() {
    return (
        <footer className="text-left">
            <Container className="mt-5">
                <Row>
                    <Col md="1"></Col>
                    <Col md="5">
                        <h1>Get in touch</h1>
                        <p>We're here to help answer your questions. We take great pride in using our expertise for you and look forward to hearing from</p>
                        <a href="" className="btn btn-default">Call Us</a>
                    </Col>
                    <Col className="subtitle" md="3">
                        <h3>Subtitle</h3>
                        <a href="">Orci firngilla ultricies</a><br/>
                        <a href="">Mollis libero auctor</a><br/>
                        <a href="">Viverra nulla</a><br/>
                        <a href="">Imperdiet sit</a><br/>
                        <a href="">Orci firngilla ultricies</a>
                    </Col>
                    <Col md="3">
                        <h3>Subscribe</h3>
                        <Form>
                            <FormGroup>
                                <Input type="email" name="email" id="email" placeholder="Email Address" />
                            </FormGroup>
                        </Form>
                        <p className="mt-5">Call Center <br/>+27 (0) 78 020 6154</p>

                    </Col>
                </Row>
            </Container>
            <Container fluid className="text-center mt-5 text-copy">
                <p>© Redshift Cyber Security. All right reserved.</p>
            </Container>
            
        </footer>
    );
}

export default Footer;