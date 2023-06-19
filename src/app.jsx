import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div class='app'>
    <header>
        <h1>Cal Share</h1>
        <!--this is for the buttons at the top of the page to navigate through app-->
        <nav id="eventcontrols">
            <a class="btn btn-primary" href="index.html" role="button"> Home</a>
            <a class="btn btn-primary" href="events.html" role="button"> Events</a>
            <!-- <a class="btn btn-primary" href="calendar.html" role="button"> Calendar</a> -->
            <a class="btn btn-primary"href="proposal.html" role="button"> Add New Event</a>
        </nav>
    </header>
    <!--using main instead of body because it will be the main content of the webpage here-->
    <main>
        components go here
    </main>
    <footer>
        <a class='footer' href="https://github.com/MakennaAllred/startup">Makenna Allred's Github</a>
    </footer>
    </div>
    )
}