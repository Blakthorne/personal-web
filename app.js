const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
 
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.get('/about-me/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/about-me.html'));
})

app.get('/portfolio/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/portfolio.html'));
})

app.listen(port, () => {
 console.log(`App listening at http://localhost:${port}`);
});