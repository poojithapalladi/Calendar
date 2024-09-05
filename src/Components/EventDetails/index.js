 import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';
import { EventContext } from '../../context/EventContext'; 

const EventDetails = () => {
    const { id } = useParams();
    const { events } = useContext(EventContext); 

    const event = events.find((event) => event.id === Number(id));

    if (!event) {
        return <p>Event not found</p>;
    }

    return (
        <div className='event-details'>
            <h1>{event.title}</h1>
            <p>{new Date(event.date).toLocaleDateString()}</p> 
            <p>{event.category}</p>
        </div>
    );
}

export default EventDetails;
