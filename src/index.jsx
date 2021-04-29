'use strict';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Задание 6* - на функциональном компоненте

// исходный массив сообщений
const messages = ['Hello!', 'How are you?'];

let inputEl = document.querySelector("input");

const MessageComponent = (props) => <div>{props.text}</div>

const MessageField = (props) => {
    // в текущее состояние для useState записываем исходный массив messages, 
    // передаваемый в компонент через props
    const [state, setState] = useState(props.messagesArr);

    const addMessage = () => {
        if (inputEl.value) {
            setState(state.concat([inputEl.value]));
            // по заданию надо не только вывести новое сообщение, 
            // но и добавить его в исходный массив, поэтому
            messages.push(inputEl.value);
        }
    };

    return (
        <div>
            {state.map(message => <MessageComponent text={message} />)}
            <button onClick={addMessage}>Add answer</button>
        </div>
    );
};

// то же задание НА КЛАССОВОМ КОМПОНЕНТЕ:

// const messageToAdd = 'I\'m fine';

// class MessageField extends React.Component {
//     state = {
//         value: this.props.messagesArr,
//     }

//     addMessage = () => {
//         this.setState(prevState => ({ value: prevState.value.concat([messageToAdd]) }))
//     }

//     render() {
//         return (
//             <div>
//                 { this.state.value.map(message => <div>{message}</div>)}

//                 <button onClick={this.addMessage}>Add message</button>
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <MessageField messagesArr={messages} />,
    document.getElementById('root')
);



