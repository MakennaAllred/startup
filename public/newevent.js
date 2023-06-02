function addEvent(){
setObject();
window.alert("New Event Added!")
window.location.href = 'notifications.html';
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
  }
    