import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

const PostItem = ({
  post: { _id, title, description, name, images, date }
}) => (
  <div className="col-lg-4 col-md-6">
    <div className="single-blog-post">
      <div className="blog-image">
        <Link to="/blog-details">
          <img src={"https://fast-bastion-48125.herokuapp.com/" + images} alt={title} />
        </Link>

        <div className="date">
          <Icon.Calendar />{" "}
          <Moment format="MMM D YYYY" withTitle>
            {date}
          </Moment>
        </div>
      </div>

      <div className="blog-post-content">
        <h3>
          <Link to="/blog-details">{title}</Link>
        </h3>
        <span>
          by
          <Link to="#">{name}</Link>
        </span>
        <p>{description}</p>{" "}
        <Link to={`/posts/${_id}`}>
          <div className="read-more-btn">
            Read More <Icon.ArrowRight />{" "}
          </div>
        </Link>
      </div>
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default connect()(PostItem);
