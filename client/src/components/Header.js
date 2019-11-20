import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='navbar'>
            <h1 className='navbar-brand'>Bucket List</h1>
            <nav>
                <Link className='nav-link' to='/bucketlists'>My Bucket Lists</Link>
                <Link className='nav-link' to='/bucketlist/create'>Create a Bucket List</Link>
            </nav>
            {/* {isAuthenticated ? <Link onClick={logout} to='/login' className='link' >Log Out</Link> } */}
            <Link to='/login' className='nav-link'>Login</Link>
        </header>
    )
}

export default Header