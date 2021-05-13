import React, { useEffect, useState, useCallback }  from "react";
import { Message } from "../Message/Message";
import { AUTHORS, ROBOT_MESSSAGE } from "../../utils/constants";
import { Form } from "../Form/Form";
import '../../styles/styles.css';

const sourceMessages = {
    chat1: [{ text: 'Hello!1', author: AUTHORS.USER },
    { text: 'How are you?1', author: AUTHORS.ROBOT }
    ],
    chat2: [{ text: 'Hello!2', author: AUTHORS.USER },
    { text: 'How are you?2', author: AUTHORS.ROBOT }
    ],
    chat3: [{ text: 'Hello!3', author: AUTHORS.USER },
    { text: 'How are you?3', author: AUTHORS.ROBOT }
    ],
}

export const MessageField = (props) => {
    const [messages, setMessages] = useState(sourceMessages);
    const chatId = props.chatIdProp;

    const handleAddMessage = useCallback (
        (newMessage) => {
                setMessages((prevMessages) => ({
                    ...prevMessages, 
                    [chatId]:[...prevMessages[chatId], newMessage],
                }))
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
            <h3>{chatId}</h3>
            {messages[chatId].map((mess, index) => <Message key={index} messageProp={mess}/>)}
            <Form onAddMessage={handleAddMessage}/>
        </div>
    );
}