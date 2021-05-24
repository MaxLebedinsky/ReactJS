import React, { useEffect, useState } from "react";
import { List, ListItem, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { addChat } from "../../store/chats/actions";

export const ChatList = () => {
    const chats = useSelector(state => state.chats.chatList);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const unreadChatId = useSelector(state => state.chats.unreadChatId);
    const [unreadClass, setUnreadClass] = useState('unread');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleAddChat = () => {
        if (value) {
            dispatch(addChat({ Name: value, Id: String(Date.now()) }));
        };
        setValue('');
    };

    useEffect(() => {
        setTimeout(() => {
            setUnreadClass('');
        }, 2000);
    }, []);

    console.log(unreadChatId);
    if (unreadClass) {
        setTimeout(() => {
            setUnreadClass('');
        }, 2000);
    }

    return(
        <div className="chat-list">
            <h2>Chat list</h2>
            <List>
                {chats.map((chat) => (
                    <ListItem key={chat.Id}>
                        <Link to={`/chats/${chat.Id}`} 
                        className={`chat-list-link ${unreadChatId === chat.Id ? unreadClass : ''}`}>
                            {chat.Name}
                        </Link>
                    </ListItem>
                ))}
            </List>
            <TextField value={value} onChange={handleChange}/>
            <Button onClick={handleAddChat}>Add Chat</Button>
        </div>
    );
}