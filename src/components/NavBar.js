import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <div className='nav-grid'>
                <Link to='/'>
                    <div className='nav-link'>
                        HOME
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;