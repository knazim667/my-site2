import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost } from "../../actions/post";
import PageTitle from "../PageTitle";
import { Placeholder } from "react-preloading-screen";
import PostDetail from "./PostDetail";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import Alert from "../Alert";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);
  return loading || post === null ? (
    <Placeholder>
      <div className="preloader">
        <div className="spinner" />
      </div>
    </Placeholder>
  ) : (
    <Fragment>
      <PageTitle>Post Detail</PageTitle>

      <section className="blog-details-area ptb-80">
        <div className="container">
          <div className="row">
            <PostDetail post={post} />
          </div>

            <br/>
          <Alert />
          <div className="col-lg-10 col-md-12 offset-lg-1">
            
            <div className="post-comments">
                <h3>Comments</h3>
                {post.comments.map(comment => (
                    <CommentItem key={comment._id} comment={comment} postId={post._id} />
                ))}
            </div>
            <CommentForm postId={post._id} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
