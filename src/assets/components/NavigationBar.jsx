import React from 'react'

const NavigationBar = () => {
return (
    <>
        <header>
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
