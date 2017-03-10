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

function displayBalance() {
    const { today } = getDateTime();
    firebase.database().ref(`${DBCONFIG['user']}/${today}/balance`).on('value', (snapshot) => {
        const totalMinutes = snapshot.val();
        if (totalMinutes !== null){
            const hours = Math.round(totalMinutes / 60);
            const minutes = Math.round(totalMinutes % 60);
            document.getElementById('balance').innerHTML =
            'Your balance is ' + hours + ' hours ' + minutes + ' minutes.';
        }else{
            document.getElementById('balance').innerHTML =
            'Have a great day timewarping';
        }
    });
}

function getDateBalance(today, stopDate) {
    const database = firebase.database();
    const userKey = `${DBCONFIG['user']}/${today}`;
    return database.ref(userKey).once('value').then((snapshot) => {
        const startDate = snapshot.val().start;
        return calculateDateBalance(startDate, stopDate);
    });

}

export function calculateDateBalance(startDate, stopDate){
    const dateDiff = stopDate - startDate;
    const minutes = dateDiff / 60000;
    return Math.round(minutes - 480);
}

export function startWarping(){
    const { today, timestamp } = getDateTime();
    const startTime = {
        start: timestamp
    };

    writeToDB(today, startTime);
    displayBalance();
}

export function stopWarping() {
    const { today, timestamp } = getDateTime();
    const stopTime = timestamp;
    const keyPath = `${today}/stop`;

    writeToDB(keyPath, stopTime);
    const timebalance = Promise.resolve(getDateBalance(today, stopTime));
    timebalance.then(function(balance) {
        writeToDB(`${today}/balance`, balance);
        displayBalance();
    });
}
