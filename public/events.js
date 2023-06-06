
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
          if (event.name === user.name) {
            let eventItem = document.createElement('p');
            eventItem.innerText = event.title;
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
  
    const users = [
      { name: "Genny" },
      { name: "Chandler" },
      { name: "Holly" },
      { name: "James" }
    ];
  
    const events = [
      { name: "Genny", title: "dinner" },
      { name: "Genny", title: "work meeting" },
      { name: "Holly", title: "lunch with Mak" },
      { name: "Chandler", title: "visit math TA" },
      { name: "Chandler", title: "pick up Cricket from park" }
    ];
  
    buildAccordionList(users, events);
    displayEvents();
  });
  

  function setObject(){
    let myname = localStorage.getItem("userName");
    let event = document.querySelector('#title').value;
    let time = document.querySelector("#datetime").value
    let object = {
        name: myname,
        events: [
            {
                eventname: event,
                eventtime: time
            }
        ]
    };
    localStorage.setItem('myname', JSON.stringify(object))
    console.log(JSON.parse(localStorage.getItem("myname")));
  }

  document.addEventListener('DOMContentLoaded', getObject);
  
  function getObject() {
      fetch('/api/events')
        .then((response) => response.json())
        .then((data) => {
          const events = [data];
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
      displayEvents(recentHolidays);
    })
    .catch((error) => {
      console.error('Error:' , error)
    });
  }
  
  function displayEvents(events) {
    let object = JSON.parse(localStorage.getItem('myname'));
    let root = document.getElementById("myevents");
    root.innerHTML = ""
    object.events.forEach((event) => {
      let el = document.createElement('li');
      el.innerText = `${event.eventname} is happening at ${event.eventtime}`;
      root.appendChild(el);
    });
  }
  

  const users = [
    "Genny" , "Chandler", "Holly", "James"
  ];

  const events = [
  "dinner", "work meeting", "date night", "study session"
  ];

function generateEvent() {
    const randomUser = users[Math.floor(Math.random()* users.length)];
    const randomEvent = events[Math.floor(Math.random()* events.length)];
    const eventList = document.getElementById('eventList');
    const listItem = document.createElement('li');
    listItem.textContent = `${randomUser} scheduled ${randomEvent}`;
    eventList.insertBefore(listItem, eventList.firstChild); // Insert the new event at the beginning of the list

    if (eventList.children.length > 6) {
        eventList.lastChild.remove(); // Remove the oldest event if the list exceeds 10 events
    }
    } 
    setInterval(generateEvent, 7000);
