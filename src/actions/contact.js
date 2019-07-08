import axios from 'axios';
import { ADD_CONTACT} from './types';
import { setAlert } from "./alert";

export const addContact = formData => async dispatch => {
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };


      try {

        const res = await axios.post('https://fast-bastion-48125.herokuapp.com/api/contact', formData, config);
        dispatch({
            type: ADD_CONTACT,
            payload: res.data
          });
          
        dispatch(setAlert('Message Send', 'success'));
        
      } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
      }

}