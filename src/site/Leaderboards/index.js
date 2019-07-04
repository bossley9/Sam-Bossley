import React, { Component } from 'react';
import { Project, ProjectTitle, TextBox } from '../../components';
import modules from './Leaderboards.module.scss';

class Leaderboards extends Component {
  render() {
    return (
      <Project backgroundColor='#451daf'>
        <header>
          <ProjectTitle color='#0cbd42'>Leader<br className={`${modules.hiddenOnSmall}`} />boards</ProjectTitle>
          <TextBox>
            An <abbr title='model-view-controller'>MVC</abbr>-driven API built with MySQL, Node and Sequelize.js
          </TextBox>
        </header>
      </Project>
    );
  }
}

export default Leaderboards;