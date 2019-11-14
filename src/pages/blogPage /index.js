import React, { Component } from 'react'
import BlogCard from './blogCard';
import { Container, Row, Col, Input } from 'reactstrap'
import Button from '../../components/button';
import BlogCategories from './blogCategories';
import { isMobile } from 'react-device-detect';
import BlogHeader from './blogHeader';
import { animateScroll } from "react-scroll";

const image_0 =
  "https://images.unsplash.com/photo-1502117859338-fd9daa518a9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDA0fQ&auto=format&fit=crop&w=500&q=60";
const image_1 =
  "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
  const image_2 =
    "https://images.unsplash.com/photo-1501734025636-20c3ffa3fecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80";
    const image_3 =
      "https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80";
    const image_4 =
      "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";

const list = [
  "Penetration Testing",
  "Red Team",
  "Phishing & Social Media",
  "Password Auditing",
  "Threat Modelling",
  "Cyber Security Strategy Consulting",
  "Incident Response",
  "Security Research and Development",
  "Products",
  "Events"
];

export default class BlogPage extends Component {
    componentDidMount(){
      animateScroll.scrollToTop();
    }
    onPost = (value) => this.props.history.push(`/blog/${value}`)
    render() {
        return (
          <div>
            <BlogHeader/>
            <Container style={{ margin: "auto" }}>
              {isMobile && (
                <Row>
                  <Col md={3} className="mx-auto mt-5">
                    <div
                      style={{
                        width: 30,
                        height: 5,
                        backgroundColor: "red",
                        marginBottom: 5
                      }}
                    />
                    <h4 style={{ fontWeight: "bold" }}>CATEGORIES</h4>
                    <Input type="select" name="business" id="business">
                      <option defaultValue>Select</option>
                      {list.map((item) => 
                        <option>{item}</option>
                      )}
                    </Input>
                  </Col>
              </Row>
              )}
              <Row>
                <Col>
                  <h3 style={{ textAlign: "center", fontWeight: "bold", marginTop:30 }}>
                    LATEST POSTS
                  </h3>
                </Col>
              </Row>
              <Row style={{ margin: "auto" }}>
                {list.map((i, index) => {
                  const x = index 
                  console.log(`image_${ x }`)
                    return (
                      <Col key={index} md={4} style={{ margin: "auto" }}>
                        <BlogCard image={image_4} onPost={this.onPost}/>
                      </Col>
                    )
                  })}
              </Row>
              <div style={{marginLeft:15, marginBottom:20}}>
                <Button title="View Older" type="btn-primary" />
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
                        <BlogCard image={image_3} />
                      </Col>
                      <Col md={6}>
                        <BlogCard image={image_4} />
                      </Col>
                      <Col md={6}>
                        <BlogCard image={image_3} />
                      </Col>
                      <Col md={6}>
                        <BlogCard image={image_1} />
                      </Col>
                      <Col md={6}>
                        <BlogCard image={image_2} />
                      </Col>
                      <Col md={6}>
                        <BlogCard image={image_3} />
                      </Col>
                      <Col md={6}>
                        <BlogCard image={image_0} />
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <BlogCategories data={list} onCategory={data => alert(data)} />
                  </Col>
                </Row>
                <div style={{ marginLeft: 15 }}>
                  <Button title="See More" type="btn-primary" />
                </div>
              </section>
            </Container>
            {/* <div>
              <Row>
                <div class="canyon2"></div>
              </Row>
            </div> */}
          </div>
        );
    }
}
