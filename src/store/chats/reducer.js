import { AUTHORS } from '../../utils/constants';
import { ADD_MESSAGE, RESET_UNREAD_CHAT_ID } from '../messages/actions';
import { ADD_CHAT } from './actions';

const sourceChats = [
    {Id: 'chat1', Name: 'Chat #1'},
    {Id: 'chat2', Name: 'Chat #2'},
    {Id: 'chat3', Name: 'Chat #3'},
];

// добавляем к стейту чатов переменную для id чата с новым сообщением от робота
// этот чат при рендере компонента ChatList будем подсвечивать
const initialState = {
    chatList: [...sourceChats],
    unreadChatId: '',
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
        // если автор добавляемого сообщения – робот, то в id чата для подсветки 
        // записываем chatId из action.payload
        case ADD_MESSAGE: {
            return {
                ...state,
                unreadChatId: action.payload.message.author === AUTHORS.ROBOT ? action.payload.chatId : ''
            }
        }
        // сбрасываем unreadChatId с задержкой 2 сек, чтобы убрать подсветку
        case RESET_UNREAD_CHAT_ID: {
                // console.log('unreadChatId resetting...');
                return {
                    ...state,
                    unreadChatId: ''
                }
        }
        default: return state
    }
}