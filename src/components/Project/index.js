import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Project.scss';

class Project extends Component {
  render() {
    const { backgroundColor } = this.props;

    return (
      <section className='project' style={{ backgroundColor }}>
        {this.props.children}
      </section>
    );
  }
}

Project.propTypes = {
  backgroundColor: PropTypes.string,
}

Project.defaultProps = {
  backgroundColor: 'var(--palette-background)',
}

export default Project;