import React from 'react';
import {Container, Row, Col} from 'reactstrap';

function Section() {
    return (
        <div>
            <Container>
                <h2>Your cyber security journey</h2>
            </Container>
            <Container>
                <h2 className="text-center mt-5">Our three-step cyber approach</h2>
                <Row>
                    <Col md="4">
                        <h3>Penetrating Testing</h3>
                        <p>Any technology, any platform. From web to infrastructure, our penetration tets use attack path mapping to show you the true business contect of vulnerabilties.</p>
                    </Col>
                    <Col md="4">
                        <h3>Red Team</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum arcu odio, dapibus id euismod ut, mollis id ligula. Duis sit amet iaculis velit.</p>
                    </Col>
                    <Col md="4">
                        <h3>Cyber defense consulting</h3>
                        <p>Expert security advice to help you defend your organisation against modern attackers and achieve resilience to cyber attacks.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Section;