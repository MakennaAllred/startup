import React from 'react';
import {useNavigate} from 'react-router-dom';
import Buttom from 'react-bootstrap/Button';

export function Authenticated(props){
    const navigate = useNavigate();

    function logout() {
        fetch(`/api/auth/logout`, {
            method: 'delete',
        })
        .catch(() => {
            //logout fails
        })
        .finally(() => {
            localStorage.removeItem('usernName');
            props.onLogout();
        });
    }

    return (
        <div id ="loggedincontrols">
            <h1>Log In Successful</h1>
            <div id="playeremail"></div>
            <Button className="btn btn-primary" onClick={() => navigate ('/events')}>Events</Button>
            <Button className="btn btn-primary" onClick={() =>logout()}>Log out</Button>
            </div>
    );
}
