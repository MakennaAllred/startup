import React from 'react';

export function Events() {
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