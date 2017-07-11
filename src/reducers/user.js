const user = (state = {}, action) => {
	switch (action.type) {
		case 'CHANGE_USER':
			return Object.assign({}, state, {
				name: action.name
			});
		case 'CREATE_USER':
			return {
				id: action.id,
				name: action.name
			};
		default:
			return state;
	}
};

export default user;