import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import {icons} from './assets/icons';

React.icons = icons;

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
