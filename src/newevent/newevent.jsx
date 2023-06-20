import React from 'react';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import { MessageDialog } from '../login/messageDialog';

export function NewEvent() {
    const [eventtitle, setNewEvent] = React.useState('');
    const [eventdate, setEventDate] = React.useState('');
    let myname = localStorage.getItem('userName');
    // add new event    
    function setObject(){
    if (myname === ""){
        <MessageDialog message = {'Please log in to add new event!'} onHide ={() => setDisplayError(null)}/>
    }
    else{
        <MessageDialog message = {'New event added!'} onHide ={() => setDisplayError(null)}/>
    }
        let object = {
            name: myname,
            events: [
                {
                    eventuser: myname,
                    eventname: eventtitle,
                    eventtime: eventdate
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


    

    return (
        <main>
        <img src="https://images.unsplash.com/photo-1611988615248-5d4f0b9ac31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&q=80" alt="Calendar"></img>
            <label htmlFor="title"> Event Title </label>
            <input type="text" id="title" name="title"
            onChange={(e) => setNewEvent(e.target.value)}
            ></input>
            <label htmlFor="datetime"> Date & Time: </label>
            <input type="datetime-local" name="varDatetime" id="datetime"
            onChange={(e) => setEventDate(e.target.value)} />
            <Button id="addbtn" className="btn btn-outline-light" type="submit" onClick={() => setObject()}>Add Event</Button>
        </main>
    );
}