import React, { Component } from 'react';
import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyALva3K4Kp6xkoaSkhtfXqTNe3ia8t3oJk',
    authDomain: 'timewarp-c35ae.firebaseapp.com',
    databaseURL: 'https://timewarp-c35ae.firebaseio.com',
    storageBucket: 'timewarp-c35ae.appspot.com',
    messagingSenderId: '1013479477821'
};

class TWButton extends Component{
    // firebase.initializeApp(config);
    // const database = firebase.database();
    render() {
        return(
            <button onClick={this.props.onClick}>{this.props.text}
            </button>
        );
    }
}


export default TWButton;
