import React from 'react';
import './App.css'
import { NavLink, Redirect } from 'react-router-dom';
 
const Navigation = () => {
    return (
      <div class="header">
 
      <div class="header-right">
     
          <NavLink to="/monuments">monuments</NavLink>
          <NavLink to="/dances">dances</NavLink>
          <NavLink to="/emperor">emperor</NavLink>
          <NavLink to="/food">food</NavLink>
          <NavLink to="/tourist">tourist</NavLink>
          <NavLink to="/packages">tourist packages</NavLink>
          <NavLink to="/logout">logout</NavLink>
          
        
       </div>
       </div>
      
    );
}
 
export default Navigation;