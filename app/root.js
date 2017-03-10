import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import TWButton from './components/TWButton';
import {startWarping, stopWarping} from './warp_service';

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
