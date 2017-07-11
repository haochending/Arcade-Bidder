import React, { Component } from 'react';
import { Segment, Input, Statistic, List, Image } from 'semantic-ui-react';

class BidPanel extends Component {
  render() {
    let ixValue1 =  Math.floor(Math.random() * 10000);
    let ixValue2 =  Math.floor(Math.random() * 10000);
    let ixValue3 =  Math.floor(Math.random() * 10000);


    return (
      <Segment.Group vertical className='Bid-panel'>

          <Segment secondary padded='very'>
            <p>Your Status:</p>
            <Statistic color='blue' size='small' label='IX Value' value={ixValue1 + ixValue2 + ixValue3 } />
            <Statistic color='blue' size='small' label='Cash Left' value='50.00' />
          </Segment>


          <Segment secondary padded='very'>
            <p>You have won:</p>
            <List horizontal>
              <List.Item>
                <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
                <List.Content>
                  IX Value: {ixValue1}
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
                <List.Content>
                  IX Value: {ixValue2}
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
                <List.Content>
                  IX Value: {ixValue3}
                </List.Content>
              </List.Item>
            </List>
          </Segment>

          <Segment secondary padded='very'>
          <Input
            action={{ color: 'teal', labelPosition: 'left', icon: 'dollar', content: 'Place a New Bid' }}
            actionPosition='left'
            placeholder='Type your bid amout...'
          />
          </Segment>
      </Segment.Group>
    );
  }
}

export default BidPanel;