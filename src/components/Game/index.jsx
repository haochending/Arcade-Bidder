import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import EpicItem from './EpicItem';
import BidPanel from './BidPanel';
import CountDown from './CountDown';
import BidList from './BidList';
import Players from './Players';
import './index.css';


class Game extends Component {
  render() {
    let timeout = this.props.game.timeout;
    let rounds = this.props.game.rounds;
    let players = this.props.game.players;
    let cash = this.props.game.cash;

    return (
      <div>
        <Segment.Group horizontal>
            <Segment className='game'>
                <EpicItem />
                <BidPanel cash={cash}/>
            </Segment>
            <Segment className='status'>
                <CountDown timeout={timeout}/>
                <BidList rounds={rounds}/>
                <Players players={players}/>
            </Segment>
        </Segment.Group>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {user: state.user, game: state.game}
}

export default withRouter(connect(mapStateToProps)(Game))