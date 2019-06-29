import React, { Component } from 'react';
import { Project, ProjectTitle, TextBox } from '../../components';

class Leaderboards extends Component {
  render() {
    return (
      <Project backgroundColor='#451daf'>
        <header>
          <ProjectTitle color='#0cbd42'>Leaderboards</ProjectTitle>
          <TextBox>
            An <abbr title='model-view-controller'>MVC</abbr>-driven API built with MySQL, Node and Sequelize.js
          </TextBox>
        </header>
      </Project>
    );
  }
}

export default Leaderboards;