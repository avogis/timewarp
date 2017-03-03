import express from 'express';
const app = express();
import path from 'path';


app.use(express.static(__dirname + '/dist')); //eslint-disable-line

app.get('/', function (req, res) {
    res.send(path.join('Let\'s timewarp again!'));
});

app.get('/timewarp', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html')); //eslint-disable-line
});

app.listen(8003, function () {
    console.log('Example ap listening on port 8003!'); //eslint-disable-line
});
