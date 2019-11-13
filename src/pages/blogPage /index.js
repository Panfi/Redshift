import React, { Component } from 'react'
import Header from "../../components/headerComponent";
import BlogCard from './blogCard';
import { Container, Row, Col } from 'reactstrap'
import Button from '../../components/button';



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
            <Container style={{ margin: "auto" }}>
              <Row style={{ margin: "auto", paddingTop: 80 }}>
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
                    <div
                      style={{
                        marginTop: 20,
                        height: 760,
                        width: 300,
                        maxWidth: "100%",
                        boxShadow: "0px 2px 3px 3px rgba(195,195,195, 0.4)"
                      }}
                    />
                  </Col>
                </Row>
                <div style={{ marginLeft: 15, marginBottom: 30 }}>
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
