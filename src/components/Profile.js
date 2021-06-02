import React from 'react';
import { useState } from 'react';
import { changeName } from '../store/profile/actions';
import { useSelector, useDispatch } from 'react-redux';

export const Profile = () => {
    const [nameValue, setNameValue] = useState(''); 
    const [surnameValue, setSurnameValue] = useState('');
    const name = useSelector(state => state.profile.name);
    const surname = useSelector(state => state.profile.surname);
    
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        setNameValue(event.target.value);
    }

    const handleSurnameChange = (event) => {
        setSurnameValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nameValue);
        dispatch(changeName(nameValue, surnameValue));
        setNameValue('');
        setSurnameValue('');
    }

    return (
        <div className="profile">
            <h3>Profile</h3>
            <br/>
            <div>Name: <span>{name}</span></div>
            <div>Surname: <span>{surname}</span></div> <br/>
            <form onSubmit={handleSubmit}>
                <input type="text" value={nameValue} onChange={handleNameChange} placeholder="Your name"/> <br/>
                <input type="text" value={surnameValue} onChange={handleSurnameChange} placeholder="Your surname"/> <br/>
                <input type="submit" />
            </form>
        </div>
    )
}