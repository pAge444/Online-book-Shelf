const mysql = require('mysql2');

const db = require('../connection');

const { table } = require('console');

const path = require('path');

const publicDirectory = path.join(__dirname,'../public');

const fs = require('fs');
const { text } = require('body-parser');

exports.read_book = async(req,res,next) => {
    console.log("Yashwaekfdksnfkjsafnlfsjhfljrhlgiuhefldkjndkjfnkvjdnfkjvn");
    const book_ID = req.param('book_ID');
    // console.log(book_ID);
    let book_path = path.join(publicDirectory,'books',`${book_ID}`);
    // console.log(book_path);
    // console.log("Yashwant Meena");
    let result = [];
    let text_path, coverImage_path;
    fs.readdir(book_path,function(err,files){
        if(err){
            console.log(err);
            return next();
        }
        text_path = path.join('books',`${book_ID}`,'text.html');
        index_path = path.join('books',`${book_ID}`,'index.html');
        // console.log(text_path);
        // console.log(coverImage_path);
        // result.push(text_path);
        // result.push(coverImage_path);
        // console.log(result);
        req.text_path = text_path;
        // req.image_path = coverImage_path;
        req.index_path = index_path;
        req.book_ID = book_ID;
        // console.log(req.text_path);
    });
    const table_Name = "B_" + book_ID;
    // console.log(table_Name);
    db.query('SELECT * FROM ??',[table_Name],async(error,results) => {
        if(error){
            console.log(error);
            return next();
        }
        console.log(results);
        if(results.length > 0){
            // for(let i = 0;i < results.length;i++){
            //     results[i].para_ID = path.join('books',`${book_ID}`,'text.html' + '#' + results[i].para_ID);
            // }
            // console.log(results);
            req.bookMarks = results;
            return next();
        }else{
            return next();
        }
    });
}