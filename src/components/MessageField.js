import React, { useEffect, useState, useCallback }  from "react";
import { Message } from "./Message";
import { AUTHORS, ROBOT_MESSAGE } from "../utils/constants";
import { Form } from "./Form";
import { ChatList } from './ChatList';
import { useParams, Redirect } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import '../styles/styles.css';
import { addMessage, addMessageWithThunk } from "../store/messages/actions";

export const MessageField = () => {
    const messages = useSelector(state => state.messages.messagesList);
    const chats = useSelector(state => state.chats.chatList);
    const dispatch = useDispatch();
    const params = useParams();
    const { chatId } = params;

    if (!chatId || !messages[chatId]) {
        return <Redirect to="/" />;
      }

    const handleAddMessage = useCallback(
        (newMessage) => {
            dispatch(addMessageWithThunk(newMessage, chatId));
        },
        [chatId, dispatch]
    );

    const chatName = chats.find(chat => chat.Id === chatId)?.Name

    return (
        <div className="message-field">
            <ChatList />
            <div className="message-field-messages">
                <div>{chatName}</div>
                {messages[chatId].map((mess, index) => <Message key={index} messageProp={mess}/>)}
                <Form onAddMessage={handleAddMessage}/>
            </div>
        </div>
    );
}