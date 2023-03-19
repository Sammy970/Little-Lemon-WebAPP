import React from 'react'
import Card from './Card'
import './Specials.css'

function Specials() {
    return (
        <>
            <div className='text'>
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className="cards">
                <Card
                    image={require("../Assets/images/bruchetta.png")}
                    title="Bruchetta"
                    price="$5.99"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                />

                <Card
                    image={require("../Assets/images/greek salad.jpg")}
                    title="Greek salad"
                    price="$12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                />

                <Card
                    image={require("../Assets/images/lemon_dessert.jpg")}
                    title="Lemon Desert"
                    price="$5.00"
                    description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                />
            </div>
        </>
    )
}

export default Specials