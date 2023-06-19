
function addEvent(){
    let myname = localStorage.getItem("userName");
    if(myname === ""){
        window.alert("Please log in to add new event!");
        window.location.href = 'index.html';
    }
    else{
        //broadcast event in latest events
setObject();
window.alert("New Event Added!");
window.location.href = 'events.html';
};
}

function setObject(){
    let myname = localStorage.getItem("userName");
    let event = document.querySelector('#title').value;
    let time = document.querySelector("#datetime").value
    let object = {
        name: myname,
        events: [
            {
                eventuser: myname,
                eventname: event,
                eventtime: time
            }
        ]
    };
    localStorage.setItem('myname', JSON.stringify(object))
    console.log(JSON.parse(localStorage.getItem("myname")));
    console.log(object);
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
    