
const newevent = 'NewEvent';


addEventListener("load", (event) => {
    function buildAccordionList(users, events) {
      let root = document.getElementById('root');
      let accordion = document.createElement('div');
      accordion.classList.add('accordion');
      accordion.id = 'accordionPanelsStayOpenExample';
  
      users.forEach((user, index) => {
        let accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');
  
        let header = document.createElement('h2');
        header.classList.add('accordion-header');
  
        let button = document.createElement('button');
        button.classList.add('accordion-button', 'collapsed');
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-toggle', 'collapse');
        button.setAttribute('data-bs-target', `#accordion-${index}`);
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', `accordion-${index}`);
        button.innerText = user.name;
  
        header.appendChild(button);
        accordionItem.appendChild(header);
  
        let collapse = document.createElement('div');
        collapse.id = `accordion-${index}`;
        collapse.classList.add('accordion-collapse', 'collapse');
  
        let body = document.createElement('div');
        body.classList.add('accordion-body');
  
        let eventsList = document.createElement('div');
        eventsList.classList.add('accordion-body');
        
  
        events.forEach((event) => {
          if (event[0] === myname) {
            let eventItem = document.createElement('p');
            eventItem.innerText = eventname;
            eventsList.appendChild(eventItem);
          }
        });
  
        if (eventsList.childNodes.length === 0) {
          let noEventsItem = document.createElement('p');
          noEventsItem.innerText = 'No events found';
          eventsList.appendChild(noEventsItem);
        }
  
        body.appendChild(eventsList);
        collapse.appendChild(body);
        accordionItem.appendChild(collapse);
  
        accordion.appendChild(accordionItem);
      });
  
      root.appendChild(accordion);
    }
  
   
  
    buildAccordionList(users, events);
    displayEvents();
  });
  
  // socket.configureWebSocket();


  document.addEventListener('DOMContentLoaded', getObject);
  
  function getObject() {
    let user = localStorage.getItem("userName");
      fetch(`/api/events/${user}`)
        .then((response) => response.json())
        .then((data) => {
          const events = data;
          displayEvents(events);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    

  document.addEventListener('DOMContentLoaded', fetchholidays);

 

  function fetchholidays(){
    fetch('https://date.nager.at/api/v3/PublicHolidays/2023/US')
    .then((response) => response.json())
    .then((data) => {
      myevents = data;
      myevents.sort((a, b) => new Date(b.date) - new Date(a.date));
      const recentHolidays = myevents.slice(0, 3);
      displayHolidays(recentHolidays);
    })
    .catch((error) => {
      console.error('Error:' , error)
    });
  }

  function displayHolidays(holidays){
    let root = document.getElementById('myevents');
    holidays.forEach((holiday) => {
      let el = document.createElement('li');
      el.innerText = `${holiday.name} - ${holiday.date}`;
      root.appendChild(el);
    });
  }
  
  function displayEvents(events) {
    let object = JSON.parse(localStorage.getItem('myname'));
    let root = document.getElementById("myevents");
    events.forEach((event) => {
      let el = document.createElement('li');
      el.innerText = `${event.eventname} is happening at ${event.eventtime}`;
      root.appendChild(el);
    });
  }
  

  function displayLatest() {
    let root = document.getElementById('eventlist')
    latest.forEach((e) =>{
      let el = document.createElement('li');
      el.innerText = `${eventuser} created ${eventname} at ${eventtime}`
      root.appendChild(el);
    });
  }

// const socket = {
//   configureWebSocket(){
//     const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
//     this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
//   },

//   broadcastEvent(from, type, value){
//     const event = {
//       from:from,
//       type: type,
//       value:value,
//     };
//     this.socket.send(JSON.stringify(event));
//   }
// };
