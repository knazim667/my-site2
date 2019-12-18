import React from "react";
import { Link } from "react-router-dom";

const BlogCardBody = props => {
  const { image, title, date, author, detail, icon } = props;
  return (
    <div className="single-blog-post">
      <div className="blog-image">
        <Link to="#">
          <img src={image} alt={title} />
        </Link>

        <div className="date">
          <i data-feather="calendar"></i> {date}
        </div>
      </div>

      <div className="blog-post-content">
        <h3>
          <Link to="#">{title}</Link>
        </h3>

        <span>
          by
          <Link to="#">{author}</Link>
        </span>

        <p>{detail}</p>
        <Link to="#" className="read-more-btn">
          Read More {icon}
        </Link>
      </div>
    </div>
  );
};

export default BlogCardBody;
