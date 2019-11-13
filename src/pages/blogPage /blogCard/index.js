import React from "react";
import {
  Card,
  CardText,
  CardBody,
} from "reactstrap";
import { icons } from "../../../assets";


const BlogCard = ({ category, image,date, title, description }) => {
  category = "Cyber Security";
  date = "Aug 26, 2017";
  title = "TITLE TEXT";
  description = "Some quick example text to build on the card";
  return (
    <div style={{ margin: "20px auto" }}>
      <Card
        style={{
          width: "100%",
          maxWidth: 300,
          boxShadow: "2px 2px 3px 0px rgba(195,195,195, 0.4)",
          cursor: "pointer"
        }}
      >
        <div
          style={{
            width: "100%",
            height: 200,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover"
          }}
        >
          <div className="ml-4 mt-3">
            <span>
              <img
                alt="red shift folder icon"
                src={icons.folder}
                style={{ height: 15, marginTop: -5, marginRight: 5 }}
              />
            </span>
            <span style={{ color: "#fff" }}>{category}</span>
          </div>
        </div>
        <CardBody>
          <div style={{ marginBottom: 10 }}>
            <div style={{ color: "#888888", fontSize: 14 }}>{date}</div>
            <div style={{ height: 5, width: 30, backgroundColor: "#ED1D23" }} />
          </div>
          <h4 style={{ fontWeight: "bold" }}>{title}</h4>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogCard;
