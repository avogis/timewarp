import express from 'express';
const app = express();
import path from 'path';

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/timewarp', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html')); //eslint-disable-line
});

app.listen(8003, function () {
    console.log('Example app listening on port 8003!'); //eslint-disable-line
});

