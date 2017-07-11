import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import ArcadeBidderApp from '../reducers';
import Landing from './Landing';
import Lobby from './Lobby';
import Game from './Game';
import Result from './Result';
import ToolBar from './ToolBar';
import { createSocket } from '../actions'
const io = require('socket.io-client');
const store = createStore(ArcadeBidderApp);

class App extends Component {

  constructor(props) {
    super(props);
    const socket = io.connect("http://localhost:2000");
    store.dispatch(createSocket(socket));
  }
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <ToolBar />
            <Route exact path="/" component={Landing}/>
            <Route path="/lobby" component={Lobby}/>
            <Route path="/game" component={Game}/>
            <Route path="/result" component={Result}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
