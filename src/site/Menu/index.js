import React from 'react';
import { TextBox, Type } from '../../components';
import modules from './Menu.module.scss';

class Menu extends React.Component {
  render() {
    return (
      <nav className={`${modules.menu}`}>
        <TextBox className={`${modules.menuTextBox}`}>
          <div className={`${modules.menuContent}`}>
            <span>resume(paper?), linkedin, instagram, github, soundcloud</span>
            <Type variant='h3' className={`${modules.title}`}>Sam Bossley</Type>
          </div>
        </TextBox>
      </nav>
    );
  }
}

export default Menu;