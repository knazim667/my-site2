import React from "react";
import * as Icon from "react-feather";
import BlogCard from "./Card/BlogCard";

const dummyBlogData = [
  {
    image: require("../assets/images/blog-image/1.jpg"),
    date: "March 15, 2019",
    title: "The security risks of changing package",
    author: "admin",
    blogDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    icon: <Icon.ArrowRight />
  },
  {
    image: require("../assets/images/blog-image/2.jpg"),
    date: "March 18, 2019",
    title: " Tips to Protecting Your Business and Family",
    author: "admin",
    blogDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    icon: <Icon.ArrowRight />
  },
  {
    image: require("../assets/images/blog-image/3.jpg"),
    date: "March 19, 2019",
    title: "Protect Your Workplace from Cyber Attacks",
    author: "admin",
    blogDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    icon: <Icon.ArrowRight />
  }
];
export default class Blog extends React.Component {
  state = {
    BlogData: dummyBlogData
  };
  render() {
    return (
      <section className="blog-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>The News from My Blog</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            {this.state.BlogData.map(Blog => (
              <BlogCard key={Blog.author} {...Blog} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
