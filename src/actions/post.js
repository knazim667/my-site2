import axios from "axios";
import { GET_POSTS, POST_ERROR, GET_POST, ADD_COMMENT} from "./types";
import { setAlert } from "./alert";


export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get(
      "https://fast-bastion-48125.herokuapp.com/api/posts/"
      // "http://localhost:5000/api/posts/"
    );

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      // payload: { msg: err.response.data.errors, status: err.response.status }
    });
  }
};

export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(
     `https://fast-bastion-48125.herokuapp.com/api/posts/${id}`
      // `http://localhost:5000/api/posts/${id}`
    );

    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      // payload: { msg: err.response.data.errors, status: err.response.status }
    });
  }
};


// Add comment

export const addComment = (postId, formData) => async dispatch =>{

  const config = {
    headers : {
      'Content-Type' : 'application/json'
    }
  }

  try {
  const res = await axios.post(`https://fast-bastion-48125.herokuapp.com/api/posts/comment/${postId}`, formData, config);

    dispatch({
      type : ADD_COMMENT,
      payload : res.data
    });
    dispatch(setAlert('Comment Added.', 'success'));
    
  } catch (err) {
    dispatch({
      type : POST_ERROR
    });
  }
}

// Remove Comment

// export const deleteComment = (postId, commentId) => async dispatch =>{


//   try {
//   const res = await axios.delete(`https://fast-bastion-48125.herokuapp.com/api/posts/comment/${postId}/${commentId}`);

//     dispatch({
//       type : REMOVE_COMMENT,
//       payload : commentId
//     });
//     dispatch(setAlert('Comment Deleted', 'success'));
    
//   } catch (err) {
//     dispatch({
//       type : POST_ERROR
//     });
//   }
// }
