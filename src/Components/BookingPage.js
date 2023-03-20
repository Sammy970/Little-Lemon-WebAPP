import React from 'react'
import BookingForm from './BookingForm'
import Header from './Header'

function BookingPage() {

    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    return (
        <>
            <Header />
            <BookingForm availableTimes = {availableTimes}/>
        </>
    )
}

export default BookingPage