import { AUTHORS, ROBOT_MESSAGE } from "../../utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message: newMessage,
        chatId
    },
});

export const addMessageWithThunk = (newMessage, chatId) => (dispatch, getState) => {
    dispatch(addMessage(newMessage, chatId));

    if (newMessage.author !== AUTHORS.ROBOT) {
        setTimeout(() => {
            dispatch(addMessage({ text: ROBOT_MESSAGE, author: AUTHORS.ROBOT }, chatId));
        }, 1000);
    }
};