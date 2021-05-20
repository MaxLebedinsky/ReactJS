import React, { useState } from "react";
import { List, ListItem, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { addChat } from "../../store/chats/actions";

export const ChatList = () => {
    const chats = useSelector(state => state.chats.chatList);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleAddChat = () => {
        if (value) {
            dispatch(addChat({ Name: value, Id: String(Date.now()) }));
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