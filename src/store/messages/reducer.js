import { ADD_MESSAGE } from './actions';
import { ADD_CHAT } from '../chats/actions';
import { AUTHORS, ROBOT_MESSSAGE } from "../../utils/constants";

const sourceMessages = {
    chat1: [{ text: 'Hello!', author: AUTHORS.USER },
    { text: 'How are you?', author: AUTHORS.ROBOT }
    ],
    chat2: [{ text: 'Aloha!', author: AUTHORS.USER },
    { text: 'Namaste!', author: AUTHORS.ROBOT }
    ],
    chat3: [{ text: 'Hola!', author: AUTHORS.USER },
    { text: 'Hola mi Jefe!', author: AUTHORS.ROBOT }
    ],
}

const initialState = {
    messagesList: {...sourceMessages}
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [action.payload.chatId]: [
                        ...state.messagesList[action.payload.chatId],
                        action.payload.message
                    ]
                }
                
            };
        }
        case ADD_CHAT: {
            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [action.payload.Id]: []
                }
            };
        }
        default: return state;
    }
}