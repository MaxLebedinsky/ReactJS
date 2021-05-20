import { ADD_CHAT } from './actions';

const sourceChats = [
    {Id: 'chat1', Name: 'Chat #1'},
    {Id: 'chat2', Name: 'Chat #2'},
    {Id: 'chat3', Name: 'Chat #3'},
];

const initialState = {
    chatList: [...sourceChats]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                chatList: [
                    ...state.chatList, action.payload
                ]
            }
        }
        default: return state
    }
}