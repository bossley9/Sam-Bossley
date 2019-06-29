import React, { Component } from 'react';
import PropTypes from 'prop-types';
import modules from './Grid.module.scss';

class Cell extends Component {
  render() {
    const { auto, children, className, lg, md, shrink, sm, ...props } = this.props;

    let classes = (typeof className === 'string') ? className.split(' ') : [];
    classes.push(`${modules.cell}`);

    const addBreakpoint = (k, v) => {
      if (v >= 0) {
        classes.push(`${modules[k + '-' + v]}`);
      }
    }

    if (auto) {
      classes.push(`${modules.auto}`);
    }

    if (shrink) {
      classes.push(`${modules.shrink}`);
    }

    addBreakpoint('sm', sm);
    addBreakpoint('md', md);
    addBreakpoint('lg', lg);

    return (
      <div {...props} className={classes.join(' ')}>{children}</div>
    );
  }
}

Cell.propTypes = {
  auto: PropTypes.bool,
  lg: PropTypes.number,
  md: PropTypes.number,
  shrink: PropTypes.bool,
  sm: PropTypes.number,
}

Cell.defaultProps = {
  auto: false,
  lg: -1,
  md: -1,
  shrink: false,
  sm: -1,
}

export default Cell;