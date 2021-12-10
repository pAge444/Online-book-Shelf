const mysql = require('mysql2');

const { promisify } = require('util');

const db = require('../connection');

const { table } = require('console');

const path = require('path');

const publicDirectory = path.join(__dirname,'../public');

const fs = require('fs');

exports.add_bookMark = async(req,res,next) => {
    console.log(req.body);
    const table_Name = "B_" + req.body.book_id;
    const para_ID = req.body.para_id;
    const bookMark = req.body.bookMark;
    console.log(table_Name);
    console.log(para_ID);
    let check = true;
    db.query('SELECT para_ID FROM ?? WHERE para_ID = ?',[table_Name,para_ID],async(error,results) => {
        if(error){
            console.log(error);
            return next();
        }
        if(results.length > 0){
            console.log('Already bookMarked');
            req.mark = 0;
            check = false;
            return next();
        }
    });
    const d = new Date();
    if(check){
        db.query('INSERT INTO ?? SET ?',[table_Name,{para_ID : para_ID,create_time:d,bookmark : bookMark}],async(error,results) => {
            if(error){
                console.log(error);
                return next();
            }
            if(results.length > 0){
                console.log('result');
                req.mark = 1;
                console.log("BookMark Created");
                return next();
            }
        });
    }
}
exports.delete_bookMark = async(req,res,next) => {
    console.log(req.body);
    const table_Name = "B_" + req.body.book_id;
    const delete_ID = req.body.delete_id;
    console.log(table_Name);
    console.log(delete_ID);
    db.query('DELETE FROM ?? WHERE para_ID = ?',[table_Name,delete_ID],async(error,results) => {
        if(error){
            console.log(error);
            return next();
        }
        console.log("SuccessFully deleted!");
        return next();
    });
}