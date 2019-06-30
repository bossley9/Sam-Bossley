import React from 'react';
import { Type } from '../../components';
import modules from './Menu.module.scss';

class Menu extends React.Component {
  render() {
    return (
      <nav className={`${modules.menu}`}>
        {/* resume(paper?), linkedin, instagram, github, soundcloud */}
        <Type variant='subtitle4'>Sam Bossley</Type>
      </nav>
    );
  }
}

export default Menu;