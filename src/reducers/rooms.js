const rooms = (state = [], action) => {
    let newState;
    switch (action.type) {
        case 'ADD_ROOM':
            return [...state, action.room];
        case 'CHANGE_ROOM_PLAYERS':
            newState = Object.assign([], state);
            return newState.map(room => {
                if (room.channel === action.channel) {
                    return {...room, players: action.players }
                }
                return room;
            });
        case 'CHANGE_ROOM_MODE':
            newState = Object.assign([], state);
            return newState.map(room => {
                if (room.channel === action.channel) {
                    return {...room, mode: action.mode }
                }
                return room;
            });
        case 'CHANGE_ROOM_TIMEOUT':
            newState = Object.assign([], state);
            return newState.map(room => {
                if (room.channel === action.channel) {
                    return {...room, timeout: action.timeout }
                }
                return room;
            });
        case 'DELETE_ROOM':
            newState = Object.assign([], state);
            let index = state.findIndex(room => {
                return room.channel === action.channel;
            });
            newState.splice(index, 1);
            return newState;
        default:
            return state;
    }
};

export default rooms;
