import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from 'react-moment';

const CommentItem = ({
  comment: { avatar, text, date, name },
  auth,
}) => (
    <div className="single-comment">
      <div className="comment-img">
        <img src={avatar} alt="client" />
      </div>
      <div className="comment-content">
        <h4>{name}</h4>
        <p>
          {text}
        </p>
        <span>Comment on: <Moment format="MMM-DD-YYYY" withTitle>{date}</Moment></span>
      </div>
    </div>
  );

CommentItem.propTypes = {
  // postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { }
)(CommentItem);
