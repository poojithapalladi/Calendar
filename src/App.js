import {BrowserRouter,Route,Routes} from 'react-router-dom' 

const App=()=>{
    return (
        <BrowserRouter>
         <Routes>
            <Route  path='/' element={<CalendarView/>}/>
            <Route path='/event/:id'  element={<EventDetails/>}/>
            </Routes>
         </BrowserRouter>

     )
}
export default App