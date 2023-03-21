import React from 'react'
import image from '../Assets/images/restaurantfood.jpg';
import { Link } from 'react-router-dom';
import "./Hero.css";

function Hero() {
    return (
        <>
            <main>
                <div className='left-side'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p> We are a family owned <br /> Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button> <Link id="link" to="/booking">Book a Table Online</Link></button>
                </div>

                <div className="right-side">
                    <img src={image} alt="heroImage" />
                </div>
            </main>
        </>
    )
}

export default Hero