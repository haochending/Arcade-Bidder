export const changeUser = (name) => ({
  type: 'CHANGE_USER',
  name
});

export const createUser = (id, name) => ({
  type: 'CREATE_USER',
  id,
  name
});

export const addRoom = (id, players) => ({
  type: 'ADD_ROOM',
  room: {
  	id: id,
  	players: players
  }
});

export const changeRoomPlayers = (id, players) => ({
  type: 'CHANGE_ROOM_PLAYERS',
  id,
  players
});

export const changeRoomMode = (id, mode) => ({
  type: 'CHANGE_ROOM_MODE',
  id,
  mode
});

export const changeRoomTimeout = (id, timeout) => ({
  type: 'CHANGE_ROOM_TIMEOUT',
  id,
  timeout
});

export const deleteRoom = (id) => ({
  type: 'DELETE_ROOM',
  id
});

export const addGamePlayer = (id, name) => ({
  type: 'ADD_GAME_PLAYER',
  id,
  name
});

export const changeGamePlayer = (id, name) => ({
  type: 'CHANGE_GAME_PLAYER',
  id,
  name
});

export const deleteGamePlayer = (id) => ({
  type: 'DELETE_GAME_PLAYER',
  id
});

export const changeGameTimeout = (timeout) => ({
  type: 'CHANGE_GAME_TIMEOUT',
  timeout
});

export const changeGameCash = (cash) => ({
  type: 'CHANGE_GAME_CASH',
  cash
});

export const changeGameBid = (bid) => ({
  type: 'CHANGE_GAME_BID',
  bid
});

export const addGameRound = (round) => ({
  type: 'ADD_GAME_ROUND',
  round
});

export const joinGame = (id, timeout, cash, players, rounds) => ({
  type: 'JOIN_GAME',
  id,
  timeout,
  cash,
  players,
  rounds
});

export const startAuction = (id, name, value, description) => ({
  type: 'START_AUCTION',
  id,
  name,
  value,
  description
});

export const createSocket = (socket) => ({
  type: 'CREATE_SOCKET',
  socket
});