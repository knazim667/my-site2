import { combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import post from './post';
import contact from './contact';

export default combineReducers({
    post,
    alert,
    auth, 
    contact
});