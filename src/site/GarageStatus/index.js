import React, { Component } from 'react';
import { Project, ProjectTitle, TextBox } from '../../components';

class GarageStatus extends Component {
  render() {
    return (
      <Project backgroundColor='#7baaf7'>
        <header>
          <ProjectTitle color='#fb5d89'>Garage Status</ProjectTitle>
          <TextBox>
            A real-time analysis of The Ohio State University's parking garage availability using <abbr title="Amazon Web Services">AWS</abbr> Lambda, DynamoDB, and <abbr title="ECMAScript 6">ES6</abbr> Node 8.10
          </TextBox>
        </header>
      </Project>
    );
  }
}

export default GarageStatus;