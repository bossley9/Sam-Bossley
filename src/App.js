import React, { Component } from 'react';
import { GarageStatus, Pylon } from './site';

class App extends Component {
  render() {
    return (
      <div className='App'>

        <GarageStatus />
        <Pylon />

      </div>
    );
  }
}

export default App;
