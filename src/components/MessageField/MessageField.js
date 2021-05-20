import React, { useEffect, useState, useCallback }  from "react";
import { Message } from "../Message/Message";
import { AUTHORS, ROBOT_MESSSAGE } from "../../utils/constants";
import { Form } from "../Form/Form";
import { ChatList } from '../ChatList/ChatList';
import { useParams, Redirect } from 'react-router-dom';
import '../../styles/styles.css';

export const MessageField = ({ messages, onAddMessage, chats, onAddChat }) => {

    const params = useParams();
    const { chatId } = params;

    if (!chatId || !messages[chatId]) {
        return <Redirect to="/" />;
      }

    const handleAddMessage = useCallback(
        (newMessage) => {
            onAddMessage(newMessage, chatId);
        },
        [chatId, onAddMessage]
    );

    useEffect( () => {
        const lastMessage = messages[chatId]?.[messages[chatId]?.length - 1];

        if (lastMessage?.author === AUTHORS.USER) {
            handleAddMessage({author: AUTHORS.ROBOT, text: ROBOT_MESSSAGE});
        }
    }, [messages]);

    const chatName = chats.find(chat => chat.Id === chatId)?.Name

    return (
        <div className="message-field">
            <ChatList chats={chats} onAddChat={onAddChat}/>
            <div className="message-field-messages">
                <div>{chatName}</div>
                {messages[chatId].map((mess, index) => <Message key={index} messageProp={mess}/>)}
                <Form onAddMessage={handleAddMessage}/>
            </div>
        </div>
    );
}