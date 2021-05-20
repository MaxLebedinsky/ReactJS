import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Profile } from '../Profile/Profile';
import { MessageField } from '../MessageField/MessageField';
import { Header } from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import { AUTHORS, ROBOT_MESSSAGE } from "../../utils/constants";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <ChatList />
                </Route>
                <Route path="/chats/:chatId?">
                    <MessageField />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route path="*">
                    <div>Page 404</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}