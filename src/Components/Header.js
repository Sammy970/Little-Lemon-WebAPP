import React from 'react'
import Logo from "../Assets/Logos/Logo.svg"

function Header() {
    return (
        <>
            <header>
                <img src={Logo} alt="logo" />
            </header>
        </>
    )
}

export default Header