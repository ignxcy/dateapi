const express = require("express");
const app = express();
const port = 3000;

let date = new Date();
let month = date.getMonth();
let day = date.getDay();
let dayOfTheWeek = date.getDay();
let hour = date.getHours();
let year = date.getFullYear();

switch (dayOfTheWeek) {
    case 0: dayOfTheWeek = "Sunday";
    break;
    case 1: dayOfTheWeek = "Monday";
    break;
    case 2: dayOfTheWeek = "Tuesday";
    break;
    case 3: dayOfTheWeek = "Wednesday";
    break;
    case 4: dayOfTheWeek = "Thursday";
    break;
    case 5: dayOfTheWeek = "Friday";
    break;
    case 6: dayOfTheWeek = "Saturday";
    break;
}


/* template
app.get('/month', (req, res) => {
    res.send(month.toString());
})
*/

const links = ["date", "month", "day", "day-of-the-week", "hour", "year"];

app.get('/', (req, res) => {
    res.redirect(links[Math.floor(Math.random() * links.length)]);
})

app.get('/month', (req, res) => {
    res.send(month.toString());
})

app.get('/day-of-the-week', (req, res) => {
    res.send(day.toString());
})

app.get('/day', (req, res) => {
    res.send(dayOfTheWeek.toString());
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