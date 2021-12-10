const express = require('express');

const app = express();

const path = require('path');

const publicDirectory = path.join(__dirname,'./public');

// console.log(publicDirectory);

app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

const mysql = require("mysql2");

app.set('view engine','hbs');

app.use('/',require('./routes/pages'));

app.use('/auth',require('./routes/auth'));

const db = require('./connection');

db.connect( (error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log("MYSQL connected..........");
    }
});

app.listen(4444,() => {
    console.log("Server Sarted on port 4444");
});