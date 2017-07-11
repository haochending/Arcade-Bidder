import React, { Component } from 'react';
import { Segment, Statistic } from 'semantic-ui-react';

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 15};
  }

  componentDidMount() {
    let self = this;
    let id = setInterval(function(){
      if (self.state.count > 0) {
        self.setState({count: self.state.count - 1})
      }
    }, 1000);
  }

  render() {
    let timeout = this.props.timeout || 0;

    return (
      <Segment inverted>
        <Statistic inverted color='yellow' size='huge' label='Seconds Left' value={this.state.count} />
      </Segment>
    );
  }
}

export default CountDown;