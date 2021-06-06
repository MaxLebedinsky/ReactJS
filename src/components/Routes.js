import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Profile } from './Profile';
import { MessageField } from './MessageField';
import { Header } from './Header';
import { ChatList } from './ChatList';
import { Articles } from './Articles';
import { Gallery } from './Gallery';
import Login from './Login';
import Chat from './Chat';
import SignUp from './SignUp';
import PrivateRoute from '../hocs/PrivateRoute';
import PublicRoute from '../hocs/PublicRoute';
import { auth } from '../services/firebase';
import InstallPopup from './InstallPopup';

export const Routes = () => {
    const [loading, setLoading] = useState(false);
    const [authed, setAuthed] = useState(false);
    useEffect (() => {
        auth().onAuthStateChanged(user => {
            if (user) {
                setAuthed(true);
                setLoading(false);
            } else {
                setAuthed(false);
                setLoading(false);
            }
        })
    });
    return loading === true ? (
        <h3>Loading...</h3>
    ) : (
        <BrowserRouter>
            <Header />
            <InstallPopup />
            <div className="layout">
                <Switch>
                    <Route exact path="/">
                        <ChatList />
                    </Route>

                    <PrivateRoute path="/chat" authenticated={authed} component={Chat} />
                    <PublicRoute path="/signup" authenticated={authed} component={SignUp} />
                    <PublicRoute path="/login" authenticated={authed} component={Login} />

                    <Route path="/chats/:chatId?">
                        <MessageField />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/articles">
                        <Articles />
                    </Route>
                    <Route exact path="/gallery">
                        <Gallery />
                    </Route>
                    <Route path="*">
                        <div>Page 404</div>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}