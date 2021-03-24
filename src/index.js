import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import ParfumstoreService from './services/parfumstore-service';
import { ParfumstoreServiceProvider } from './components/parfum-service-context';

import store from './store';

const parfumstoreService = new ParfumstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ParfumstoreServiceProvider value={parfumstoreService}>
                <Router>
                    <App/>
                </Router>
            </ParfumstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));