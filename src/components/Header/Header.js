import React from "react";
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render () {
        return(
                 <div className="header">
                    <Link to="/" className="header-link">Home</Link>
                    <Link to="/profile" className="header-link">Profile</Link>
                 </div>
        );
    }
}