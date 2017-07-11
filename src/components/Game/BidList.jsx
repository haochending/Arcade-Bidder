import React, { Component } from 'react';
import { Segment, List } from 'semantic-ui-react';

class BidList extends Component {
  render() {
    return (
      <Segment className='Bid-list'>
        <List divided relaxed animated>
          <List.Item>
            <List.Icon name='money' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header>Peter</List.Header>
              <List.Description>Bid 13 Dollars for Poke Ball</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='money' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header>Vincent</List.Header>
              <List.Description>Bid 25 Dollars for Poke Ball</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='money' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header>Raymond</List.Header>
              <List.Description>Bid 3 Dollars for Poke Ball</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='money' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header>Arven</List.Header>
              <List.Description>Bid 19 Dollars for Poke Ball</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='money' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header>Mike</List.Header>
              <List.Description>Bid 7 Dollars for Poke Ball</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='money' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header>Adam</List.Header>
              <List.Description>Bid 1 Dollars for Poke Ball</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    );
  }
}

export default BidList;