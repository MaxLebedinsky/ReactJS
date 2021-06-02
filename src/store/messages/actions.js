import { useState } from "react";
import { AUTHORS, ROBOT_MESSAGE } from "../../utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const RESET_UNREAD_CHAT_ID = 'RESET_UNREAD_CHAT_ID';

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message: newMessage,
        chatId
    },
});

export const resetUnreadChatId = () => ({
    type: RESET_UNREAD_CHAT_ID,
});

export const addMessageWithThunk = (newMessage, chatId) => (dispatch, getState) => {
    dispatch(addMessage(newMessage, chatId));

    if (newMessage.author !== AUTHORS.ROBOT) {
        setTimeout(() => {
            dispatch(addMessage({ text: ROBOT_MESSAGE, author: AUTHORS.ROBOT }, chatId));
            setTimeout(() => {
                dispatch(resetUnreadChatId());
            }, 2000);
        }, 2000);
    }
};