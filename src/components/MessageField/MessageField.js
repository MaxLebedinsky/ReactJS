import React, { useEffect, useState, useRef }  from "react";
import { Message } from "../Message/Message";
import { AUTHORS, ROBOT_MESSSAGE } from "../../utils/constants";
import { Form } from "../Form/Form";
import '../../styles/styles.css';

export const MessageField = (props) => {
    const [messages, setMessages] = useState(props.messages);   

    const handleAddMessage = (newMessage) => {
        if (newMessage.text.length) {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        }
    };

    useEffect( () => {
        const lastMessage = messages[messages.length - 1];

        if (lastMessage.author === AUTHORS.USER) {
            handleAddMessage({author: AUTHORS.ROBOT, text: ROBOT_MESSSAGE});
        }

    }, [messages]);

    return (
        <div className="message-field">
            {messages.map((mess, index) => <Message key={index} messageProp={mess}/>)}
            <Form onAddMessage={handleAddMessage}/>
        </div>
    );
}