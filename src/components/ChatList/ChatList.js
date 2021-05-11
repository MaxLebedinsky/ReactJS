import React from "react";
import { List, ListItem } from '@material-ui/core';

const chats = [
    {chatId: 1, chatName: 'Chat 1'},
    {chatId: 2, chatName: 'Chat 2'},
    {chatId: 3, chatName: 'Chat 3'},
];

export class ChatList extends React.Component {
    render() {
        return(
            <div className="chat-list"><h2>Chat list</h2>
            <List>
                {chats.map(chat => <ListItem key={chat.chatId}>{chat.chatName}</ListItem>)}
            </List>
                
            </div>
        )
    }
}