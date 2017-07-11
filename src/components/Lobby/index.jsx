import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button, Icon, Container, Segment, List } from 'semantic-ui-react';
import './index.css';

class Lobby extends Component {

  constructor(props) {

    super(props);

    this.state = {};

  }

  componentDidMount() {
    let socket = this.props.socket.socket;
    let id = this.props.location.search.substring(4);
    console.log(id);

    // var roomID = $('#inputRoomID').val();

    socket.on('playerJoinedRoomSuccess', (player) => {

        console.log(player);
        // let players = this.state.players;
        // players.push(player);

        // this.setState({players: players});
    })

    socket.emit('joinRoom', id);
  }

  render() {
    const { match, location, history } = this.props;

    return (
      <Container className='Lobby'>
        <Segment.Group vertical>
            <Segment>
                <h1>Room {this.props.location.search.substring(4)}</h1>
                <p>Arcade Mode</p>
                <p>Random time per round of bidding</p>
            </Segment>
            <Segment className='user-list'>
                <List divided relaxed animated>
                <List.Item>
                    <List.Icon name='user' size='large' verticalAlign='middle' />
                    <List.Content>
                    <List.Header>Peter</List.Header>
                    <List.Description>Has joined the room...</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='user' size='large' verticalAlign='middle' />
                    <List.Content>
                    <List.Header>Vincent</List.Header>
                    <List.Description>Has joined the room...</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='user' size='large' verticalAlign='middle' />
                    <List.Content>
                    <List.Header>Raymond</List.Header>
                    <List.Description>Has joined the room...</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='user' size='large' verticalAlign='middle' />
                    <List.Content>
                    <List.Header>Arven</List.Header>
                    <List.Description>Has joined the room...</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='user' size='large' verticalAlign='middle' />
                    <List.Content>
                    <List.Header>Mike</List.Header>
                    <List.Description>Has joined the room...</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='user' size='large' verticalAlign='middle' />
                    <List.Content>
                    <List.Header>Adam</List.Header>
                    <List.Description>Has joined the room...</List.Description>
                    </List.Content>
                </List.Item>
                </List>
            </Segment>
            <Segment>
                <Button animated fluid color='blue' onClick={() => {this.props.socket.socket.emit('hostStartGame', "some data");history.push('/game');}}>
                    <Button.Content visible>Start Game</Button.Content>
                    <Button.Content hidden>
                        <Icon name='right arrow' />
                    </Button.Content>
                </Button>
            </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

function mapStateToProps (state) {
    console.log(state);
  return {user: state.user, rooms: state.rooms, game: state.game, socket: state.socket};
}

export default withRouter(connect(mapStateToProps)(Lobby))