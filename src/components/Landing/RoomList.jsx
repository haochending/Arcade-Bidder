import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Room from './Room';

const gridColumns = 4;
const rooms = Math.floor(Math.random() * 10) + 10;

class RoomList extends Component {
  render() {
    let rooms = this.props.rooms;
    rooms = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
    let rows = [];
    let row = [];
    
    if (typeof rooms !== 'undefined') {
      rooms.forEach(function(room, index) {
        if (index % gridColumns === 0) {
          row = [];
        }
        row.push(room);
        if (index % gridColumns === 3) {
          rows.push(row);
        } else if (index === rooms.length - 1) {
          rows.push(row);
        }
      });
    } else {
      rows = [[]];
    }

    console.log(rows);

    return (
        <Container stackable className='Room-list'>
          <Grid columns={4} relaxed>
          {rows.map(function(row) {
            return(
              <Grid.Row>
                {row.map(function(room) {
                  return(
                    <Grid.Column><Room room={room}/></Grid.Column>
                  )
                })}
              </Grid.Row>
            )
          })}
          </Grid>
        </Container>
    );
  }
}

export default RoomList;