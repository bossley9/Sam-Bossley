import React, { Component } from 'react';
import { Project, ProjectTitle, TextBox } from '../../components';

class Archery extends Component {
  render() {
    return (
      <Project backgroundColor='#1998cb'>
        <header>
          <ProjectTitle color='#a23700'>Archery</ProjectTitle>
          <TextBox>
            A virtual reality bow and arrow game written with Unreal Engine and C++
          </TextBox>
        </header>
      </Project>
    );
  }
}

export default Archery;