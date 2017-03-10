import test from 'ava';
import http from 'http';
import {calculateDateBalance} from './app/warp_service';

test('foo', t => {
    t.pass();
});


test('Example Node Server', t => {
    http.get('http://127.0.0.1:8003', res => {
        t.is(200, res.statusCode);
    });
});

test('Calculate negative balance', t => {
    const startDate = new Date('2017-03-08 09:00:00').getTime();
    const stopDate = new Date('2017-03-08 09:30:00').getTime();
    t.is(calculateDateBalance(startDate, stopDate), -450);
});

test('Calculate postitive balance', t => {
    const startDate = new Date('2017-03-08 09:00:00').getTime();
    const stopDate = new Date('2017-03-08 17:30:00').getTime();
    t.is(calculateDateBalance(startDate, stopDate), 30);
});

test('Calculate zero balance', t => {
    const startDate = new Date('2017-03-08 09:00:00').getTime();
    const stopDate = new Date('2017-03-08 17:00:00').getTime();
    t.is(calculateDateBalance(startDate, stopDate), 0);
});
