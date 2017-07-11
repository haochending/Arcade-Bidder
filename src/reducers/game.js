const game = (state = {}, action) => {
    let newState;
    let players;
    switch (action.type) {
        case 'ADD_GAME_PLAYER':
            newState = Object.assign({}, state);
            newState.players.push({ id: action.id, name: action.name });
            return newState;
        case 'CHANGE_GAME_PLAYER':
            newState = Object.assign({}, state);
            players = newState.players;
            for (let i = 0; i < players.length; i++) {
                if (players[i].id === action.id) {
                    players[i].name = action.name;
                }
            }
            return newState;
        case 'DELETE_GAME_PLAYER':
            newState = Object.assign({}, state);
            players = newState.players;
            let index = players.findIndex(player => {
                return player.id === action.id;
            });
            players.splice(index, 1);
            return newState;
        case 'CHANGE_GAME_TIMEOUT':
            newState = Object.assign({}, state, {
                timeout: action.timeout
            });
            return newState;
        case 'CHANGE_GAME_CASH':
            newState = Object.assign({}, state, {
                cash: action.cash
            });
            return newState;
        case 'CHANGE_GAME_BID':
            newState = Object.assign({}, state, {
                bid: action.bid
            });
            return newState;
        case 'ADD_GAME_ROUND':
            newState = Object.assign({}, state);
            newState.rounds.push(action.round);
            return newState;
        case 'JOIN_GAME':
        	return {
        		channel: action.channel,
        		timeout: action.timeout,
        		cash: action.cash,
        		bid: 0,
        		players: action.players || [],
        		rounds: action.rounds || []
        	};
        case 'START_AUCTION':
            newState = Object.assign({}, state, {
                currentAuction: {
                    name: action.name,
                    value: action.value,
                    description: action.description
                }
            });
            return newState;
        default:
            return state;
    }
};

export default game;
