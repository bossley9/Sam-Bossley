import React, { Component } from 'react';
import { About, Archery, GarageStatus, Leaderboards, Pylon } from './site';

class App extends Component {
  render() {
    return (
      <div className='App'>
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
