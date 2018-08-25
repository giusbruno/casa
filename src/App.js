import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs.js';
import Controlli from './components/controlli.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hd">
          <a className="App-title">Casa Bruno</a>
        </div>
        <Tabs />
      </div>
    );
  }
}

export default App;
