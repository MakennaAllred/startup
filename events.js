"use strict";

addEventListener("load", (event) => {
    function buildAccordionList(users) {
      let root = document.getElementById('root');
      let accordion = document.createElement('div');
      accordion.classList.add('accordion');
      accordion.id = 'accordionPanelStayOpen';
  
      users.forEach((user, index) => {
        // Create the accordion section
        let accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');
  
        // Create the section header
        let header = document.createElement('h2');
        header.classList.add('accordion-header');
  
        // Create the section content
        let button = document.createElement('button');
        button.classList.add('accordion-button');
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-toggle', 'collapse');
        button.setAttribute('data-bs-target', `#accordion-${index}`);
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', `accordion-${index}`);
        button.innerText = user.name;
        
        header.appendChild(button);
        accordionItem.appendChild(header);

        let collapse = document.createElement('div');
        collapse.id = 'accordion-${index}';
        collapse.classList.add('accordion-collapse', 'collapse');

        let body = document.createElement('div');
        body.classList.add('accordion-body');
        body.innerText = 'Events for ${user.name}';

        let eventList = document.createElement('ul');
      eventList.classList.add('list-group');

      events.forEach((event) => {
        if (event.name === user.name) {
          let eventItem = document.createElement('li');
          eventItem.classList.add('list-group-item');
          eventItem.innerText = event.title;
          eventList.appendChild(eventItem);
        }
      });

      if (eventList.childNodes.length === 0) {
        let noEventsItem = document.createElement('li');
        noEventsItem.classList.add('list-group-item', 'text-muted');
        noEventsItem.innerText = 'No events found';
        eventList.appendChild(noEventsItem);
      }

        collapse.appendChild(body);
        accordionItem.appendChild(collapse);

        accordion.appendChild(accordionItem); });
        
        root.appendChild(accordion);
      }

      const users =  [
        {name:"Genny"},{ name:"Chandler"},{name:"Holly"}
      ]
      const events = [
        { name: "Genny", title: "dinner" },
        { name: "Genny", title: "work meeting" },
        { name: "Holly", title: "lunch with Mak" },
        { name: "Chandler", title: "visit math TA" },
        { name: "Chandler", title: "pick up Cricket from park" }
      ];
    
      buildAccordionList(users, events);
    });
  
