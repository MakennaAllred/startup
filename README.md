# Startup Deliverable 

# Elevator Pitch
Sometimes planning events with friends can be hard. My application is going to be a combined calendar where users can log in, add friends, and invite those friends to calendar events. Say I want to set up a double date with my husband and another couple. Using my application, I can send a proposed event to everyone involved. Once they receive the request they can confirm it, deny it and offer an alternative, or simply deny it. Users will able to see what events they have confirmed or waht events they have and haven't confirmed. Additionally, I might allow the app to have a place where users can list what days/times during the week they are available so their friends can ask to schedule events during those times. I'm trying to keep it as simple as possible right now, but I think it will be useful!

# Key features
  - secure login
  - ability to accept or reject calendar invites
  - ability to propose new event invites
  - events that are accepted are stored and displayed as well as those that still need approval
  - calendar display
  - ability to list available times 
 
 # Technologies
  1. **HTML**: I will use correct HTML to have 5 structured pages. I will have a login page, a calendar display that can alternate between monthly and weekly view, I'll have a notifications page for events that need to be confirmed that also displays a confirmation or denial of the users proposals, a page to add new friends, and I'll have a page where users can create and propose new events.
  2. **CSS**: I'll use CSS to style the application so it looks aesthetically pleasing by using color themes to make the application look clean and cohesive, as well as display things in a calendar format. 
  3. **JavaScript**: I'll use JS for login authentication, approving or denying requests, and displaying notifications of proposed or accepted events.
  4. **Service**: I'll use service for login, retrieving approval or denial notifications, submitting approval/denial.
  5. **Database**: Store calendar events
  6. **Login**: Users will need to log in to propse/confirm events and add new friends. They can look up new friends by name or phone number (both will be required upon creating an account). Credentials will be stored securely in database
  7. **WebSocket**- As events are proposed and accepted notifcations will be broadcast to friends involved in the event
  8. **React**: I'll port the application to use React web framework as well! (I'm still learning what this means, but based off the startup example, I think I'll do something very similar to that)
