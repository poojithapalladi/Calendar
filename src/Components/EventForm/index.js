import React,{useState} from "react"
import './index.css'

const EventForm=({SelectedDate,onSubmit})=>{
const [title,setTitle]=useState(',')
const [category,setCategory]=useState(',')

const handleSubmit=(event)=>{
event.preventDefault();
onSubmit({id:Date.now(),date:SelectedDate,title,category});
}

return (
    <div className="modal">
        <form onSubmit={handleSubmit}>
    <label htmlFor="eventTitle">Event Title:</label>
    <input id="eventTitle" value={title} onChange={(event) => setTitle(event.target.value)} />
    
    <label htmlFor="category">Category:</label>
    <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
    </select>
    
    <button type='submit'>Save Event</button>
</form>

     </div>
)
}
export default EventForm 
