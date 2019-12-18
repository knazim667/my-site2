import React, { Component } from "react";
import * as Icon from "react-feather";
import Card from "../Card/Card";

const data = [
  {
    icon: <Icon.Code />,
    border: "web",
    heading: "Web Development",
    description:
      "Coding is my principal role, I love converting a PSD or inDesign file to a beautiful responsive website. I tend to code things from scratch and I enjoy bringing new ideas to life."
  },
  {
    icon: <Icon.Camera />,
    border: "Graphic",
    heading: "Graphic Design",
    description:
      "Designing has been always my passion in parallel with Web development, I always try to learn news tricks and bring them to life in real projects. I designed couple web.."
  },
  {
    icon: <Icon.Triangle />,
    border: "QA",
    heading: "QA Engineer",
    description:
      "Aside from Coding and designing , testing my code or someone else's before pushing it to production is very important. It decreases the chance of breaking the system."
  },
  {
    icon: <Icon.Server />,
    border: "Database",
    heading: "Database",
    description:
      "Try to divide information carefully among tables to eliminate data redundancy. Provides access with information a user needs to join tables together. Ensures data accuracy and.."
  }
];

class BoxArea extends Component {
  state = {
    BoxData: data
  };
  render() {
    return (
      <section className="boxes-area">
        <div className="container">
          <div className="row">
            {this.state.BoxData.map(data => (
              <Card
                key={data.heading}
                border={data.border}
                icon={data.icon}
                heading={data.heading}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default BoxArea;
