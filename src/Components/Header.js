import React from 'react'
import Logo from '../Assets/Logos/Logo.svg'
import "./Header.css"

function Header() {
    return (
        <>
            <header>
                <img className='logoImg' src={Logo} alt="logo" />
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header