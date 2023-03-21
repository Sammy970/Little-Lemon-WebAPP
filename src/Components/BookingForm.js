import React, { useState } from 'react'
import './BookingForm.css'


function BookingForm(props) {

    const [formData, setFormData] = useState({
        date: '',
        time: '00:00',
        guests: '1',
        occasion: 'Birthday'
    })


    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
        props.dispatch({ type: 'UPDATE_TIMES', payload: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        props.submitForm(formData);
    }

    const currentDate = new Date().toISOString().split("T")[0]
    const options = props.availableTimes.map(time => <option key={time}>{time}</option>)

    return (
        <>
            <div className='forms' onSubmit={handleSubmit}>
                <form >
                    <label className="title" htmlFor="res-date">Choose Date</label>
                    <input type="date" id="res-date" name="date" value={formData.date} onChange={handleDateChange} required min={currentDate} />

                    <label className="title" htmlFor="res-time">Choose time</label>
                    <select id="res-time" name="time" value={formData.time} onChange={handleFormChange}>
                        {options}
                    </select>

                    <label className="title" htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleFormChange} required />

                    <label className="title" htmlFor="occasion">Occasion</label>
                    <select id="occasion" name="occasion" value={formData.occasion} onChange={handleFormChange}>
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