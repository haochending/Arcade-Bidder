import React, { Component } from 'react';
import faker from 'faker';
import { Segment, Card, Button, Image } from 'semantic-ui-react';

class Players extends Component {
  render() {
    return (
      <Segment>
        <Card.Group itemsPerRow={4}>
          <Card raised>
            <Card.Content>
              <Card.Header>
                {faker.name.findName()}
              </Card.Header>
              <Card.Meta>
                ID: {faker.random.number()}
              </Card.Meta>
              <Card.Description>
                <p>IX Value <strong>1999</strong></p>
                <p>Cash Left <strong>50.00</strong></p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>Won Items: </p>
              <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
              <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
              <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
            </Card.Content>
          </Card>
          <Card raised>
            <Card.Content>
              <Card.Header>
                {faker.name.findName()}
              </Card.Header>
              <Card.Meta>
                ID: {faker.random.number()}
              </Card.Meta>
              <Card.Description>
                <p>IX Value <strong>1999</strong></p>
                <p>Cash Left <strong>50.00</strong></p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>Won Items: </p>
              <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
              <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
            </Card.Content>
          </Card>
          <Card raised>
            <Card.Content>
              <Card.Header>
                {faker.name.findName()}
              </Card.Header>
              <Card.Meta>
                ID: {faker.random.number()}
              </Card.Meta>
              <Card.Description>
                <p>IX Value <strong>1999</strong></p>
                <p>Cash Left <strong>50.00</strong></p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>Won Items: </p>
              <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
              <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
            </Card.Content>
          </Card>
          <Card raised>
            <Card.Content>
              <Card.Header>
                {faker.name.findName()}
              </Card.Header>
              <Card.Meta>
                ID: {faker.random.number()}
              </Card.Meta>
              <Card.Description>
                <p>IX Value <strong>1999</strong></p>
                <p>Cash Left <strong>50.00</strong></p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>Won Items: </p>
              <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
            </Card.Content>
          </Card>
          <Card raised>
            <Card.Content>
              <Card.Header>
                {faker.name.findName()}
              </Card.Header>
              <Card.Meta>
                ID: {faker.random.number()}
              </Card.Meta>
              <Card.Description>
                <p>IX Value <strong>1999</strong></p>
                <p>Cash Left <strong>50.00</strong></p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>Won Items: </p>
              <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
              <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
              <Image avatar src={`/img/${Math.floor(Math.random() * 6)}.png`} />
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Empty
              </Card.Header>
              <Card.Meta>
                ID: 0
              </Card.Meta>
              <Card.Description>
                <p>IX Value <strong>0</strong></p>
                <p>Cash Left <strong>0</strong></p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>Won Items: </p>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Empty
              </Card.Header>
              <Card.Meta>
                ID: 0
              </Card.Meta>
              <Card.Description>
                <p>IX Value <strong>0</strong></p>
                <p>Cash Left <strong>0</strong></p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>Won Items: </p>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Empty
              </Card.Header>
              <Card.Meta>
                ID: 0
              </Card.Meta>
              <Card.Description>
                <p>IX Value <strong>0</strong></p>
                <p>Cash Left <strong>0</strong></p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <p>Won Items: </p>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    );
  }
}

export default Players;