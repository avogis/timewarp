import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import TWButton from './components/TWButton';
import * as firebase from 'firebase';
import DBCONFIG from '../.dbconfig.json';


firebase.initializeApp(DBCONFIG['credentials']);

function writeToDB(key, value) {
    const database = firebase.database();
    const userKey = `${DBCONFIG['user']}/${key}`;
    database.ref(userKey).set(value);
}

function getDateTime() {
    const date = new Date(Date.now());
    return {
        today: date.toISOString().substring(0, 10),
        timestamp: date.getTime()
    };
}

function startWarping(){
    const { today, timestamp } = getDateTime();
    const startTime = {
        start: timestamp
    };

    writeToDB(today, startTime);
}

function stopWarping() {
    const { today, timestamp } = getDateTime();
    const stopTime = timestamp;
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
