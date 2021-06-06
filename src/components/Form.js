import React, { useState, useRef, useEffect } from 'react';
import { AUTHORS, theme } from '../utils/constants';
import { TextField, Button, makeStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import { withTheme } from '@material-ui/styles';
// import { TextField, Button, Icon, makeStyles } from '@material-ui/core';

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

export const Form = ({ onAddMessage }) => {
    const classes = useStyles();
    const [text, setText] = useState('');
    const input = useRef();

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddMessage({author: AUTHORS.USER, text: text});
        setText('');
    }

    useEffect( () => {
    // ставим фокус на инпут при каждом рендере формы
        input.current.focus();
    });

    return (
        <form className="form" onSubmit={handleSubmit}>
            <ThemeProvider theme={theme}>
                <TextField
                    id="standard-multiline-flexible"
                    multiline
                    value={text}
                    onChange={handleChange}
                    label="type your message"
                    inputRef={input}
                    variant="outlined"
                    className={classes.textField}
                />
                <Button 
                    endIcon={<SendIcon/>} 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    size="small"
                    fullWidth={false}
                    className={classes.button}
                    >
                    Send
                </Button>
            </ThemeProvider>
        </form>
    );
}