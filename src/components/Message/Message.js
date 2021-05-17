import React from "react";
import { AUTHORS } from '../../utils/constants';
import '../../styles/styles.css';

export class Message extends React.Component {

    getMessageClassName = (author) => {
        return `message ${author === AUTHORS.ROBOT ? 'message-robot' : 'message-user'}`;
    }

    render() {
        return (
            <div className = {this.getMessageClassName(this.props.messageProp.author)}>
                <div className="message-author">{this.props.messageProp.author}:</div>
                <div className="message-text">{this.props.messageProp.text}</div>
            </div>
            );
    }
}