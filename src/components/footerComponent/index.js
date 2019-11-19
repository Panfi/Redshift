import React, { Component } from 'react'
import './footer.css';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import Button from '../button';
import { withApollo } from 'react-apollo';
import {mutations } from 'graphql-methods'

const emailregex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const {subscribe } = mutations
class Footer extends Component {

  state = {
    subscriber:""
  }


  onSubscriberHandler = (e) => {
    this.setState({
      subscriber: e.target.value
    })
  }

  onSubmit = async() => {
    try {
      if (emailregex.test(this.state.subscriber)) {
        const data = await this.props.client.mutate({
          mutation: subscribe,
          variables: {
            input: {
              email: this.state.subscriber
            }
          }
        });
        this.setState({ subscriber: "" })
        return data
      }
    } catch (error) {
    }
  }



  render() {
    return (
      <footer className="text-left">
        <Container className="mt-5">
          <Row>
            <Col md="1" className="pattern-left"></Col>
            <Col md="4">
              <h1>Get in touch</h1>
              <p>
                We're here to help answer your questions. We take great pride in
                using our expertise for you and look forward to hearing from
              </p>
              <Button type="btn-default" title="Contact Us" to={"/contact"} />
            </Col>
            <Col className="subtitle" md="3">
              <h3>Subtitle</h3>
              <a href="!#">Orci firngilla ultricies</a>
              <br />
              <a href="!#">Mollis libero auctor</a>
              <br />
              <a href="!#">Viverra nulla</a>
              <br />
              <a href="!#">Imperdiet sit</a>
              <br />
              <a href="!#">Orci firngilla ultricies</a>
            </Col>
            <Col md="3">
              <h3>Subscribe</h3>
              <Form>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="emailFooter"
                    placeholder="Email Address"
                    value={this.state.subscriber}
                    onChange={this.onSubscriberHandler}
                  />
                </FormGroup>
              </Form>
              <Button type="btn-default" title="Send" onButton={this.onSubmit} />
              <p className="mt-1">
                Call Center <br />
                +27 (0) 78 020 6154
              </p>
            </Col>
            <Col md="1" className="pattern-right"></Col>
          </Row>
        </Container>
        <Container fluid className="text-center mt-5 text-copy">
          <p>© Redshift Cyber Security. All right reserved.</p>
        </Container>
      </footer>
    );
  }
}

export default withApollo(Footer);