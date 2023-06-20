import React from 'react';

export function Login() {
    return (
    <main>
        <div id ="logincontrols">
            <h1>Please Log in</h1>
        <label for="Name">Email</label> 
        <input type="text" id="name" placeholder="Your email here"> </input>
        <label for="Password">Password</label>
        <input type="password" id="Password" placeholder="password"></input>
        <div>
        <button type="button" class="btn btn-outline-light" id="Login" onclick="loginUser()">Login</button>
        <button type="button" class="btn btn-outline-light" onclick="createUser()">Create</button>
        </div>
        </div>

        <div id ="loggedincontrols">
            <h1>Log In Successful</h1>
            <div id="playeremail"></div>
            <button type="button" class="btn btn-primary" onclick="events()">Events</button>
            <button type="button" class="btn btn-primary" onclick="logout()">Log out</button>
            </div>
        </main>
    );
}