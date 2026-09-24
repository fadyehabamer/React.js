import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import "../App.css"

export default function NavBar() {
    return (
        <nav>
            <Link to='/'> LOGO </Link>
            <ul>
                <NavLink to="/about">  About </NavLink>
                <NavLink to="/services">Services</NavLink>
                {/* 
                    - Link , NavLink is doing the same function 

                    - But NavLink add Class "active"  to the Current Component
                    React Router v6 removed "exact": add "end" to a NavLink (e.g. to="/")
                    so it is only active on that exact path and not on its children

                    - to Change class "active" with any desired className (v6 removed activeClassName)
                        --> className={({ isActive }) => (isActive ? "BLABLA HERE" : "")}
                */}
            </ul>
        </nav>
    );
}
