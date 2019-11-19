import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='navbar'>
            <h1 className='navbar-brand'>Bucket List</h1>
            <nav>
                <NavLink className='nav-link' to='/'>My Bucket Lists</NavLink>
                <NavLink className='nav-link' to='/create'>Create a Bucket List</NavLink>
            </nav>
            <Link to='/' className='nav-signout'>Sign out</Link>
        </header>
    )
}

export default Header