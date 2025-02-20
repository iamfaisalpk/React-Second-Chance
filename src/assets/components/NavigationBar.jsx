import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../components/'

const NavigationBar = () => {
return (
    <>
        <header className={classes.header}>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Product</Link></li>
                </ul>
            </nav>
        </header>
    </>
)
}

export default NavigationBar;
