import React, {useState,useContext} from "react";
import Calendar from "react-calendar" ;
import EventForm from '../EventForm';
import {EventContext} from '../../context/EventContext' 
import './calendarView.css'

const  CalendarView=()=>{
const {events,setEvents}=useContext(EventContext)
const [selectedDate,setSelectedDate]=useState(new Date());
const [isFormOpen,setIsFormOpen]=useState(false)

const handleDateClick=(date)=>{
setSelectedDate(date)
setIsFormOpen(true)
}

const handleEventSubmit=(newEvent)=>{
    const updatedEvents=[...events,newEvent];
    setEvents(updatedEvents);
    setIsFormOpen(false)

}
    return (
        <div> 
        <Calendar onClick={handleDateClick} value={selectedDate}/>
        {isFormOpen && (
<EventForm  onClick={handleEventSubmit}value={selectedDate}/>
        )}
        
        </div>
    )
}


export default CalendarView
