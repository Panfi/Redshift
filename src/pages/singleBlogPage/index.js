import React, { Component } from 'react'
import './singleblog.css'
import { Container, Row, Col } from 'reactstrap';
import SimilarPosts from './similarPosts';
import AuthorInfo from './authorInfo';
import { isMobile } from 'react-device-detect';
import BlogPost from './blogpost';
import { animateScroll } from 'react-scroll';
import RecentPosts from './recentPosts';

const blogImage = "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
const data = [
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

class SingleBlogPage extends Component {
    componentDidMount() {
        animateScroll.scrollToTop();
    }
    render() {
        return (
            <div>
                <div style={{height:'60vh', backgroundImage:`url(${blogImage})`, backgroundSize:'cover', backgroundPosition:"right center",position:"relative"}}>
                    <div className="blog-title-container">
                        <h1 style={{color:'#fff', textAlign:'center'}}>this is a blog title</h1>
                    </div>
                </div>
                <Container style={{ paddingTop: 40, paddingBottom: 80 }}>
                    <Row style={{marginBottom:30}}>
                        <Col>
                            <AuthorInfo/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <BlogPost/>
                        </Col>
                        <Col lg={4}>
                            {!isMobile && (
                                <SimilarPosts
                                    recentposts={data}
                                    similarposts={data}
                                    onPost={null}
                                />
                            )}
                        </Col>
                    </Row>
                    {isMobile && <RecentPosts data={data} blogImage={blogImage} onPost={this.onPost} />}
                </Container>
            </div>
        )
    }
}

export default SingleBlogPage;