const socket = (state = [], action) => {
    let newState;
    switch (action.type) {
        case 'CREATE_SOCKET':
            newState = Object.assign({}, state);
            newState.socket = action.socket;
            return newState;
        default:
            return state;
    }
};

export default socket;
