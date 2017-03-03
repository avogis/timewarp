import test from 'ava';
import http from 'http';

test('foo', t => {
    t.pass();
});


test('Example Node Server', t => {
    http.get('http://127.0.0.1:8003', res => {
        t.is(200, res.statusCode);
    });
});
