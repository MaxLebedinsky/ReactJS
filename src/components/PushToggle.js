import { UnsubscribeSharp } from '@material-ui/icons';
import React from 'react';
import '../styles/styles.css';

export default class PushToggle extends React.Component {
    render() {
        return (
            <div className="push">
                <img className="push__image" src="../src/images/unsubscribed.png" alt="Push notifications"/>
            </div>
        )
    }
}