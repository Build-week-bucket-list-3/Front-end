import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='navbar'>
            <h1 className='navbar-brand'>Bucket List</h1>
            <nav>
                <Link className='nav-link' to='/bucketlists'>My Bucket Lists</Link>
                <Link className='nav-link' to='/bucketlist/new'>Create a Bucket List</Link>
            </nav>

            <Link to='/' className='nav-link'><img src='/images/icon-profile.svg' width='15px' />&nbsp;Login</Link>
        </header>
    )
}

export default Header