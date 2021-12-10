const mysql = require('mysql2');

const db = require('../connection');

const { table } = require('console');

const path = require('path');

const publicDirectory = path.join(__dirname,'../public');

const fs = require('fs');

exports.addbook = (req,res) => {
    console.log(publicDirectory);
    console.log(req.body);
}