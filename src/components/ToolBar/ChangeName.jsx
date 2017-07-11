import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeUser } from '../../actions';
import { Button, Icon, Header, Image, Modal, Input } from 'semantic-ui-react';

let newName = '';

class ChangeName extends Component {
  handleNameChange = (e, { name }) => newName = name;

  render() {
    let name = this.props.user.name || 'Guest';

    return (
        <Modal trigger={        
                <Button content={name} icon='write' labelPosition='right' color='black'/>
            } size='small'>
            <Modal.Header icon='write' content='Change Your Name' ></Modal.Header>
            <Modal.Content>
                <label>New Name: </label>
                <Input placeholder='Your name here...' onChange={this.handleNameChange}/>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' inverted>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button color='green' inverted onClick={this.props.changeName}>
                    <Icon name='checkmark'/> Submit
                </Button>
            </Modal.Actions>
        </Modal>
    );
  }
}

function mapStateToProps (state) {
  return {user: state.user};
}

function mapDispatchToProps () {
    return {
        changeName: changeUser
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChangeName));
