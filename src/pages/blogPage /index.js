import React, { Component } from 'react'
import BlogCard from './blogCard';
import { Container, Row, Col } from 'reactstrap'
import Button from '../../components/button';
import BlogCategories from './blogCategories';
import { isMobile } from 'react-device-detect';

import bg from "../../assets/images/Redshift_Web_Header-03.png";

const image =
  "https://images.unsplash.com/photo-1502117859338-fd9daa518a9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDA0fQ&auto=format&fit=crop&w=500&q=60";
const image2 =
  "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
  const image3 =
    "https://images.unsplash.com/photo-1501734025636-20c3ffa3fecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80";
    const image4 =
      "https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80";
    const image5 =
      "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";



export default class BlogPage extends Component {
    render() {
        return (
          <div>
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
                      <h1 style={{ marginBottom: 20, fontSize:isMobile? 45: 54 }}>
                        Build Resilience
                        <br />
                        against modern
                        <br />
                        cyber attacks
                      </h1>
                      <p style={{ fontSize: isMobile ? 20: 24 }}>
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
            <Container style={{ margin: "auto" }}>
              {isMobile && (
                <div>BSSDIBFISDBFBFSDKBFJDBFSBFKSBDFJFBKJDSFKJSB</div>
              )}
              <Row>
                <Col>
                  <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
                    LATEST POSTS
                  </h3>
                </Col>
              </Row>
              <Row style={{ margin: "auto" }}>
                <Col md={4} style={{ margin: "auto" }}>
                  <BlogCard image={image} />
                </Col>
                <Col md={4} style={{ margin: "auto" }}>
                  <BlogCard image={image2} />
                </Col>
                <Col md={4} style={{ margin: "auto" }}>
                  <BlogCard image={image3} />
                </Col>
                <Col md={4} style={{ margin: "auto" }}>
                  <BlogCard image={image4} />
                </Col>
                <Col md={4} style={{ margin: "auto" }}>
                  <BlogCard image={image5} />
                </Col>
                <Col md={4} style={{ margin: "auto" }}>
                  <BlogCard image={image2} />
                </Col>
                <Col md={4} style={{ margin: "auto" }}>
                  <BlogCard image={image3} />
                </Col>
                <Col md={4} style={{ margin: "auto" }}>
                  <BlogCard image={image4} />
                </Col>
                <Col md={4} style={{ margin: "auto" }}>
                  <BlogCard image={image} />
                </Col>
              </Row>
              <div style={{ marginLeft: 15, marginBottom: 60 }}>
                <Button title="View Order" type="btn-primary" />
              </div>
              <section>
                <Row>
                  <Col>
                    <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
                      POPULAR POSTS
                    </h3>
                  </Col>
                </Row>
                <Row style={{ margin: "auto", paddingTop: 10 }}>
                  <Col md={8}>
                    <Row>
                      <Col md={6}>
                        <BlogCard image={image3} />
                      </Col>
                      <Col md={6}>
                        <BlogCard image={image4} />
                      </Col>
                      <Col md={6}>
                        <BlogCard image={image5} />
                      </Col>
                      <Col md={6}>
                        <BlogCard image={image2} />
                      </Col>
                      <Col md={6}>
                        <BlogCard image={image3} />
                      </Col>
                      <Col md={6}>
                        <BlogCard image={image4} />
                      </Col>
                      <Col md={6}>
                        <BlogCard image={image} />
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <BlogCategories onCategory={data => alert(data)} />
                  </Col>
                </Row>
                <div style={{ marginLeft: 15 }}>
                  <Button title="See More" type="btn-primary" />
                </div>
              </section>
            </Container>
            <div>
              <Row>
                <div class="canyon2"></div>
              </Row>
            </div>
          </div>
        );
    }
}
