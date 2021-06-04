'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Routes } from './components/Routes';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js')
        .then(function (reg) {
            console.log('sw registration, scope: ', reg.scope);
        })
        .catch(function (error) {
            console.log('sw registration failed, error: ', error);
        })
}

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Routes />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);



