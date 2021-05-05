import React from "react";

export class Message extends React.Component {
    render() {
        return (
            <>
                <div>Author: {this.props.messageProp.author}</div>
                <div>Text: {this.props.messageProp.text}</div>
                <br/>
            </>
            );
    }
}