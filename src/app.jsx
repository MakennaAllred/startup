import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Login } from './login/login';
import {Events} from 'events/events';
import { NewEvent } from './newevent/newevent';
import {BrowserRouer, NavLink, Route, Routes} from 'react-router-dom';

function NotFound(){
    return <main className='containter-fluid bg-secondary text-center'> 404: Return to sender. Address unknown.</main>
}
export default function App() {
    return (
        <BrowserRouer>
    <div className='app'>
    <header>
        <h1>Cal Share</h1>
        <nav className="eventcontrols">
            <NavLink className="btn btn-primary" to="" role="button"> Home</NavLink>
            <NavLink class="btn btn-primary" to="events" role="button"> Events</NavLink>
            <NavLink class="btn btn-primary" t="proposal" role="button"> Add New Event</NavLink>
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
        {/* <div id ="logincontrols">
            <h1 style="justify-content: center;">Please Log in</h1>
        <label for="Name">Email</label> 
        <input type="text" id="name" placeholder="Your email here">
        <label for="Password">Password</label>
        <input type="password" id="Password" placeholder="password">
        <div>
        <button id="login" type="button" class="btn btn-outline-light" id="Login" onclick="loginUser()">Login</button>
        <button type="button" class="btn btn-outline-light" onclick="createUser()">Create</button>
        </div>

        <div id ="loggedincontrols">
            <h1>Log In Successful</h1>
            <div id="playeremail"></div>
            <button type="button" class="btn btn-primary" onclick="events()">Events</button>
            <button type="button" class="btn btn-primary" onclick="logout()">Log out</button>
            </div> */}
    

    <Events/>
    <NewEvent/>
    </main>
    <footer>
        <a class='footer' href="https://github.com/MakennaAllred/startup">Makenna Allred's Github</a>
    </footer>
</div>
</BrowserRouer>
)
}