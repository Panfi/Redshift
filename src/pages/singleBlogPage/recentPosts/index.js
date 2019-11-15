import React from 'react'
import BlogCard from '../../blogPage /blogCard/index';
import { Row, Col } from 'reactstrap';

export default function RecentPosts({ data, blogImage, onPost}) {
    return (
        <div>
            <Row>
                <hr style={{ width: "90%", height: 2 }} />
                <Col>
                    <h3 style={{ textAlign: "center", fontWeight: "bold", marginTop: 30 }}>
                        LATEST POSTS
                            </h3>
                </Col>
            </Row>
            <Row style={{ margin: "auto" }}>
                {data.map((i, index) => {
                    return (
                        <Col key={index} md={6} lg={4} style={{ margin: "auto" }}>
                            <BlogCard image={blogImage} onPost={onPost} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
