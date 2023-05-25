"use strict";

window.addEventListener("load", (event) => {
    const users = [
      { name: "Genny" },
      { name: "Chandler" },
      { name: "Holly" }
    ];
  
    const events = [
      { name: "Genny", title: "dinner" },
      { name: "Genny", title: "work meeting" },
      { name: "Holly", title: "lunch with Mak" },
      { name: "Chandler", title: "visit math TA" },
      { name: "Chandler", title: "pick up Cricket from park" }
    ];
  
    function buildAccordionList(users, events) {
      let root = document.getElementById('root');
  
      users.forEach(user => {
        // Create the accordion section
        let section = document.createElement('div');
        section.classList.add('accordion-section');
  
        // Create the section header
        let header = document.createElement('div');
        header.classList.add('accordion-header');
        header.innerText = user.name;
  
        // Create the section content
        let content = document.createElement('div');
        content.classList.add('accordion-content');
  
        // Filter events for the current user
        let userEvents = events.filter(event => event.name === user.name);
        
        // Populate the content with user events
        userEvents.forEach(event => {
          let eventElement = document.createElement('div');
          eventElement.innerText = event.title;
          content.appendChild(eventElement);
        });
  
        // Append the header and content to the section
        section.appendChild(header);
        section.appendChild(content);
  
        // Append the section to the root element
        root.appendChild(section);
      });
    }
  
    // Call the function to build the accordion list
    buildAccordionList(users, events);
  });
  
