import React from 'react'
import Logo from "../Assets/Logos/Logo.svg"

function Header() {
    return (
        <>
            <meta name="description" content="Little Lemon Restaurant is a mediterianian restaurant that serve class italian and mexican food with a liitle bit of an indian touch." />
            <meta name="og:title" content="Little Lemon" />
            <meta name="og:description" content="Little Lemon Restaurant is a mediterianian restaurant that serve class italian and mexican food with a liitle bit of an indian touch." />
            <meta name="og:image" content={Logo}/>

            <header>
                <img src={Logo} alt="logo" width="540px" />
            </header>
        </>
    )
}

export default Header