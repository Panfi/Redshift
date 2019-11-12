import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";


const BlogCard = ({image}) => {
  return (
    <div style={{ margin: "20px auto" }}>
      <Card
        style={{
          width: 300,
          maxWidth: "100%",
          boxShadow: "2px 2px 5px 1px #C3C3C3"
        }}
      >
        <div
          style={{
            width: "100%",
            height: 200,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover"
          }}
        />
        <CardBody>
          <div style={{ marginBottom: 10 }}>
            <div style={{ color: "#888888", fontSize: 14,}}>Aug 26, 2017</div>
            <div style={{ height: 5, width: 30, backgroundColor: "#ED1D23" }} />
          </div>
          <h4 style={{ fontWeight: "bold" }}>TITLE TEXT</h4>
          <CardText>Some quick example text to build on the card</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogCard;
