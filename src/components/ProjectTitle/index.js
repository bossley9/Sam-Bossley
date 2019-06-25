import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography as Type } from '../';
import './ProjectTitle.scss';

class ProjectTitle extends Component {
  render() {
    const { children, color, url } = this.props;

    return (
      <a className='hidden' href={url}>
        <Type variant='heading1' style={{ color }}>{children}</Type>
      </a>
    );
  }
}

ProjectTitle.propTypes = {
  color: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

ProjectTitle.defaultProps = {
  color: 'var(--palette-foreground)',
  url: '',
}

export default ProjectTitle;