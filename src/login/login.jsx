import React from 'react';

export function Login() {
    
    return (
    <main>
        <div id ="logincontrols">
            <h1>Please Log in</h1>
        <label htmlFor="Name">Email</label> 
        <input type="text" id="name" placeholder="Your email here"> </input>
        <label htmlFor="Password">Password</label>
        <input type="password" id="Password" placeholder="password"></input>
        <div>
        <button type="button" className="btn btn-outline-light" id="Login" onClick={loginUser}>Login</button>
        <button type="button" className="btn btn-outline-light" onClick={createUser}>Create</button>
        </div>
        </div>

        <div id ="loggedincontrols">
            <h1>Log In Successful</h1>
            <div id="playeremail"></div>
            <button type="button" className="btn btn-primary" onClick={events}>Events</button>
            <button type="button" className="btn btn-primary" onClick={logout}>Log out</button>
            </div>
        </main>
    );
}