function addEvent(){
setObject();
window.alert("New Event Added!")
window.location.href = 'events.html';
}

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

    fetch('api/events/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(object.events[0]),
    })
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error)
    });
  }
    