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
    //display users on events page of logged in users
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        fetch('/api/cookie')
            .then((response) => response.json())
            .then((users) => {
                setUsers(users);
                localStorage.setItem('users', JSON.stringify(users));
            })
            .catch(() => {
                const usersText = localStorage.getItem('users');
                if (usersText){
                    setUsers(JSON.parse(usersText));
                }
            });
        },[]);

        const userslist = [];
            if (users.length){
                for (const [i,users] of users.entries()){
                    userslist.push (
                    <li>{users.name[i]}</li>
                );
            }
        } else{
            userslist.push(
            <li>No users logged in</li>
            );
        }

        // display my events on the events page
        const[events, setEvents] = React.useState([]);

        React.useEffect(() => {
            let user = localStorage.getItem('userName');
            fetch(`/api/events/${user}`)
            .then((response) =>response.json())
            .then((events) => {
                setEvents(events);
                localStorage.setItem('events', JSON.stringify(events));
            })
            .catch(() => {
                const eventsText = localStorage.getItem('events');
                if (eventsText) {
                    setEvents(JSON.parse(eventsText));
                }
            });
        }, []);

        const eventslist = [];
        if (events.length) {
            for (const [i,events] of events.entries()){
                eventslist.push(
                    <li>{events[i]}</li>
                )
            }
        }
        
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