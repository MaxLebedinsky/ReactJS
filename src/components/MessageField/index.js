import React, { useEffect, useState }  from "react";
import { Message } from "../Message";

const robotMessageText = "Robot's answer";

// на классовом компоненте

export class MessageField extends React.Component {
    state = {
        messages: this.props.messages,
        inputEl: null,
    }

    handleAddMessage = () => {
        // если пользователь что-то ввёл, добавляем это в массив сообщений
        if (this.state.inputEl.value) {
            this.setState(prevState => ({
                    messages: [...prevState.messages, {text: this.state.inputEl.value, author: 'user'}]
            }));
        }
    }

    componentDidMount() {
        // поскольку поле ввода появляется только после первого рендера,
        // берём этот элемент внутри DidMount
        this.state.inputEl = document.querySelector("input");
    }

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];
        if (lastMessage.author === 'user') {
            this.setState(prevState => ({
                messages: [...prevState.messages, {text: robotMessageText, author: 'robot'}]
            }))
        }
        this.state.inputEl.value = '';
    } 

    render() {
        return (
            <>
                {this.state.messages.map(mess => <Message messageProp={mess}/>)}
                <input type="text" placeholder="type your message" />
                <button onClick={this.handleAddMessage}>Add message</button>
            </>
        );
    }
}

// то же самое на ФУНКЦИОНАЛЬНОМ компоненте

// export const MessageField = (props) => {
//     const [messages, setMessages] = useState(props.messages);   
//     const [inputEl, setInputEl] = useState(null);

//     const handleAddMessage = () => {
//         if (inputEl.value) {
//             setMessages([...messages, {text: inputEl.value, author: 'user'}]);
//         }
//     };

//     useEffect( () => {
//         setInputEl(document.querySelector("input"));
//     }, []);

//     useEffect( () => {
//         const lastMessage = messages[messages.length - 1];
//         // чтобы не добавлять сообщение робота при первом рендере,
//         // сравниваем длины текущего и исходного массивов
//         if (!(messages.length === props.messages.length) && (lastMessage.author === 'user')) {
//             setMessages([...messages, {text: robotMessageText, author: 'robot'}]);
//             inputEl.value = '';
//         };   

//     });

//     return (
//         <>
//             {messages.map(mess => <Message messageProp={mess}/>)}
//             <input type="text" placeholder="type your message" />
//             <button onClick={handleAddMessage}>Add message</button>
//         </>
//     );
// }