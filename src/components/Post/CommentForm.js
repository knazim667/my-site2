import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addComment} from '../../actions/post';



const  CommentForm = ({postId, addComment}) => {
    
    const [text, setText] = useState('');

    return (
         <div className="leave-a-reply">
          <h3>Leave a Reply</h3>
          <form onSubmit={e => {
              e.preventDefault();
              addComment(postId, {text});
              setText(' ');
          }}>
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="comment"
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Your Comment"
                    value={text}
                    onChange={e => setText(e.target.value )}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div> 
             </div>
          </form> 
         </div>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
}

export default connect(null, {addComment})(CommentForm);

