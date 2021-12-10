const express = require('express');
const command = require('nodemon/lib/config/command');

const router = express.Router();

const readController = require('../controllers/readbook');

const add_bookmarkController = require('../controllers/add_bookmark');

const get_allbooksController = require('../controllers/allBooks');

router.get('/',get_allbooksController.books,(req, res) => {
    // console.log("Yashwant Meena");
    // console.log(req.books);

    res.render('index',{
        books : req.books
    });
});

router.get('/add',(req,res) => {
    res.render('addbook.hbs');
});
router.get('/read',readController.read_book,(req,res) => {
    // console.log(req.book_ID);
    // console.log(req.bookMarks);
    // console.log("Back");
    if(req.book_ID){
        res.render('readbook',{
            bookMarks : req.bookMarks,
            book_ID : req.book_ID,
            index : req.index_path,
            text : req.text_path
        });
    }else{
        res.redirect('/');
    }
});

router.post('/add_bookmark',add_bookmarkController.add_bookMark,(req,res) => {
    // console.log(req.body);
    // res.stat=1;
    // console.log("Yashwant Meena");
});
router.post('/delete_bookmark',add_bookmarkController.delete_bookMark,(req,res) => {
    // console.log(req.body);
});
module.exports = router; 