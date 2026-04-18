const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} - [${req.method}] ${req.url}`);
    next(); 
});


app.get('/', (req, res) => {
    res.send("Welcome to Route Handling!");
});


app.get('/about', (req, res) => {
    res.send("<h1>About Us</h1><p>We are learning Express routing!</p>");
});


app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Viewing Product ID: ${id}`);
});


app.get('/search', (req, res) => {
    const term = req.query.q;
    if (!term) {
        return res.send("Please provide a search term (e.g., /search?q=books)");
    }
    res.send(`Searching for: ${term}`);
});


app.use((req, res) => {
    res.status(404).send("Page Not Found - Check your URL!");
});


app.listen(PORT, () => {
    console.log(`Server is humming along at http://localhost:${PORT}`);
});