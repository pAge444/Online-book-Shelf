const mysql = require('mysql2');

const db = require('../connection');

const { table } = require('console');

const path = require('path');

const publicDirectory = path.join(__dirname,'../public');

const fs = require('fs');
const { text } = require('body-parser');
const async = require('hbs/lib/async');

exports.books = async(req,res,next) => {
    db.query('SELECT * FROM Books',async(error,results) => {
        if(error){
            console.log(error);
            return next();
        }
        console.log(results);
        if(results.length > 0){
            req.books = results;
            return next();
        }
    });
}