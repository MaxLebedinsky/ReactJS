import React from "react";
import { Header } from '../Header/Header';
import { MessageField } from '../MessageField/MessageField';
import { ChatList, chats } from '../ChatList/ChatList';
import { useParams } from 'react-router-dom';

export const Layout = () => {
    const params = useParams();
    const { chatId } = params;
    let chatName;
    // чтобы передать в MessageField пропсом имя чата,
    // находим его в массиве чатов
    if (chatId) { chatName = chats.find(chat => chat.Id === chatId).Name }

    return (
            <div className="layout">
                <Header/>
                <div className="layout-content">
                    
                    <ChatList className="chat-list"/>
                    {chatId && <MessageField 
                                    chatIdProp={chatId} 
                                    chatNameProp={chatName} 
                                    className="message-field"/>}
                </div>
            </div>
    )
}