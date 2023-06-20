import React from 'react';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import { MessageDialog } from '../login/messageDialog';

export function NewEvent() {
    //add new event
    let myname = localStorage.getItem('userName');
    if (myname === ""){
        <MessageDialog message = {'Please log in to add new event!'} onHide ={() => setDisplayError(null)}/>
    }
    return (
        <main>
        <img src="https://images.unsplash.com/photo-1611988615248-5d4f0b9ac31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&q=80" alt="Calendar"></img>
            <form method="get" action="proposal.html"></form>
            <label htmlFor="title"> Event Title </label>
            <input type="text" id="title" name="title"></input>
            <label htmlFor="datetime"> Date & Time: </label>
            <input type="datetime-local" name="varDatetime" id="datetime" />
            <Button id="addbtn" className="btn btn-outline-light" type="submit" onClick={() => addEvent()}>Add Event</Button>
        </main>
    );
}