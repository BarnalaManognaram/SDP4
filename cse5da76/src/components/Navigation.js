import React from 'react';
import './App.css'
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
      <div class="header">
 
      <div class="header-right">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/monuments">monuments</NavLink>
          <NavLink to="/dances">dances</NavLink>
          <NavLink to="/emperors">emperors</NavLink>
          <NavLink to="/food">food</NavLink>
         
       </div>
       </div>
       /*
        <div class="header">
 
        <div class="header-right">
          <a  class="active" href="/">Home</a>
           <a  href="/monuments">monuments</a>
           <a href="#about">dances</a>
           <a href="#about">emporers</a>
           <a href="#about">food cultures</a>
          </div>
    </div>*/
    );
}
 
export default Navigation;