import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import TWButton from './components/TWButton';

function alertFunction(){
    alert('TIMEEEEE!!!');
}

const button = <TWButton onClick={alertFunction} text={'Start'}/>;

ReactDOM.render(
    button,
    document.getElementById('root')
);
