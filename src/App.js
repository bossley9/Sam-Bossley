import React, { Component } from 'react';
import { About, Archery, GarageStatus, Leaderboards, Menu, Pylon } from './site';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Menu />
        <GarageStatus />
        <Pylon />
        <Leaderboards />
        <Archery />
        <About />
      </div>
    );
  }
}

export default App;
