import React, { Component } from 'react';
import { Project, ProjectTitle } from '../../components';

class GarageStatus extends Component {
  render() {
    return (
      <Project background='var(--palette-background)'>
        <header>
          <ProjectTitle url='https://code.osu.edu/buckeye-oasis/garage-status' color='var(--palette-background)'>Garage Status</ProjectTitle>
          
          <p>This is normal text.</p>
        </header>

      </Project>
    );
  }
}

export default GarageStatus;