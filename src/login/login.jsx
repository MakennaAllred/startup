import React from 'react';
import {Unauthenticated} from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({userName, authState, onAuthChange}) {
    console.log(authState);
    return (
    <main>
        <div>
            {authState !== AuthState.Unknown && <h1>Please Log in </h1>}
            {authState === AuthState.Authenticated && (
                <Authenticated userName={userName} onLogout={() => onAuthChange(userName,AuthState.Unauthenticated)}/>
            )}
            {authState === AuthState.Unauthenticated && (
                <Unauthenticated
                userName={userName}
                onLogin={(loginUser) => {
                    onAuthChange(loginUser, AuthState.Authenticated);
                }}
                />
            )}
        </div>
    </main>
    );
}