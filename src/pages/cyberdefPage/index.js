import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, } from 'reactstrap';
import CyberHeader from './cyberHeader';
import { animateScroll } from 'react-scroll';


export default class CyberDef extends Component {

  componentDidMount() {
    animateScroll.scrollToTop();
  }

    render() {
        return (
         
          <div>
              <CyberHeader />
              <Container className="mt-5 mb-5" style={{paddingTop:"70px"}}>
                <h1 style={{ textTransform:'uppercase', fontWeight: 'bold', fontSize: '1.5rem' }}>Cyber defense consulting</h1>
                <p>Expert security advice to help you defend your organization against modern attackers and achieve resilience to cyber attacks.</p>
              </Container>
          </div>
        );
    }
}
