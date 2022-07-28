import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';
import './index.css';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectDatabaseEmulator, getDatabase } from 'firebase/database';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { App } from './App';

initializeApp({
    apiKey: 'AIzaSyBGYuiulskFhwZFbnQLRtG3PqCz8h8xtms',
    authDomain: 'coscatcher.firebaseapp.com',
    databaseURL: 'https://coscatcher-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'coscatcher',
    storageBucket: 'coscatcher.appspot.com',
    messagingSenderId: '655740181816',
    appId: '1:655740181816:web:9cb4bdd6404002a228f5cd',
    measurementId: 'G-VHE7116XMJ'
});

if (window.location.hostname === 'localhost') {
    // auth emulator
    connectAuthEmulator(getAuth(), 'http://localhost:9099');
    // db emulator
    connectDatabaseEmulator(getDatabase(), 'localhost', 9000);
    // storage emulator
    connectStorageEmulator(getStorage(), 'localhost', 9199);
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
