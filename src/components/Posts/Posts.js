import React,{ Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import {getPosts} from '../../actions/post';
import { connect } from 'react-redux';
import { Placeholder } from 'react-preloading-screen';
import PageTitle from '../PageTitle';
import PostItem from './PostItem';

const Posts = ({getPosts, post: {posts, loading}})=> {

    useEffect(()=>{
        getPosts();

    },[getPosts]);


    return loading ? 
        <Placeholder>
        <div className="preloader">
                            <div className="spinner"></div>
                        </div>
        </Placeholder>
     : <Fragment>
        <PageTitle>
            Welcome to Blogs
        </PageTitle>
        <section className="blog-area ptb-80">
            <div className="container">
                <div className="row">
                    {posts.map(post => (
                        <PostItem key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    </Fragment>
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {getPosts})(Posts);

