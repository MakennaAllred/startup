import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Login } from './login/login';
import {Events} from './events/events';
import { NewEvent } from './newevent/newevent';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';

function NotFound(){
    return <main className='containter-fluid bg-secondary text-center'> 404: Return to sender. Address unknown.</main>
}



export default function App() {
    return (
        <BrowserRouter>
    <div className='app'>
    <header>
        <h1>Cal Share</h1>
        <nav className="eventcontrols">
            <NavLink className='nav-link' to=""> Home</NavLink>
            <NavLink className='nav-link' to="events"> Events</NavLink>
            <NavLink className='nav-link' to="proposal"> Add New Event</NavLink>
        </nav>
    </header>
    <Routes>
        <Route path='/' element = {<Login/>} exact />
        <Route path='/events' element = {<Events/>} />
        <Route path='/proposal' element = {<NewEvent/>} />
        <Route path='*' element = {<NotFound/>} />
    </Routes>
   <main>
    <Login/>
    <Events/>
    <NewEvent/>
    </main>
    <footer>
        <a className='footer' href="https://github.com/MakennaAllred/startup">Makenna Allred's Github</a>
    </footer>
</div>
</BrowserRouter>
)
}