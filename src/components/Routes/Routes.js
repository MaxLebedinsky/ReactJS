import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Profile } from '../Profile/Profile';
import { Layout } from '../Layout/Layout';
import { ChatList } from '../ChatList/ChatList';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Layout/>
                </Route>
                <Route exact path="/chats/">
                    <Layout/>
                </Route>
                <Route path="/chats/:chatId">
                    <Layout/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}