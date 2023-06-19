import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Login } from './login/login';

export default function App() {
    return (
    <div className='app'>
    <header>
        <h1>Cal Share</h1>
        <nav className="eventcontrols">
            <a className="btn btn-primary" href="index.html" role="button"> Home</a>
            <a class="btn btn-primary" href="events.html" role="button"> Events</a>
            <a class="btn btn-primary"href="proposal.html" role="button"> Add New Event</a>
        </nav>
    </header>
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

    </main>
    <footer>
        <a class='footer' href="https://github.com/MakennaAllred/startup">Makenna Allred's Github</a>
    </footer>
</div>
)
}