import
// React,
{ Component } from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    this.createVariables = this.createVariables.bind(this);
    this.processVariables = this.processVariables.bind(this);
    this.applyThemeToDOM = this.applyThemeToDOM.bind(this);
  }

  createVariables(obj, prefix, infix) {
    let vars = [];

    for (let key in obj) {
      let thisPrefix = prefix + key;

      if (typeof obj[key] === 'object') {
        vars.push(...this.createVariables(obj[key], thisPrefix + infix, infix));
      } else {
        vars.push({ [thisPrefix]: obj[key] });
      }
        
    }

    return vars;
  }

  processVariables(varArr, func) {
    for (let v of varArr) {
      for (let key in v) {
        func(key, v[key]);
      }
    }
  }

  applyThemeToDOM(theme) {
    let cssVars = this.createVariables(theme, '--', '-');
    this.processVariables(cssVars, (k, v) => document.documentElement.style.setProperty(k, v));  
  }

  componentDidMount() {
    this.applyThemeToDOM(this.props.theme);
  }

  render() {
    return this.props.children;
  }

}

// PropTypes

ThemeProvider.propTypes = {
  // local: PropTypes.bool,
  theme: PropTypes.object,
}

ThemeProvider.defaultProps = {
  // local: false,
  theme: {      
    palette: {
      foreground: '#333',
      midground: '#777',
      background: '#fff',
      primary: {
        light: '#c2d9fd',
        main: '#7baaf7',
        dark: '#4285f4',
        contrastText: '#000',
      },
      secondary: {
        light: '#fb5d89',
        main: '#f50057',
        dark: '#cf0051',
        contrastText: '#000',
      },
      error: {
        light: '#FFC09F',
        main: '#FFA372',
        dark: '#FF8A4B',
        contrastText: '#000',
      },
    },
    typography: {
      fontFamily: {
        primary: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ].join(','),
      },
      fontSize: '14px',
    },
    spacing: '4rem',
    zIndex: {
      bar: 1100,
      modal: 1300,
    },
  },
}

export default ThemeProvider;