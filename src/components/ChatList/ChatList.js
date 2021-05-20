import React, { useState } from "react";
import { List, ListItem, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

// export const chatList = [
//     {Id: 'chat1', Name: 'Chat #1'},
//     {Id: 'chat2', Name: 'Chat #2'},
//     {Id: 'chat3', Name: 'Chat #3'},
// ];

export const ChatList = ({ chats, onAddChat }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleAddChat = () => {
        if (value) {
            onAddChat({ Name: value, Id: String(Date.now()) });
        };
        setValue('');
    };

    return(
        <div className="chat-list">
            <h2>Chat list</h2>
            <List>
                {chats.map((chat) => (
                    <ListItem key={chat.Id}>
                        <Link to={`/chats/${chat.Id}`} className="chat-list-link">{chat.Name}</Link>
                    </ListItem>
                ))}
            </List>
            <TextField value={value} onChange={handleChange}/>
            <Button onClick={handleAddChat}>Add Chat</Button>
        </div>
    );
}