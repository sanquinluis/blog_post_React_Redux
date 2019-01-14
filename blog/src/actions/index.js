import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';



export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	console.log("waiting to be fetched");
	await dispatch(fetchPosts());
	const userIds = _.uniq(_.map(getState().posts, 'userId'));
	userIds.forEach(id => dispatch(fetchUser(id)));
};

// fetching posts (action creators)
export const fetchPosts = () => async dispatch => {
		const response =  await jsonPlaceholder.get('/posts');

		dispatch({ type: 'FETCH_POSTS', payload: response.data });
	};

// fetching users (action creators)
export const fetchUser = (id) => async dispatch => {
	   	const response = await jsonPlaceholder.get(`/users/${id}`);

		dispatch({ type: 'FETCH_USER', payload: response.data });

	};
// Memoized approach
// export const fetchUser = (id) => dispatch => {
// 		_fetchUser(id, dispatch);
// 	};

// 	   const _fetchUser = _.memoize (async (id, dispatch) => {
// 	   	const response = await jsonPlaceholder.get(`/users/${id}`);

// 		dispatch({ type: 'FETCH_USER', payload: response.data });

// 	});