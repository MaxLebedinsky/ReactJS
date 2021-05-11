import React from "react";
import { Header } from '../Header/Header';
import { MessageField } from '../MessageField/MessageField';
import { ChatList } from '../ChatList/ChatList';
import { AUTHORS } from '../../utils/constants';

const sourceMessages = [
    { text: 'Hello!', author: AUTHORS.USER },
    { text: 'How are you?', author: AUTHORS.ROBOT }
];

export class Layout extends React.Component {
    render () {
        return (
            <div className="layout">
                <Header/>
                <div className="layout-content">
                    <ChatList className="chat-list"/>
                    <MessageField messages={sourceMessages} className="message-field"/>
                </div>
            </div>
        )
    }
}