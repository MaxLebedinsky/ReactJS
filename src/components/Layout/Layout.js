import React from "react";
import { Header } from '../Header/Header';
import { MessageField } from '../MessageField/MessageField';
import { ChatList } from '../ChatList/ChatList';
import { useParams } from 'react-router-dom';

export const Layout = () => {
    const params = useParams();
    console.log('layout params: ', params);
    const { chatId } = params;
    console.log('layout chatId: ', chatId);
    return (
            <div className="layout">
                <Header/>
                <div className="layout-content">
                    
                    <ChatList className="chat-list"/>
                    {chatId && <MessageField chatIdProp={chatId} className="message-field"/>}
                </div>
            </div>
    )
}