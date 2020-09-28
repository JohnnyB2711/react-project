import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router'
import './index.css';
import App from './App';
import {createBrowserHistory} from "history";
import {Provider} from 'react-redux'
import {store} from './store'
import '../src/localization/i18n';
import {I18nextProvider} from "react-i18next";
import i18n from '../src/localization/i18n'

const history = createBrowserHistory();
console.log(i18n);
ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <I18nextProvider i18n={i18n}>
                <App/>
            </I18nextProvider>
        </Router>
    </Provider>

), document.getElementById('root'));