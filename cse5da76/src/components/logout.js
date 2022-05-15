import React from 'react';
import './signup.css'
import { NavLink, Redirect } from 'react-router-dom';

const logout = () => {

    return(
      
<div>
    <h1>Logged out successfully</h1>
    <NavLink to="/login">login</NavLink>
</div>
    );
}

export default logout;