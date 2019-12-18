import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as Icon from "react-feather";
import Moment from 'react-moment';

const PostDetail = ({ post: { title, images, description, video, date } }) => {
  return (
    <Fragment>
      <div className="col-lg-10 col-md-12 offset-lg-1">
        <div className="blog-details">
          <div className="article-img">
            <img
              src={"https://fast-bastion-48125.herokuapp.com/" + images}
              alt="blog-details"
            />
            <div className="date">
              <Moment format="DD-MMM" withTitle>{date}</Moment>
            </div>
          </div>

          <div className="article-content">
            

            <h2>{title}</h2>

            <p className="paragraph">
              {description}
            </p>
            <br/>
            <iframe width="860" height="515" src={video} frameborder="0" title={title} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="share-post">
              <ul>
                <li>
                  <Link to="https://www.facebook.com/">
                    
                      <Icon.Facebook />
                  
                  </Link>
                </li>
                <li>
                  <Link to="https://www.twitter.com/">
                      <Icon.Twitter />

                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/">
                      <Icon.Instagram />

                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/">
                      <Icon.Linkedin />

                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        

        
        
      </div>
    </Fragment>
  );
};

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};


export default connect()(PostDetail);
