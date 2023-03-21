import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Logos/Logo.svg'
import "./Header.css"

function Header() {
    return (
        <>
            <header>
                <img className='logoImg' src={Logo} alt="logo" />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Menu</Link></li>
                        <li><Link href="#">Reservations</Link></li>
                        <li><Link href="#">Order Online</Link></li>
                        <li><Link href="#">Login</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header