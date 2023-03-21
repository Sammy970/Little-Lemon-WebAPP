import React, { useReducer, useState } from 'react'
import { fetchAPI, submitAPI } from '../api'
import { useNavigate } from "react-router-dom";
import Header from './Header'
import BookingForm from './BookingForm'

function BookingPage() {

    // var availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const [date] = useState(new Date());

    function initializeTimes(date) {
        return fetchAPI(date);
    }

    function updateTimes(date) {
        const dateObj = new Date(date)
        return fetchAPI(dateObj)
        // var availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    }

    const navigate = useNavigate();
    function submitForm(formData) {
        const isSubmitted = submitAPI(formData);
        if (isSubmitted) {
            navigate("/confirmedTable");
        }
    }

    function reducer(state, action) {
        let newState
        switch (action.type) {
            case 'UPDATE_TIMES':
                const newDate = new Date(action.payload);
                newState = updateTimes(newDate)
                break;

            default:
                throw new Error()
        }
        return newState
    }

    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date));
    return (
        <>
            <Header />
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </>
    )
}

export default BookingPage