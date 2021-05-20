import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Profile } from '../Profile/Profile';
import { MessageField } from '../MessageField/MessageField';
import { Header } from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import { AUTHORS, ROBOT_MESSSAGE } from "../../utils/constants";

const sourceChats = [
    {Id: 'chat1', Name: 'Chat #1'},
    {Id: 'chat2', Name: 'Chat #2'},
    {Id: 'chat3', Name: 'Chat #3'},
];

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

export const Routes = () => {
    const [chats, setChats] = useState(sourceChats);

    const [messages, setMessages] = useState(sourceMessages);

    const handleAddChat = useCallback((newChat) => {
        setChats(prevChats => [...prevChats, newChat]);
        setMessages((prevMessages) => ({
            ...prevMessages, [newChat.Id]:[]
        }));
        console.log(newChat);
        console.log(chats);
    }, [chats]);

    const handleAddMessage = useCallback (
        (newMessage, chatId) => {
        // если сообщение не пустое, добавляем его в чат
            if (newMessage.text.length) {
                setMessages((prevMessages) => ({
                    ...prevMessages, 
                    [chatId]:[...prevMessages[chatId], newMessage],
                    }))
                }
        }, []
    );

    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <ChatList chats={chats} onAddChat={handleAddChat}/>
                </Route>
                <Route path="/chats/:chatId?">
                    <MessageField 
                        chats={chats} 
                        onAddChat={handleAddChat}
                        messages={messages}
                        onAddMessage={handleAddMessage}
                        />
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}