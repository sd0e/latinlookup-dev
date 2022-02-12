import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter style={{width: '100vw', height: '100vh'}}>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);