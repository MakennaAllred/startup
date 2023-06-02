# Startup Deliverable 

# Elevator Pitch
Sometimes planning events with friends can be hard. My application is going to be a combined calendar where users can log in, add friends, and invite those friends to calendar events. Say I want to set up a double date with my husband and another couple. Using my application, I can send a proposed event to everyone involved. Once they receive the request they can confirm it, deny it and offer an alternative, or simply deny it. Users will able to see what events they have confirmed or waht events they have and haven't confirmed. Additionally, I might allow the app to have a place where users can list what days/times during the week they are available so their friends can ask to schedule events during those times. I'm trying to keep it as simple as possible right now, but I think it will be useful!

# Proposed Photos of Application in Use
![Login page appearance](https://github.com/MakennaAllred/startup/blob/main/log%20in%20page.jpg?raw=true)
![Notification page appearance](https://github.com/MakennaAllred/startup/blob/main/notifications.jpg?raw=true)
![Calendar page appearance](https://github.com/MakennaAllred/startup/blob/main/calendar.jpg?raw=true)
![Proposal page appearance](https://github.com/MakennaAllred/startup/blob/main/proposal.jpg?raw=true)
# Key features
  - secure login
  - ability to accept or reject calendar invites
  - ability to propose new event invites
  - events that are accepted are stored and displayed as well as those that still need approval
  - calendar display
  - ability to list available times 
 
 # Technologies
  1. **HTML**: I will use correct HTML to have 4 structured pages. I will have a login page, a page with a calendar display that can alternate between monthly and weekly view, I'll have a notifications page for events that need to be confirmed that also displays a confirmation or denial of the users proposals with space to add new friends, and I'll have a page where users can create and propose new events.
  2. **CSS**: I'll use CSS to style the application so it looks aesthetically pleasing by using color themes to make the application look clean and cohesive, as well as display things in a calendar format. 
  3. **JavaScript**: I'll use JS for login authentication, approving or denying requests, and displaying notifications of proposed or accepted events.
  4. **Service**: I'll use service for login, retrieving approval or denial notifications, submitting approval/denial.
  5. **Database**: Store calendar events
  6. **Login**: Users will need to log in to propse/confirm events and add new friends. They can look up new friends by name or phone number (both will be required upon creating an account). Credentials will be stored securely in database
  7. **WebSocket**- As events are proposed and accepted notifcations will be broadcast to friends involved in the event
  8. **React**: I'll port the application to use React web framework as well! (I'm still learning what this means, but based off the startup example, I think I'll do something very similar to that)


# HTML Deliverables
1. I created the four outlined pages that I stated in my pitch. Those pages are login, notifications, propose an event, and calendar.
2. At the top of each page there are links to the other 3 pages so users can easily navigate between the different pages.
3. The point of this application is a shared calendar invite where people can propose and reject events or even counter offer events. I think I made this clear by having the calendar page appear as it almost will when it's finished.
4. I added an image of a calendar on the propose event page so I could meet the image requirement
5. On my index.html page there is a login option where users will need to login to access their calendar or propose an event
6. My database placeholder appears on the calendar page where events will show up on the specified days when accepted.
7. my Websocket placeholder is on my notifications page under what's new and proposed events. This is where interaction between friends will happen.
8. I will also access a third party data point by having holiday dates display in my calendar.


# CSS Deliverables
1. This was so difficult, but I'm so proud of how it turned out! I changed the color to a color palette I think is visually appealing.
2. I used multiple bootstrap elements including the navigation buttons on every page and the columns on the notifications page
3. I also included a font from Google!
4. Right now I have placeholders for user's name that will populate on the top of the calendar once a person signs in. I also will access a third party site so holidays will show up on my calendar.
5. I tried to implement flexing so my pages would be responsive to fitting all formats
6. I also tried to implement spacing between elements by adjusting the respective padding or margins so things fit nicely on the page. However, I struggled to adjust the spacing in between similar elements, like on the propose event page. I also want to adjust the frequency section so the checkboxes are side by side, but I couldn't figure out how to do that. I will continue to study it until I figure it out.
7. I'm super excited continually refine my work.

# Changes
After talking with Professor Jensen I'm going to shift the idea of my web application to make it a little more feasible. Here are the changes I'm making:
  1. I'm dropping the calendar page. I'm focusing on the functionality of the other pages, and will come back to it if time permits/if it proves to be necessary.
  2. The app will now function as a calendar sharing platform where you can see the events of others
  3. The notifications page will become an event page where you will see your events, the events of a selected user, and the latest events scheduled

# Java Deliverables
1. On my home page (index.html) I have a corresponding login.js file that saves the username to local storage where it is accessed in other functions later on
2. After pressing the log in button I implemented a window change that takes users to the events page. 
3. The events page is what I'm most proud of. It features three update columns: users, my events and latest events.
  - The users column I arguably spent way too much time on and created an accordion drop down feature where you can click on a user and it will populate a list of the events that user has scheduled. If that user doesn't have any events, when clicked the list will say no events scheduled or something like that. This is a dynamic feature so as users are added to the array right now, a new accordion tab will populate with their lists. It took forever but I think it's so cool!
  - my events is the middle column that populates after a user schedules an event on the add new event tab. Right now, it will only display one event at a time, but in the future I want to implement changes that show the most recent 6 events scheduled by the user. I also might edit the way the date and time stamp appears.
  - lastly I have the latest event column. It populates from an array of users and another array of events. I have a set interval function that adds a new event every 7 seconds but it only displays the most recent 6 events. 
4. Overall, this was a difficult assignment, but I'm super proud of what I was able to accomplish and I look forward to being able to refine my work even further!

# Web Service
1. In my index.js file I created an HTTP service using Node and express
2. I moved all of my files into the public directory and served them up using express static middleware on index.js
3. On Events.js I call a third party service that is supposed to populate the three most recent holidays under my events
4. In index.js there are multiple service endpoints for adding an event and retrieving the latest event for example
5. The functions like getObject, setObject, and displayObject call my service endpoints from the events.js file

