import React from 'react'
import Header from "./Header";
import Hero from "./Hero";
import Specials from "./Specials"
// import Footer from "./Components/Footer";

function Homepage() {
  return (
    <>
        <Header />
        {/* Hero Section */}
        <Hero />
        {/* Specials Section */}
        <Specials />
    </>
  )
}

export default Homepage