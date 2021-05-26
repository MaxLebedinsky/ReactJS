import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Profile } from './Profile';
import { MessageField } from './MessageField';
import { Header } from './Header';
import { ChatList } from './ChatList';
import { Articles } from './Articles';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className="layout">
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
                    <Route exact path="/articles">
                        <Articles />
                    </Route>
                    <Route path="*">
                        <div>Page 404</div>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}