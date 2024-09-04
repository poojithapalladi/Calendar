import React from'react' 
import { useParams } from 'react-router-dom' 
import './EventDetails.css' 

const EventDetails=({events})=>{
    const {id}=useParams();
    const event=events.find((event)=>event.id===Number(id));
    
    if (!event){
        return <p>Event not found</p>
    }
    return (
        <div className='event-details'>
            <h1>{event.title}</h1>
            <p>{event.date.toLocalDateString()}</p>
            <p>{event.category}</p>
        </div>
    )

}
export default EventDetails
