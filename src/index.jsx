'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Routes } from './components/Routes/Routes';
import { store } from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);



