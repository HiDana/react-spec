import React, { Component } from 'react';
import Sidebar from './components/sidebar.js'
import Body from './components/body.js'
import './style/app.css'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './components/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';



class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, composeWithDevTools(applyMiddleware()))}>
        <div className="App">
          <div className="sidebar"><Sidebar /></div>
          <div className="body"><Body /></div>
        </div>
      </Provider>
    );
  }
}

export default App;
