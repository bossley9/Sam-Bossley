import React from 'react';
import PropTypes from 'prop-types';
import modules from './AHidden.module.scss';

class AHidden extends React.Component {
  render() {
    const { children, url } = this.props;
    return (
      <a className={`${modules.hidden}`} href={url}>{children}</a>
    );
  }
}

AHidden.propTypes = {
  url: PropTypes.string.isRequired,
}

export default AHidden;