import React, { Component } from 'react';
import { Cell, Grid, Project, ProjectTitle, TextBox } from '../../components';
import modules from './Pylon.module.scss';

class Pylon extends Component {
  render() {
    return (
      <Project backgroundColor='#ffda10'>
        <header>
          <ProjectTitle color='#ec3c37' url='https://github.com/4lefac/Pylon'>Pylon</ProjectTitle>
          <TextBox>
            A cross-platform React-Native mobile app designed to locate <abbr title='Americans with Disabilities Act'>ADA</abbr> accessible entrances on campus
          </TextBox>
        </header>
        <div className='container'>
          <Grid className={`${modules.dashboard}`}>
            <Cell sm={4} md={2} lg={2}>
            </Cell>
            <Cell sm={8} md={4} lg={4}>
            </Cell>
            <Cell sm={0} md={3} lg={3}>
            </Cell>
            <Cell sm={0} md={3} lg={3}>
            </Cell>
            <Cell sm={6} md={3} lg={3}>
            </Cell>
            <Cell sm={6} md={3} lg={3}>
            </Cell>
            <Cell sm={12} md={6} lg={6}>
            </Cell>
          </Grid>
        </div>
      </Project>
    );
  }
}

export default Pylon;