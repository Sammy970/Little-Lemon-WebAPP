import React from 'react'
import "./Card.css"

function Card(props) {
    return (
        <>
            <div className='card'>
                <img src={props.image} alt="image1" />
                <div className='dish-info'>
                    <div className='title'>
                        <h3>{props.title}</h3>
                        <p className='price'>{props.price}</p>
                    </div>
                    <p>{props.description}</p>

                    <span
                        role="button"
                        className='specials-btn'
                        aria-label="On Click"
                    >
                        Order a delivery
                    </span>
                </div>
            </div>
        </>
    )
}

export default Card