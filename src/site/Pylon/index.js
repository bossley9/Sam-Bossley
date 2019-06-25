import React, { Component } from 'react';
import { Project, ProjectTitle, TextBox } from '../../components';

class Pylon extends Component {
  render() {
    return (
      <Project backgroundColor='gold'>
        <header>
          <ProjectTitle color='#ec3c37'>Pylon</ProjectTitle>
          <TextBox>
            A cross-platform React-Native mobile app designed to locate <abbr title='Americans with Disabilities Act'>ADA</abbr> accessible entrances on campus
          </TextBox>
        </header>
      </Project>
    );
  }
}

export default Pylon;