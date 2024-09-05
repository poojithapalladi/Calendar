 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EventProvider } from './context/EventContext'; 
import CalendarView from './Components/CalendarView'; 
import EventDetails from './Components/EventDetails'; 

const App = () => {
    return (
        <EventProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<CalendarView />} />
                    <Route path='/event/:id' element={<EventDetails />} />
                </Routes>
            </BrowserRouter>
        </EventProvider>
    );
}

export default App;
