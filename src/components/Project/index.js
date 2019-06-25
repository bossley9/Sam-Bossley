import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Project.scss';

class Project extends Component {
  render() {
    const { background } = this.props;

    return (
      <section className='project' style={{ background }}>
        {this.props.children}
      </section>
    );
  }
}

Project.propTypes = {
  background: PropTypes.string.isRequired,
}

Project.defaultProps = {
  background: 'var(--palette-background)',
}

export default Project;