import React from "react";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

export const Header = () => {
    const name = useSelector(state => state.profile.name);
    const surname = useSelector(state => state.profile.surname);
  return (
                 <div className="header">
                     <div className="header-left">
                        <Link to="/" className="header-link">Home</Link>
                        <Link to="/articles" className="header-link">Articles</Link>

                    </div>
                    <div className="header-right">
                        {/* Если есть имя или фамилия, выводим приветствие */}
                        {(name || surname) && <span>Hello, {name} {surname}!</span>}
                        <Link to="/profile" className="header-link">Profile</Link>
                    </div>
                 </div>
    )
}