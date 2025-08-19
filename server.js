const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/about-me', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/about-me.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/portfolio.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;