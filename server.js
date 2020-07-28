const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars')
// create top level functions
const app = express()
/*
let middleware1 = (res, req, next) => {
    console.log('i am middleware one');
    next();
}
let middleware2 = (res, req, next) => {
    console.log('i am middleware two');
    next();
}
app.use(middleware1);

*/

/*========================================= MIDDLEWARE BLOCK STARTS HERE============================================================= */
app.engine('handlebars', exphbs());
app.set("view engine", "handlebars")


/*========================================================MIDDILEWARE BLOCK ENDS HERE==================================================*/
//connect database

let mongodb_url = "mongodb+srv://ravi1401:ravi1401@cluster0.tcr0k.mongodb.net/ravi1401?retryWrites=true&w=majority"
mongoose.connect(mongodb_url, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) throw err
    console.log("Database Connected...")
})

// create express webserver
//basic root
app.get("/", (req, res) => {
    res.render('home.handlebars')
})


//listen port
let port = 5000;
app.listen(port, (err) => {
    if (err) throw err
    console.log("express server is running at portnumber" + port)
})

