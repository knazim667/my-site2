import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as Icon from "react-feather";
import Moment from 'react-moment';

const PostDetail = ({ post: { title, images, description, date } }) => {
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
            

            <h3>{title}</h3>

            <p>
              {description}
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              eum alias debitis suscipit, sint dignissimos minus quisquam
              recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque,
              labore placeat! Velit, vitae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur
              non rem tenetur dolore consequatur ducimus a labore excepturi quae
              nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              iste? Aut ipsam consequuntur non rem tenetur dolore consequatur
              ducimus a labore excepturi quae nisi, quisquam, maxime voluptates
              magnam aliquid. Cupiditate!
            </p>

            <blockquote className="blockquote">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                iste? Aut ipsam consequuntur non rem tenetur dolore consequatur
                ducimus a labore excepturi quae nisi, quisquam, maxime
                voluptates magnam aliquid. Cupiditate.
              </p>
            </blockquote>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              eum alias debitis suscipit, sint dignissimos minus quisquam
              recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque,
              labore placeat! Velit, vitae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur
              non rem tenetur dolore consequatur ducimus a labore excepturi quae
              nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!
            </p>

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
