import React, { useEffect, useState } from "react";
import { List, ListItem, TextField, Button, makeStyles, ThemeProvider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { addChat } from "../store/chats/actions";
import { theme } from "../utils/constants";

const useStyles = makeStyles(() => ({
    textField: {
        backgroundColor: 'white',
        marginTop: '15px',
        // paddingTop: '20px',
    },
    button : {
        marginTop: '20px',
    },
}));

export const ChatList = () => {
    const classes = useStyles();
    const chats = useSelector(state => state.chats.chatList);
    const messages = useSelector(state => state.messages.messagesList);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const unreadChatId = useSelector(state => state.chats.unreadChatId);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleAddChat = () => {
        if (value) {
            dispatch(addChat({ Name: value, Id: String(Date.now()) }));
        };
        setValue('');
    };
    // если unreadChatId не сброшен, задаём имя добавляемого класса как 'unread' 
    const unreadClass = (unreadChatId) ? 'unread' : '';
    
    return(
        <div className="chat-list">
            <h3>Chat list</h3>
            <ThemeProvider theme={theme}>
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
                {/* <TextField value={value} onChange={handleChange}/> */}
                <TextField
                        // id="standard-multiline-flexible"
                        multiline
                        value={value}
                        onChange={handleChange}
                        label="new chat"
                        variant="outlined"
                        size="small"
                        className={classes.textField}
                    />
                <Button 
                    onClick={handleAddChat}
                        // endIcon={<SendIcon/>} 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                        size="small"
                        fullWidth={false}
                        className={classes.button}
                        >
                        Add chat
                </Button>
                </ThemeProvider>
            {/* <Button onClick={handleAddChat}>Add Chat</Button> */}
        </div>
    );
}

