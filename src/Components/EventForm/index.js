import React,{useState} from "react"
import './EventForm.css'

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
            <label>Event Title:</label>
            <input value={title} onChange={(event)=>setTitle(event.target.value)}/>
       <label>Category:</label>
       <select value={category} onChange={(event)=>setCategory(event.target.value)}>
       <option value={work}>Work</option>
       <option value={personal}>Personal</option>
       </select>
       <button type='submit'>Save Event</button>
        </form>
    </div>
)
}
export default EventForm
