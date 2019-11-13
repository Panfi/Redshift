import React from 'react'
import { Container, Row,Col } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import bg from "../../../assets/images/Redshift_Web_Header-03.png";

export default function BlogHeader() {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: isMobile ? "cover" : "contain",
                height: "100vh",
                backgroundRepeat: "no-repeat"
            }}
        >
            <Container fluid >
                <Row className="mx-auto">
                    {!isMobile && <Col md={7}></Col>}
                    <Col>
                        <div
                            style={{
                                color: "#fff",
                                paddingTop: "25vh",
                                paddingBottom: "100vh",
                            }}
                        >
                            <h1 style={{ marginBottom: 20, fontSize: isMobile ? 45 : 54 }}>
                                Build Resilience
                        <br />
                                against modern
                        <br />
                                cyber attacks
                      </h1>
                            <p style={{ fontSize: isMobile ? 20 : 24 }}>
                                Gain powerful insight into your
                        <br />
                                security posture.
                        <br />
                                Redshift vulnerability assessments allow
                        <br />
                                you to identify risks and track
                        <br />
                                them to remediation.
                      </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
