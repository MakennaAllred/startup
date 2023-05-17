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
6. I also tried to implement spacing between elements by adjusting the respective padding or margins so things fit nicely on the page. 
7. I'm super excited continually refine my work.
