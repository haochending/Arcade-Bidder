import _ from 'lodash';
import faker from 'faker';
import { withRouter } from 'react-router';
import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const times = ['Random', '15 Seconds', '30 Seconds', '60 Seconds'];

class Room extends Component {
  render() {
    const { match, location, history, room } = this.props;

    let data = {
      id: faker.random.number(),
      creator: faker.name.findName(),
      mode: 'Arcade',
      players: Math.floor(Math.random() * 4) + 4,
      date: faker.date.past()
    }

    let time = _.sample(times);

    return (
      <Card className='Room'
        onClick={() => {history.push(`/lobby/?id=${data.id}`)}}
        >
        <Card.Content>
          <Card.Header>
            Room {data.id}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Created by: {data.creator}
            </span>
          </Card.Meta>
          <Card.Description>
            <p>Arcade Mode</p>
            <p>Time per round: 15 Seconds</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {data.players}/8 Players
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default withRouter(Room);