import React, { useState, useRef, useEffect } from 'react';
import { AUTHORS } from '../utils/constants';
import { TextField, Button, makeStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import { withTheme } from '@material-ui/styles';
// import { TextField, Button, Icon, makeStyles } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      primary: teal,
    },
  });

const useStyles = makeStyles(() => ({
    textField: {
        backgroundColor: 'white',
    }
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
                <br/>
                <Button 
                    endIcon={<SendIcon/>} 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    size="small"
                    fullWidth={false}>
                    Send
                </Button>
            </ThemeProvider>
        </form>
    );
}