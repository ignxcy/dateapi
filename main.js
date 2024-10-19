const express = require("express");
const app = express();
const port = 3000;

let date = new Date();
let month = date.getMonth();
let day = date.getDay();
let hour = date.getHours();
let year = date.getFullYear();

/* template
app.get('/month', (req, res) => {
    res.send(month.toString());
})
*/

app.get('/month', (req, res) => {
    res.send(month.toString());
})

app.get('/day', (req, res) => {
    res.send(day.toString());
})

app.get('/hour', (req, res) => {
    res.send(hour.toString());
})

app.get('/year', (req, res) => {
    res.send(year.toString());
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})