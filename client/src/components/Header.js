import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <h1>Bucket List</h1>
            <nav>
                <Link to='/'>My Bucket Lists</Link>
                <Link to='/create'>Create a Bucket List</Link>
            </nav>
            <Link to='/' className='sign-out'>Sign out</Link>
        </header>
    )
}

export default Header