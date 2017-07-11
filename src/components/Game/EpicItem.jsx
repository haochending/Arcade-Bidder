import React, { Component } from 'react';
import { Segment, Image, Item, Statistic } from 'semantic-ui-react';

class EpicItem extends Component {
  render() {
    return (
      <Segment className='Epic-item'>
        <Item>
          <Item.Image size='small' src='/img/2.png' />
          <Item.Content>
            <Item.Header as='h1'>Poke Ball</Item.Header>
            <Item.Meta></Item.Meta>
            <Item.Description>
              <Statistic>
                <Statistic.Value>{Math.floor(Math.random() * 10000)}</Statistic.Value>
                <Statistic.Label>IX Value</Statistic.Label>
              </Statistic>
            </Item.Description>
          </Item.Content>
        </Item>
      </Segment>
    );
  }
}

export default EpicItem;