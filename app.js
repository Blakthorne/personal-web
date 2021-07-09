const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
 
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.get('/musician/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/musician.html'));
})

app.get('/programmer/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/programmer.html'));
})

app.get('/learner/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/learner.html'));
})

app.listen(port, () => {
 console.log(`App listening at http://localhost:${port}`);
});