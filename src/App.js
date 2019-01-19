import React, { Component } from 'react';
import './App.css';

import MyHeader from './components/MyHeader'
import MainContent from './components/MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader />
        <MainContent />
      </div>
    );
  }
}

export default App;
