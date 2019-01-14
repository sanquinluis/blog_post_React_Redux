import { combineReducers } from 'redux';
import postsReducer from './postsReducers';
import usersReducers from './usersReducers';




export default combineReducers({
	posts: postsReducer,
	users: usersReducers
});


