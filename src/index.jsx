'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Routes } from './components/Routes';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Routes />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);



