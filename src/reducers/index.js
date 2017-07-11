import { combineReducers } from 'redux';
import user from './user';
import game from './game';
import rooms from './rooms';
import socket from './socket';

const ArcadeBidderApp = combineReducers({
    user,
    rooms,
    game,
    socket
});

export default ArcadeBidderApp;