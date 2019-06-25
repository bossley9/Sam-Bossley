import React from 'react';
import PropTypes from 'prop-types';
import modules from './TextBox.module.scss';

class TextBox extends React.Component {
  render() {
    const { backgroundColor, children } = this.props;
    return (
      <div className={`${modules.textbox}`} style={{ backgroundColor }}>

        {children}

      </div>
    );
  }
}

TextBox.propTypes = {
  backgroundColor: PropTypes.string,
}

TextBox.defaultProps = {
  backgroundColor: 'var(--palette-background)',
}

export default TextBox;