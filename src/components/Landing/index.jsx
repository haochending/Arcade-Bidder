import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../../actions'
import { Button, Icon } from 'semantic-ui-react';
import RoomSearch from './RoomSearch';
import RoomList from './RoomList';
import NewRoom from './NewRoom';
import './index.css';
import logo from './logo.svg';

class Landing extends Component {

  constructor(props) {

    super(props);

    this.state = {};

    let socket = props.socket.socket;
    socket.on('connected', function(){console.log(123)})
    socket.on('lobbySync', (rooms) => {
        this.setState({rooms: rooms});
    })
  }

  render() {
    const user = this.props.user;
    const rooms = this.state.rooms;

    return (
      <div>
        <div>
          <img src='/img/logo.png' className="App-logo" alt="logo" onClick={() => {console.log(rooms)}}/>
          <h1>Welcome to Arcade Bidder!</h1>
        </div>

        <RoomSearch />

        <p>Or join a room:</p>

        <RoomList rooms={rooms}/>

        <NewRoom />
      </div>
    );
  }
}

function mapStateToProps (state) {
  console.log(state);
  return {user: state.user, rooms: state.rooms, game: state.game, socket: state.socket};
}

export default withRouter(connect(mapStateToProps)(Landing))