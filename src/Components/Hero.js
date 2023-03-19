import React from 'react'
import image from '../Assets/images/restaurantfood.jpg';
import "./Hero.css";

function Hero() {
    return (
        <>
            <main>
                <div className='left-side'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p> We are a family owned <br /> Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Book Online</button>
                </div>

                <div className="right-side">
                    <img src={image} alt="heroImage" />
                </div>
            </main>
        </>
    )
}

export default Hero