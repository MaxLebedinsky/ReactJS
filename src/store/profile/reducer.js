import { CHANGE_CHECKBOX, CHANGE_NAME } from "./actions"

const initialState = {
    checked: false,
    name: '',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME: { 
            return {
                ...state,
                name: action.name,
                surname: action.surname
            };
        }
        default: 
            return state;
    }
}