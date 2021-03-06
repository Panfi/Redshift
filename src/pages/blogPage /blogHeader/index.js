import React from 'react'
import { Container, Row,Col } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import Button from '../../../components/button';
import bg from "../../../assets/images/Redshift_Web_Header-03.png";
import { withRouter } from 'react-router-dom';

const BlogHeader = ({history}) =>{

    const onLearnMore = () => {
       history.push({
            pathname: '/contact',
            state: { goto: "contact-form" }
          })
    }
    return (
        <div className="bg-blog"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize:"cover",
                height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundPositionX:'center'
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
                            <h1 style={{ fontFamily: "Lato", fontWeight: 500, textTransform:"uppercase", marginBottom: 20, fontSize: isMobile ? "2rem" : "2.5rem" }}>
                                Build Resilience
                        <br />
                                against modern
                        <br />
                                cyber attacks
                      </h1>
                            <p style={{ fontFamily: "Lato", fontSize: isMobile ? 16 : 16 }}>
                                Gain powerful insight into your
                        <br />
                                security posture. Redshift 
                        <br />
                                vulnerability assessments allow
                        <br />
                                you to identify risks and track
                        <br />
                                them to remediation.
                      </p>
                      <br />
                        <Button type="btn-default" title="Learn More" onButton={onLearnMore}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default withRouter(BlogHeader)