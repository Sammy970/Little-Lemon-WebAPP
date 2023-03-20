import React, { useState } from 'react'
import './BookingForm.css'


function BookingForm(props) {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('Birthday');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date);
        console.log(time);
        console.log(guests);
        console.log(occasion);
    }

    const handleDateChange = (e) => {
        e.preventDefault();
        setDate(e.target.value);
    }

    const handleTimeChange = (e) => {
        e.preventDefault();
        setTime(e.target.value);
    }

    const handleGuestsChange = (e) => {
        e.preventDefault();
        setGuests(e.target.value);
    }

    const handleOccasionChange = (e) => {
        e.preventDefault();
        setOccasion(e.target.value);
    }

    const options = props.availableTimes.map(time => <option key={time}>{time}</option>)

    return (
        <>
            <div className='forms' onSubmit={handleSubmit}>
                <form >
                    <label className="title" htmlFor="res-date">Choose Date</label>
                    <input type="date" id="res-date" onChange={handleDateChange} required />

                    <label className="title" htmlFor="res-time">Choose time</label>
                    <select id="res-time" onChange={handleTimeChange}>
                        {options}
                    </select>

                    <label className="title" htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleGuestsChange} required/>

                    <label className="title" htmlFor="occasion">Occasion</label>
                    <select id="occasion" onChange={handleOccasionChange}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>

                    <input className="submitButton" type="submit" value="Make Your reservation"></input>
                </form>
            </div>
        </>
    )
}

export default BookingForm