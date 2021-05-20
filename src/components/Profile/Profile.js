import React from 'react';
import { useState } from 'react';
import { store } from '../../store/store';
import { Header } from '../Header/Header';
import { changeCheckbox, changeName } from '../../store/profile/actions';
import {useSelector, useDispatch } from 'react-redux';

export const Profile = () => {
    const [value, setValue] = useState(''); 
    const checked = useSelector(state => state.checked);
    const name = useSelector(state => state.name);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(changeCheckbox);
    }

    const handleFormChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(changeName(value));
        setValue('');
    }

    return (
        <div className="layout">
            {/* <Header/> */}
            <h3 className="profile">This is Profile page</h3>
            <div>Hello, {name}</div>
            <input 
                type="checkbox" 
                onChange={handleChange} 
                checked={checked}
                />
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleFormChange} />
                <input type="submit" />
            </form>
        </div>
    )
}