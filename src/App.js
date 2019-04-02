import React, { Component } from 'react';
import Dropdown from './components/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Dropdown />
      </div>
    );
  }
}