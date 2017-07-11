import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Dropdown, Icon, Menu, Image } from 'semantic-ui-react';
import ChangeName from './ChangeName';

class ToolBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { match, location, history } = this.props;

    return (
      <Menu stackable inverted>
        <Menu.Item
          name='back'
          onClick={() => {history.goBack()}}
        >
          <Icon name='arrow left' />
        </Menu.Item>

        <Menu.Item
          name='home'
          onClick={() => {history.push('/')}}
        >
          <Icon name='trophy' />
        </Menu.Item>

        <Menu.Item
          position='right'
          name='right'
        >
          <ChangeName />
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(ToolBar);
