import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Router} from 'react-router'
import './index.css';
import App from './App';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
ReactDOM.render((
    <Router history={history}>
        <App/>
    </Router>

), document.getElementById('root'));