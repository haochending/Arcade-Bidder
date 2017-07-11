import React, { Component } from 'react';
import { Button, Icon, Header, Image, Modal, Form, Select } from 'semantic-ui-react';

const PLAYER_NUMBER_OPTIONS = [{key: 4, value: 4, text: '4 Players'}, {key: 5, value: 5, text: '5 Players'}, {key: 6, value: 6, text: '6 Players'}, {key: 7, value: 7, text: '7 Players'}, {key: 8, value: 8, text: '8 Players'}];
const GAME_MODE_OPTIONS = [{key: '0', value: '0', text: 'Arcade'}, {key: '1', value: '1', text: 'Second Price', disabled: true}];
const TIME_OPTIONS = [{key: '0', value: '0', text: 'Random', disabled: true}, {key: '15', value: '15 Seconds', text: '15 Seconds'}, {key: '30', value: '30', text: '30 Seconds', disabled: true}, {key: '60', value: '60', text: '60 Seconds', disabled: true}];

class NewRoom extends Component {
  render() {
    return (
        <Modal trigger={        
            <Button animated color='blue' className='create-room'>
                <Button.Content visible>Create a Room</Button.Content>
                <Button.Content hidden>
                    <Icon name='right arrow' />
                </Button.Content>
            </Button>
        }>
            <Modal.Header>Create a new room</Modal.Header>
            <Modal.Content>
            <Form>
                <Form.Field>
                    <label>Room Name</label>
                    <input placeholder='Room Name' />
                </Form.Field>
                <Form.Field>
                    <label>Number of Players</label>
                    <Select placeholder='Select number of players' options={PLAYER_NUMBER_OPTIONS} />
                </Form.Field>
                <Form.Field>
                    <label>Game Mode</label>
                    <Select placeholder='Select game mode' options={GAME_MODE_OPTIONS} />
                </Form.Field>
                <Form.Field>
                    <label>Time</label>
                    <Select placeholder='Select time for each round' options={TIME_OPTIONS} />
                </Form.Field>
            </Form>
            </Modal.Content>
            <Modal.Actions>
            <Button color='red' inverted>
                <Icon name='remove' /> Cancel
            </Button>
            <Button color='green' inverted>
                <Icon name='checkmark' /> Create
            </Button>
            </Modal.Actions>
        </Modal>
    );
  }
}

export default NewRoom;