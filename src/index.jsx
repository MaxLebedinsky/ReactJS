'use strict';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { MessageField } from './components/MessageField'

const sourceMessages = [
    { text: 'Hello!', author: 'user' },
    { text: 'How are you?', author: 'user' }
];

ReactDOM.render(
    <MessageField messages={sourceMessages} />,
    document.getElementById('root')
);



