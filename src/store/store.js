import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from './messages/reducer';
import { profileReducer } from './profile/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        chats: chatsReducer,
        messages: messagesReducer,
        profile: profileReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);
