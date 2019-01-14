export default (state = [], action ) => {
	if(action.type === 'FETCH_POSTS') {
		return action.payload;
	}

	return state;
};