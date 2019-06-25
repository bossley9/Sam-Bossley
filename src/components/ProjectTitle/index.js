import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AH, Type } from '../';

class ProjectTitle extends Component {
  render() {
    const { children, color, url } = this.props;
    let title = <Type variant='heading1' style={{ color }}>{children}</Type>;

    return url ? <AH url={url}>{title}</AH> : title;
  }
}

ProjectTitle.propTypes = {
  color: PropTypes.string,
  url: PropTypes.string,
}

ProjectTitle.defaultProps = {
  color: 'var(--palette-background)',
}

export default ProjectTitle;