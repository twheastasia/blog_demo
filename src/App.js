import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Input} from 'antd';
import inputView from './editView'

const Search = Input.Search;

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Search
          placeholder="input search text"
          style={{ width: 200 }}
          onSearch={value => console.log(value)}
        />
        <inputView />
      </div>
    );
  }
}

export default App;
