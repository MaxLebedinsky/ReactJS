import { ADD_MESSAGE } from '../messages/actions';
import { ADD_CHAT } from './actions';

const sourceChats = [
    {Id: 'chat1', Name: 'Chat #1'},
    {Id: 'chat2', Name: 'Chat #2'},
    {Id: 'chat3', Name: 'Chat #3'},
];

const initialState = {
    chatList: [...sourceChats],
    unreadChatId: '',
}

export const chatsReducer = (state = initialState, action) => {
    // console.log('message added to chat: ', action.payload?.chatId)
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                chatList: [
                    ...state.chatList, action.payload
                ]
            }
        }

        case ADD_MESSAGE: {
            return {
                ...state,
                unreadChatId: action.payload.chatId
            }
        }
        default: return state
    }
}