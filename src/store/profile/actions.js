export const CHANGE_CHECKBOX = 'PROFILE::CHANGE_CHECKBOX';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';

export const changeName = (name, surname) => ({
    type: CHANGE_NAME,
    name: name,
    surname: surname
})