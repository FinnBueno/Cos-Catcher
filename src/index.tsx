import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { App } from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';

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

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
