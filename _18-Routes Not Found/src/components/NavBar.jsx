import React from 'react';
import { Link } from 'react-router-dom';

import "../App.css"


export default function NavBar() {
    return (
        <nav>
            <Link to="/"> HOME </Link>
            <ul>
                <Link to="/about"> About </Link>
                <Link to="/services"> Services  </Link>
                <Link to="/users">Users</Link>
            </ul>
        </nav>
    )

}
