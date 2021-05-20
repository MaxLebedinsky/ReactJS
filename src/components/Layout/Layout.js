import React from "react";
import { Header } from '../Header/Header';
import { MessageField } from '../MessageField/MessageField';
import { ChatList, chatList } from '../ChatList/ChatList';
import { useParams, Redirect } from 'react-router-dom';

export const Layout = () => {
    // const params = useParams();
    // const { chatId } = params;
    // let chatName;
    // // чтобы передать в MessageField пропсом имя чата,
    // // находим его в массиве чатов
    // if (chatId) { chatName = chatList.find(chat => chat.Id === chatId)?.Name }

    // if(!chatId || !chatName) {
    //     return <Redirect to='/'/>
    // }

    return (
            <div className="layout">
                {/* <Header/> */}
{/*                 
                    
                    <ChatList className="chat-list"/>
                    {chatId && <MessageField 
                                    chatIdProp={chatId} 
                                    chatNameProp={chatName} 
                                    className="message-field"/>} */}
                
            </div>
    )
}