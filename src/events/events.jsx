import React from 'react';

export function Events() {
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
    <main>
        <div className="container text-center">
            <div className="row">
              <div className="col">
                <h3>Users</h3>
                <div id="users"> {userslist}</div>
              </div>
              <div class="col">
                <h3>My Events</h3>
                  <div id ="myevents"> {eventslist} </div>
              </div>
              <div className="col">
                <h3>Latest Events</h3>
                <div id="eventList"></div>
              </div>
            </div>
          </div>        
        </main>
    );
}