import React from "react";
import { List, ListItem } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const chats = [
    {Id: 'chat1', Name: 'Chat 1'},
    {Id: 'chat2', Name: 'Chat 2'},
    {Id: 'chat3', Name: 'Chat 3'},
];

export class ChatList extends React.Component {
    render() {
        return(
            <div className="chat-list"><h2>Chat list</h2>
            <List>
                {chats.map(chat => 
                    <ListItem key={chat.Id}>
                        <Link to={`chats/${chat.Id}`}>{chat.Name}</Link>
                    </ListItem>)}
            </List>
                
            </div>
        )
    }
}