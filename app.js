let express = require('express'); // importing express module
let router = require('./auth') // importing router module from auth.js
const bodyParser = require("body-parser"); // importing bodyparser module

let app = express(); // creating a express app
app.use(bodyParser.json()); // parsing the json data and mapping it to an object
app.use(bodyParser.urlencoded({ extended: false })); // next class

app.use((req,res,next) => {
    console.log("hi i am console")
    next();
})  // sample for "next" concept - this part will be executed and passes the control to the next use() part

app.use(router); // router module is registered with express app

module.exports = app;    //exporting express app