import React from 'react';

export function Events() {
   //display users on events page of logged in users
   const [users, setUsers] = React.useState([]);
   const [events, setEvents] = React.useState([]);
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
                   <li key={i}> {users.name[i]}</li>
               );
           }
       } else{
           userslist.push(
           <li>No users logged in</li>
           );
       }

//        // display my events on the events page
       
       React.useEffect(() => {
           let user = localStorage.getItem('userName');
           fetch(`/api/events/${user}`)
           .then((response) =>response.json())
           .then((events) => {
                console.log(events);
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
       console.log(events.length);
       if(events.length){
        for (const [i, event] of events.entries()){
            eventslist.push(
             <li key={i}> {event.eventname} is happening at {event.eventtime}</li>
        )}
       }
    

    return (
    <main>
        <div className="container text-center">
            <div className="row">
              <div className="col">
                <h3>Users</h3>
                <ul id="loggedusers"> {userslist}</ul>
              </div>
              <div className="col">
                <h3>My Events</h3>
                  <ul id ="myevents"> {eventslist} </ul>
              </div>
              <div className="col">
                <h3>Latest Events</h3>
                <ul id="Latestlist"></ul>
              </div>
            </div>
          </div>        
        </main>
    );
}