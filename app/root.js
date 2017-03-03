import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import TWButton from './components/TWButton';
import * as firebase from 'firebase';
import DBCONFIG from '../.dbconfig.json';


firebase.initializeApp(DBCONFIG);

function writeToDB(key, value) {
    const database = firebase.database();

    database.ref(key).set(value);
}

function startWarping(){
    const timestamp = new Date(Date.now());
    const today = timestamp.toISOString().substring(0, 10);
    const startTime = {
        start: timestamp.getTime()
    };

    writeToDB(today, startTime);
}

function stopWarping() {
    const timestamp = new Date(Date.now());
    const today = timestamp.toISOString().substring(0, 10);

    const stopTime = timestamp.getTime();
    const keyPath = `${today}/stop`;

    writeToDB(keyPath, stopTime);

}

const rootElement = (
    <div>
        <TWButton onClick={startWarping} text={'Start'}/>
        <TWButton onClick={stopWarping} text={'Stop'}/>
    </div>
);

ReactDOM.render(
    rootElement,
    document.getElementById('root')
);
