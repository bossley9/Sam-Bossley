import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ThemeProvider } from './components';
import theme from './_theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();
