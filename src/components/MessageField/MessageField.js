import React, { useEffect, useState, useCallback }  from "react";
import { Message } from "../Message/Message";
import { AUTHORS, ROBOT_MESSSAGE } from "../../utils/constants";
import { Form } from "../Form/Form";
import '../../styles/styles.css';

const sourceMessages = {
    chat1: [{ text: 'Hello!', author: AUTHORS.USER },
    { text: 'How are you?', author: AUTHORS.ROBOT }
    ],
    chat2: [{ text: 'Aloha!', author: AUTHORS.USER },
    { text: 'Namaste!', author: AUTHORS.ROBOT }
    ],
    chat3: [{ text: 'Hola!', author: AUTHORS.USER },
    { text: 'Hola mi Jefe!', author: AUTHORS.ROBOT }
    ],
}

export const MessageField = (props) => {
    const [messages, setMessages] = useState(sourceMessages);
    const chatId = props.chatIdProp;

    const handleAddMessage = useCallback (
        (newMessage) => {
    // если сообщение не пустое, добавляем его в чат
                        if (newMessage.text.length) {
                            setMessages((prevMessages) => ({
                                ...prevMessages, 
                                [chatId]:[...prevMessages[chatId], newMessage],
                                }))
                            }
            },
            [chatId]
    );

    useEffect( () => {
        const lastMessage = messages[chatId][messages[chatId].length - 1];

        if (lastMessage.author === AUTHORS.USER) {
            handleAddMessage({author: AUTHORS.ROBOT, text: ROBOT_MESSSAGE});
        }

    }, [messages]);

    return (
        <div className="message-field">
            <h3>{props.chatNameProp}</h3>
            {messages[chatId].map((mess, index) => <Message key={index} messageProp={mess}/>)}
            <Form onAddMessage={handleAddMessage}/>
        </div>
    );
}